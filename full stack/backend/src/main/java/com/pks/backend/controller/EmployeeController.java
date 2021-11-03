package com.pks.backend.controller;

import com.pks.backend.exception.ResourceException;
import com.pks.backend.model.Employee;
import com.pks.backend.repository.EmployeeRepository;
import com.sun.org.apache.xpath.internal.operations.Bool;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("api/v1/")
@CrossOrigin("http://localhost:4200/")
public class EmployeeController {

    @Autowired
    private EmployeeRepository employeeRepository;

    //get all employees
    @GetMapping("/employees")
    public List<Employee> getAllEmployee(){
        return employeeRepository.findAll();
    }

    @PostMapping("/employees")
    public Employee addEmployee(@RequestBody Employee employee){
        return employeeRepository.save(employee);
    }
    @GetMapping("/employees/{id}")
    public ResponseEntity<Employee> getEmployeeByid(@PathVariable("id") Long id)  {
        Employee emp = employeeRepository.findById(id)
                .orElseThrow(()-> new ResourceException("Employee with"+id+"does not exist"));
        return ResponseEntity.ok(emp);
    }
    //emp update
    @PutMapping("/employees/{id}")
    public ResponseEntity<Employee>updateEmployee(@PathVariable("id") Long id,@RequestBody Employee updateEmp) {
    Employee emp = employeeRepository.findById(id)
            .orElseThrow(()-> new ResourceException("Employee with"+id+"does not exist"));
    emp.setFname(updateEmp.getFname());
    emp.setLname(updateEmp.getLname());
    emp.setEmail(updateEmp.getEmail());

    Employee finalEmp = employeeRepository.save(emp);
    return ResponseEntity.ok(finalEmp);
    }
    @DeleteMapping("/employees/{id}")
    public ResponseEntity<Map<String,Boolean>> deleteEmpById(@PathVariable("id") Long id) {

        Employee emp = employeeRepository.findById(id)
                .orElseThrow(()-> new ResourceException("Employee with"+id+"does not exist"));
        employeeRepository.delete(emp);
        Map<String,Boolean> response = new HashMap<>();
        response.put("deleted", Boolean.TRUE);
        return ResponseEntity.ok(response);

    }
}
