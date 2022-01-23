package com.pks.restapi.controller;

import com.pks.restapi.model.Todo;
import com.pks.restapi.services.TodoServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class TodoResources {

    @Autowired
    private TodoServices todoServices;
    @GetMapping("/users/{username}/todos")
    public List<Todo> getAllTodos(@PathVariable("username") String userName){
    return todoServices.findAll();
    }

    @DeleteMapping("/users/{username}/todos/{id}")
    public ResponseEntity<Void>deleteDoTo(@PathVariable("username") String userName,@PathVariable("id") long id){
        Todo todo = todoServices.deleteById(id);
        if(todo !=null) return ResponseEntity.noContent().build();

        return ResponseEntity.notFound().build();
    }


}
