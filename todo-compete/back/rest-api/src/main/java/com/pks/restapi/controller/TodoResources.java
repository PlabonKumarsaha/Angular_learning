package com.pks.restapi.controller;

import com.pks.restapi.model.Todo;
import com.pks.restapi.services.TodoServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class TodoResources {

    @Autowired
    private TodoServices todoServices;
    @GetMapping("/users/{username}/todos")
    public List<Todo> getAllTodos(@PathVariable("username") String userName){
    return todoServices.findAll();
    }
}
