package com.atharva.proj1.ems.service;

import com.atharva.proj1.ems.entity.LeaveRequest;
import com.atharva.proj1.ems.repository.LeaveRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class LeaveService {
    private final LeaveRepository leaveRepository;

    public LeaveService(LeaveRepository leaveRepository) {
        this.leaveRepository = leaveRepository;
    }

    public LeaveRequest applyLeave(LeaveRequest leaveRequest) {
        leaveRequest.setStatus(LeaveRequest.LeaveStatus.PENDING);
        return leaveRepository.save(leaveRequest);
    }

    public List<LeaveRequest> getLeavesByEmployee(String email) {
        return leaveRepository.findByEmployeeEmail(email);
    }

    public List<LeaveRequest> getAllLeaves() {
        return leaveRepository.findAll();
    }

    public LeaveRequest updateLeaveStatus(Long id, LeaveRequest.LeaveStatus status) {
        LeaveRequest leave = leaveRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Leave not found"));
        leave.setStatus(status);
        return leaveRepository.save(leave);
    }
}
