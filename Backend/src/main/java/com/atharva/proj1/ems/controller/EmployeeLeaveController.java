package com.atharva.proj1.ems.controller;

import com.atharva.proj1.empportal.entity.EmployeeLeaveRequest;
import com.atharva.proj1.empportal.service.LeaveRequestService;
import com.atharva.proj1.util.JwtUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/leaves")
@CrossOrigin
public class EmployeeLeaveController {

    private final LeaveRequestService leaveRequestService;
    private final JwtUtil jwtUtil;

    @Autowired
    public EmployeeLeaveController(LeaveRequestService leaveRequestService, JwtUtil jwtUtil){
        this.leaveRequestService = leaveRequestService;
        this.jwtUtil = jwtUtil;
    }


    /** Admin: update leave status */
    @PutMapping("/{id}/status")
    public ResponseEntity<?> updateLeaveStatus(@PathVariable Long id, @RequestParam EmployeeLeaveRequest.LeaveStatus status){
        try {
            EmployeeLeaveRequest updated = leaveRequestService.updateLeaveStatus(id, status);
            return ResponseEntity.ok(updated);
        } catch (RuntimeException e){
            return ResponseEntity.status(404).body(Map.of("error", e.getMessage()));
        }
    }

    /** Admin: get all leaves */
    @GetMapping("/all")
    public List<EmployeeLeaveRequest> getAllLeaves(){
        return leaveRequestService.getAllLeaves();
    }
}
