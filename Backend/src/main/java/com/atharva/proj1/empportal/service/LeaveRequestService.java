package com.atharva.proj1.empportal.service;

import com.atharva.proj1.empportal.entity.EmployeeLeaveRequest;
import com.atharva.proj1.empportal.repository.LeaveRequestRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class LeaveRequestService {
    private final LeaveRequestRepository leaveRequestRepository;

    public LeaveRequestService(LeaveRequestRepository leaveRequestRepository){
        this.leaveRequestRepository = leaveRequestRepository;
    }

    /**
     * Apply for leave (default status: PENDING).
     */
    public EmployeeLeaveRequest applyLeave(EmployeeLeaveRequest employeeLeaveRequest){
        employeeLeaveRequest.setStatus(EmployeeLeaveRequest.LeaveStatus.PENDING);
        return leaveRequestRepository.save(employeeLeaveRequest);
    }

    /**
     * Get all leave requests by employee email.
     */
    public List<EmployeeLeaveRequest> getLeavesByEmployee(String email){
        return leaveRequestRepository.findByEmployeeEmail(email);
    }

    /**
     * Get all leave requests (for admin).
     */
    public List<EmployeeLeaveRequest> getAllLeaves(){
        return leaveRequestRepository.findAll();
    }

    /**
     * Update the status of a leave request.
     * Throws exception if leave not found.
     */
    public EmployeeLeaveRequest updateLeaveStatus(Long id, EmployeeLeaveRequest.LeaveStatus status){
        EmployeeLeaveRequest leave = leaveRequestRepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("Leave not found with ID: " + id));
        leave.setStatus(status);
        return leaveRequestRepository.save(leave);
    }
}
