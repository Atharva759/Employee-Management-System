package com.atharva.proj1.empportal.service;

import com.atharva.proj1.empportal.entity.EmployeePortal;
import com.atharva.proj1.empportal.repository.EmployeeAuthRepository;
import com.atharva.proj1.util.JwtUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class EmployeeAuthService {

    @Autowired
    private JwtUtil jwtUtil;

    @Autowired
    private EmployeeAuthRepository repo;

    @Autowired
    private PasswordEncoder passwordEncoder;

    // Register Employee
    public EmployeePortal register(EmployeePortal employeePortal) {
        // Prevent duplicate registration
        if (repo.findByEmail(employeePortal.getEmail()).isPresent()) {
            throw new RuntimeException("Email already registered");
        }

        // Encode password
        employeePortal.setPassword(passwordEncoder.encode(employeePortal.getPassword()));

        return repo.save(employeePortal);
    }

    // Login Employee
    public Optional<String> login(String email, String password) {
        return repo.findByEmail(email)
                .filter(emp -> passwordEncoder.matches(password, emp.getPassword()))
                .map(emp -> jwtUtil.generateToken(emp.getEmail()));
    }
}
