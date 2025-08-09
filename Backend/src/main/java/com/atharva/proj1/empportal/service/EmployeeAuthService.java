package com.atharva.proj1.empportal.service;



import com.atharva.proj1.empportal.entity.EmployeePortal;
import com.atharva.proj1.empportal.repository.EmployeeAuthRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class EmployeeAuthService {

    @Autowired
    private EmployeeAuthRepository repo;

    @Autowired
    private PasswordEncoder passwordEncoder;

    public EmployeePortal register(EmployeePortal employeePortal){
        employeePortal.setPassword(passwordEncoder.encode(employeePortal.getPassword()));
        return repo.save(employeePortal);
    }

    public Optional<EmployeePortal> login(String email, String password){
        Optional<EmployeePortal> emp = repo.findByEmail(email);
        if(emp.isPresent() && passwordEncoder.matches(password,emp.get().getPassword())){
            return emp;
        }
        return Optional.empty();
    }

}
