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
    public EmployeeLeaveRequest applyLeave(EmployeeLeaveRequest employeeLeaveRequest){
        employeeLeaveRequest.setStatus(EmployeeLeaveRequest.LeaveStatus.PENDING);
        return leaveRequestRepository.save(employeeLeaveRequest);
    }
    public List<EmployeeLeaveRequest> getLeavesByEmployee(String email){
        return leaveRequestRepository.findByEmployeeEmail(email);
    }
    public List<EmployeeLeaveRequest> getAllLeaves(){
        return leaveRequestRepository.findAll();
    }
    public EmployeeLeaveRequest updateLeaveStatus(Long id, EmployeeLeaveRequest.LeaveStatus status){
        EmployeeLeaveRequest leave = leaveRequestRepository.findById(id)
                .orElseThrow(()->new RuntimeException("Leave not found"));
        leave.setStatus(status);
        return leaveRequestRepository.save(leave);
    }

}
