package com.atharva.proj1.empportal.entity;


import java.time.LocalDate;

public class EmployeeProfile {
    private String name;
    private String email;
    private String department;
    private String role;
    private double salary;
    private LocalDate joiningDate;

    public EmployeeProfile(String name, String email, String department, String role,double salary, LocalDate joiningDate) {
        this.name = name;
        this.email = email;
        this.department = department;
        this.role = role;
        this.salary = salary;
        this.joiningDate = joiningDate;
    }

    public double getSalary() {
        return salary;
    }

    public void setSalary(double salary) {
        this.salary = salary;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getDepartment() {
        return department;
    }

    public void setDepartment(String department) {
        this.department = department;
    }

    public String getRole() {
        return role;
    }

    public void setRole(String role) {
        this.role = role;
    }

    public LocalDate getJoiningDate() {
        return joiningDate;
    }

    public void setJoiningDate(LocalDate joiningDate) {
        this.joiningDate = joiningDate;
    }
}
