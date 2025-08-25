package com.atharva.proj1.empportal.controller;

import com.atharva.proj1.empportal.entity.EmployeeLeaveRequest;
import com.atharva.proj1.empportal.service.LeaveRequestService;
import com.atharva.proj1.util.JwtUtil;
import io.jsonwebtoken.ExpiredJwtException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@CrossOrigin
@RestController
@RequestMapping("/api/leaves")
public class LeaveRequestController {

    @Autowired
    private LeaveRequestService leaveRequestService;

    @Autowired
    private JwtUtil jwtUtil;

    //  1. Apply for leave (employee)
    @PostMapping("/apply")
    public ResponseEntity<?> applyLeave(@RequestBody EmployeeLeaveRequest leaveRequest,
                                        @CookieValue(name = "token") String token) {
        if (token == null) {
            return ResponseEntity.status(401).body(Map.of("error", "Unauthorized: No token found"));
        }

        try {
            String email = jwtUtil.extractEmail(token);
            leaveRequest.setEmployeeEmail(email); // enforce employee identity
            EmployeeLeaveRequest saved = leaveRequestService.applyLeave(leaveRequest);
            return ResponseEntity.ok(saved);
        } catch (ExpiredJwtException e) {
            return ResponseEntity.status(401).body(Map.of("error", "Token expired"));
        } catch (Exception e) {
            return ResponseEntity.status(401).body(Map.of("error", "Invalid token"));
        }
    }

    //  2. Get logged-in employee's leave requests
    @GetMapping("/my")
    public ResponseEntity<?> getMyLeaves(@CookieValue(name = "token") String token) {
        if (token == null) {
            return ResponseEntity.status(401).body(Map.of("error", "Unauthorized: No token found"));
        }

        try {
            String email = jwtUtil.extractEmail(token);
            List<EmployeeLeaveRequest> leaves = leaveRequestService.getLeavesByEmployee(email);
            return ResponseEntity.ok(leaves);
        } catch (ExpiredJwtException e) {
            return ResponseEntity.status(401).body(Map.of("error", "Token expired"));
        } catch (Exception e) {
            return ResponseEntity.status(401).body(Map.of("error", "Invalid token"));
        }
    }


}
