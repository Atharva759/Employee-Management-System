package com.atharva.proj1.ems.controller;

import com.atharva.proj1.ems.entity.LeaveRequest;
import com.atharva.proj1.ems.service.LeaveService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/leaves")
@CrossOrigin
public class LeaveController {
    private final LeaveService leaveService;

    public LeaveController(LeaveService leaveService) {
        this.leaveService = leaveService;
    }

    // Apply for leave
    @PostMapping
    public LeaveRequest applyLeave(@RequestBody LeaveRequest leaveRequest) {
        return leaveService.applyLeave(leaveRequest);
    }

    // Get leaves for an employee
    @GetMapping("/{email}")
    public List<LeaveRequest> getLeavesByEmployee(@PathVariable String email) {
        return leaveService.getLeavesByEmployee(email);
    }

    // Admin: Get all leaves
    @GetMapping("/all")
    public List<LeaveRequest> getAllLeaves() {
        return leaveService.getAllLeaves();
    }

    // Admin: Update leave status
    @PutMapping("/{id}/status")
    public LeaveRequest updateLeaveStatus(@PathVariable Long id, @RequestParam LeaveRequest.LeaveStatus status) {
        return leaveService.updateLeaveStatus(id, status);
    }
}
