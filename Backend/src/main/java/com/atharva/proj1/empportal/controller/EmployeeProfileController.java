package com.atharva.proj1.empportal.controller;

import com.atharva.proj1.empportal.entity.EmployeeProfile;
import com.atharva.proj1.empportal.service.EmployeeProfileService;
import com.atharva.proj1.util.JwtUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@CrossOrigin
@RestController
@RequestMapping("/api/profile")
public class EmployeeProfileController {

    @Autowired
    private EmployeeProfileService profileService;

    @Autowired
    private JwtUtil jwtUtil;

    @GetMapping
    public ResponseEntity<?> getProfile(@CookieValue(name = "jwt", required = false) String token) {
        if (token == null) {
            return ResponseEntity.status(401).body(Map.of("error", "Unauthorized: No token found"));
        }

        try {
            String email = jwtUtil.extractEmail(token);

            return profileService.getProfileByEmail(email)
                    .map(profile -> ResponseEntity.ok().body(profile)) // ✅ explicit
                    .orElseGet(() -> ResponseEntity.status(404)
                            .<EmployeeProfile>body(null)); // ✅ works fine now
        }
        catch (io.jsonwebtoken.ExpiredJwtException e) {
            return ResponseEntity.status(401).body(Map.of("error", "Token expired"));
        }
        catch (Exception e) {
            return ResponseEntity.status(401).body(Map.of("error", "Invalid token"));
        }
    }

}
