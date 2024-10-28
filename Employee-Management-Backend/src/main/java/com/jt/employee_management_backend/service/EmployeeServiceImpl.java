package com.jt.employee_management_backend.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.jt.employee_management_backend.model.Employee;
import com.jt.employee_management_backend.repository.EmployeeRepo;

@Service
public class EmployeeServiceImpl implements EmployeeService {

    @Autowired
    public EmployeeRepo employeeRepo;

    @Override
    public Employee addEmployee(Employee employee) {
        try {
            return employeeRepo.save(employee);
        } catch (Exception ee) {
            ee.printStackTrace();
            return null;
        }
    }

    @Override
    public List<Employee> getAllEmployee() {
        try {
            List<Employee> employees = employeeRepo.findAll();
            return employees;
        } catch (Exception ee) {
            ee.printStackTrace();
            return null;
        }
    }

    @Override
    public Employee getEmployeeById(int id) {

        try {
            if (employeeRepo.existsById(id)) {
                Employee employee = employeeRepo.findById(id)
                        .orElseThrow(() -> new RuntimeException("Id is not Found ."));
                return employee;
            }
        } catch (Exception e) {
            e.printStackTrace();

        }
        return null;
    }

    @Override
    public void deleteEmployee(int id) {
        try {
            if (employeeRepo.existsById(id)) {
                employeeRepo.deleteById(id);
            }
        } catch (Exception e) {
            e.printStackTrace();

        }
    }

    @Override
    public Employee updateEmployee(int id, Employee employee) {
        try {
            if (employeeRepo.existsById(id)) {
                employee.setId(id);
                return employeeRepo.save(employee);
            }
        } catch (Exception e) {
            e.printStackTrace();

        }
        return null;
    }
}
