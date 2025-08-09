package com.atharva.proj1.empportal.controller;

import com.atharva.proj1.empportal.entity.EmployeeProfile;
import com.atharva.proj1.empportal.service.EmployeeProfileService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@CrossOrigin
@RestController
@RequestMapping("/api/profile")
public class EmployeeProfileController {

    @Autowired
    private EmployeeProfileService profileService;

    @GetMapping("{email}")
    public EmployeeProfile getProfile(@PathVariable String email){
        return profileService.getProfileByEmail(email);
    }

}
