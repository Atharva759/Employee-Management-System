package com.atharva.proj1.empportal.repository;

import com.atharva.proj1.empportal.entity.EmployeeLeaveRequest;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface LeaveRequestRepository extends JpaRepository<EmployeeLeaveRequest, Long> {
    List<EmployeeLeaveRequest> findByEmployeeEmail(String email);
}
