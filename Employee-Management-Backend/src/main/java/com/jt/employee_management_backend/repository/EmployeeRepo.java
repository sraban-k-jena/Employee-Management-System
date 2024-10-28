package com.jt.employee_management_backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.jt.employee_management_backend.model.Employee;

public interface EmployeeRepo extends JpaRepository<Employee, Integer> {

}
