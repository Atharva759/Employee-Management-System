package com.atharva.proj1.empportal.repository;

import com.atharva.proj1.empportal.entity.EmployeePortal;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface EmployeeAuthRepository extends JpaRepository<EmployeePortal, Long> {
    Optional<EmployeePortal> findByEmail(String email);
}
