package com.atharva.proj1.ems.controller;


import com.atharva.proj1.ems.entity.Employee;
import com.atharva.proj1.ems.repository.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/employees")
@CrossOrigin
public class EmployeeController {

    @Autowired
    private EmployeeRepository employeerepo;

    @GetMapping
    public List<Employee> getAllEmployees(){
        return employeerepo.findAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Employee> getEmployeeById(@PathVariable Long id){
        Employee employee = employeerepo.findById(id)
                .orElseThrow(()->new RuntimeException("Employee Not found"));
        return ResponseEntity.ok(employee);
    }

    @PostMapping
    public Employee createEmployee(@RequestBody Employee employee){
        return employeerepo.save(employee);
    }

    @PatchMapping("/{id}")
    public Employee updateEmployee(@PathVariable Long id, @RequestBody Employee updatedEmployee){
        Employee existing = employeerepo.findById(id).get();
        existing.setName(updatedEmployee.getName());
        existing.setEmail(updatedEmployee.getEmail());
        existing.setDepartment(updatedEmployee.getDepartment());
        existing.setJoiningDate(updatedEmployee.getJoiningDate());
        existing.setPhone(updatedEmployee.getPhone());
        existing.setRole(updatedEmployee.getRole());
        existing.setSalary(updatedEmployee.getSalary());
        return employeerepo.save(existing);
    }

    @DeleteMapping("/{id}")
    public void deleteEmployee(@PathVariable Long id){
        employeerepo.deleteById(id);
    }
}
