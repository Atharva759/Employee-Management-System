package com.atharva.proj1.empportal.controller;

import com.atharva.proj1.dto.EmployeeLoginRequest;
import com.atharva.proj1.empportal.service.EmployeeAuthService;
import com.atharva.proj1.empportal.entity.EmployeePortal;
import com.atharva.proj1.util.JwtUtil;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.ResponseCookie;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.Duration;
import java.util.Map;

@RestController
@RequestMapping("/api/employee/auth")
@CrossOrigin(originPatterns = {"http://localhost:5173","https://employee-management-sys-afk.vercel.app"}, allowCredentials = "true")
public class EmployeeAuthController {


    @Autowired
    private JwtUtil jwtUtil;

    @Autowired
    private EmployeeAuthService authService;

    //  Register new employee
    @PostMapping("/register")
    public ResponseEntity<?> signup(@RequestBody EmployeePortal employeePortal) {
        EmployeePortal saved = authService.register(employeePortal);
        return ResponseEntity.ok(saved);
    }

    //  Login employee and set JWT in HttpOnly cookie
    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody EmployeeLoginRequest req, HttpServletResponse response) {

        return authService.login(req.getEmail(), req.getPassword())
                .map(token -> {
                    // Create secure HttpOnly cookie
                    ResponseCookie cookie = ResponseCookie.from("token", token)
                            .httpOnly(true) // prod = true , local = false
                            .secure(true)
                            .sameSite("None")
                            .path("/")
                            .maxAge(Duration.ofDays(1)) // 1 day expiry
                            .build();

                    response.addHeader(HttpHeaders.SET_COOKIE, cookie.toString());

                    return ResponseEntity.ok(Map.of(
                            "message", "Login Success",
                            "email", req.getEmail()
                    ));
                })
                .orElse(ResponseEntity.status(401).body(Map.of("error", "Invalid credentials")));
    }

    //  Logout - clear JWT cookie
    @PostMapping("/logout")
    public ResponseEntity<?> logout(HttpServletResponse response) {
        ResponseCookie cookie = ResponseCookie.from("token", "")
                .httpOnly(true)
                .secure(false)
                .path("/")
                .maxAge(0) // delete cookie immediately
                .sameSite("Lax")
                .build();

        response.setHeader("Set-Cookie", cookie.toString());

        return ResponseEntity.ok(Map.of("message", "Logged out successfully"));
    }
}
