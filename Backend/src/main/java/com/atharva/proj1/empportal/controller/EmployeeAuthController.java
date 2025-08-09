package com.atharva.proj1.empportal.controller;


import com.atharva.proj1.dto.LoginRequest;
import com.atharva.proj1.empportal.service.EmployeeAuthService;
import com.atharva.proj1.empportal.entity.EmployeePortal;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/employee/auth")
@CrossOrigin
public class EmployeeAuthController {

    @Autowired
    private EmployeeAuthService authService;

    @PostMapping("/register")
    public ResponseEntity<?> signup(@RequestBody EmployeePortal employeePortal){
        EmployeePortal saved = authService.register(employeePortal);
        return ResponseEntity.ok(saved);
    }

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody LoginRequest req){
        return authService.login(req.getEmail(), req.getPassword())
            .<ResponseEntity<Object>>map(ResponseEntity::ok)
            .orElse(ResponseEntity.status(401).body("Invalid Credentials"));
    }
}
