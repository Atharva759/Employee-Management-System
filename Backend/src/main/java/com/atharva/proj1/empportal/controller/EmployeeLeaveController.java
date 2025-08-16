package com.atharva.proj1.empportal.controller;

import com.atharva.proj1.empportal.entity.EmployeeLeaveRequest;
import com.atharva.proj1.empportal.service.LeaveRequestService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/leave")
@CrossOrigin(origins = "http://localhost:5173")
public class EmployeeLeaveController {
    private LeaveRequestService leaveRequestService;

    public EmployeeLeaveController(LeaveRequestService leaveRequestService){
        this.leaveRequestService=leaveRequestService;
    }

    @PostMapping("/apply")
    public EmployeeLeaveRequest applyLeave(@RequestBody EmployeeLeaveRequest employeeLeaveRequest){
        return leaveRequestService.applyLeave(employeeLeaveRequest);
    }
    @GetMapping("/employee/{email}")
    public List<EmployeeLeaveRequest> getLeavesByEmployee(@PathVariable String email){
        return leaveRequestService.getLeavesByEmployee(email);
    }

    // Admin side
    @GetMapping("/all")
    public List<EmployeeLeaveRequest> getAllLeaves(){
        return leaveRequestService.getAllLeaves();
    }
    @PutMapping("{id}/status")
    public EmployeeLeaveRequest updateLeaveStatus(@PathVariable Long id, @RequestParam EmployeeLeaveRequest.LeaveStatus status){
        return leaveRequestService.updateLeaveStatus(id,status);
    }


}
