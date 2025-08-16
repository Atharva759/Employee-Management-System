package com.atharva.proj1.ems.repository;

import com.atharva.proj1.ems.entity.LeaveRequest;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface LeaveRepository extends JpaRepository<LeaveRequest,Long> {
    List<LeaveRequest> findByEmployeeEmail(String employeeEmail);
}
