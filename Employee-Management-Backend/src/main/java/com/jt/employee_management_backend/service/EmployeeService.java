package com.jt.employee_management_backend.service;

import java.util.List;

import com.jt.employee_management_backend.model.Employee;

public interface EmployeeService {

    public Employee addEmployee(Employee employee);

    public List<Employee> getAllEmployee();

    public Employee getEmployeeById(int id);

    public void deleteEmployee(int id);

    public Employee updateEmployee(int id, Employee employee);
}
