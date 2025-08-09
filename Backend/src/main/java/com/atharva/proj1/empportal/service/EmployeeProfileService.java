package com.atharva.proj1.empportal.service;

import com.atharva.proj1.empportal.entity.EmployeePortal;
import com.atharva.proj1.empportal.repository.EmployeeAuthRepository;
import com.atharva.proj1.ems.entity.Employee;
import com.atharva.proj1.ems.repository.EmployeeRepository;
import com.atharva.proj1.empportal.entity.EmployeeProfile;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class EmployeeProfileService {

    @Autowired
    private EmployeeAuthRepository authrepo;

    @Autowired
    private EmployeeRepository emprepo;

    public EmployeeProfile getProfileByEmail(String email) {
        Optional<EmployeePortal> auth = authrepo.findByEmail(email);
        Optional<Employee> details = emprepo.findByEmail(email);

        if(auth.isPresent() && details.isPresent()){
            return new EmployeeProfile(
                    auth.get().getName(),
                    auth.get().getEmail(),
                    details.get().getDepartment(),
                    details.get().getRole(),
                    details.get().getSalary(),
                    details.get().getJoiningDate()
            );
        }
        throw new RuntimeException("Profile not found");
    }

}
