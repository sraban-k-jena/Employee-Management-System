package com.jt.employee_management_backend.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.jt.employee_management_backend.model.Employee;
import com.jt.employee_management_backend.service.EmployeeService;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.tags.Tag;

@RestController
@CrossOrigin
@RequestMapping("/employee")
@Tag(name = "Employee Controller", description = "Manage the Employee Record .")
public class EmployeeController {

    @Autowired
    public EmployeeService service;

    @GetMapping("/allEmployee")
    @Operation(summary = "Get all the Employee", description = "All the Employee are Retrived .")
    @ApiResponse(responseCode = "200", description = "All Employee Details Retrived .")
    @ApiResponse(responseCode = "500", description = "Internal Server Error .")
    public ResponseEntity<List<Employee>> getAllEmployee() {
        List<Employee> employees = service.getAllEmployee();
        return new ResponseEntity<>(employees, HttpStatus.OK);
    }

    @GetMapping("/getEmployee/{id}")
    @Operation(summary = "Get the Employee using Employee id .", description = "Mention Employee are Retrived .")
    @ApiResponse(responseCode = "200", description = "Specific Employee Details Retrived .")
    @ApiResponse(responseCode = "500", description = "Internal Server Error .")
    public ResponseEntity<Employee> getEmployeeById(@PathVariable int id) {
        Employee employee = service.getEmployeeById(id);
        return new ResponseEntity<>(employee, HttpStatus.OK);
    }

    @PostMapping("/addEmployee")
    @Operation(summary = "Add Employee", description = "Add new Employee .")
    @ApiResponse(responseCode = "201", description = "Add new Employee .")
    @ApiResponse(responseCode = "500", description = "Internal Server Error .")
    public ResponseEntity<Employee> addEmployee(@RequestBody Employee employee) {
        Employee employee2 = service.addEmployee(employee);
        return new ResponseEntity<>(employee2, HttpStatus.CREATED);
    }

    @DeleteMapping("/deletEmployee/{id}")
    @Operation(summary = "Delete Employee through id .", description = "Delete Employee Through id .")
    @ApiResponse(responseCode = "200", description = "Delete Employee through id .")
    @ApiResponse(responseCode = "500", description = "Internal Server Error .")
    public ResponseEntity<Void> deleteById(@PathVariable int id) {
        service.deleteEmployee(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

    @PutMapping("/updateEmployee/{id}")
    @Operation(summary = "Update Employee through id .", description = "Update Employee Through id .")
    @ApiResponse(responseCode = "200", description = "Update Employee through id .")
    @ApiResponse(responseCode = "500", description = "Internal Server Error .")
    public ResponseEntity<Employee> updateEmployee(@PathVariable int id, @RequestBody Employee employee) {
        Employee employee2 = service.updateEmployee(id, employee);
        return new ResponseEntity<>(employee2, HttpStatus.OK);
    }
}
