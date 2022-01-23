package com.pks.restapi.controller;

import com.pks.restapi.model.Todo;
import com.pks.restapi.services.TodoServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;
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

    @GetMapping("/users/{username}/todos/{id}")
    public Todo getTodo(@PathVariable("username") String userName,@PathVariable("id") long id){
        return todoServices.findByid(id);
    }
    @DeleteMapping("/users/{username}/todos/{id}")
    public ResponseEntity<Void>deleteDoTo(@PathVariable("username") String userName,@PathVariable("id") long id){
        Todo todo = todoServices.deleteById(id);
        if(todo !=null) return ResponseEntity.noContent().build();

        return ResponseEntity.notFound().build();
    }

    @PutMapping("/users/{username}/todos/{id}")
    public ResponseEntity<Todo>updateTodo(@PathVariable("username") String userName
            ,@PathVariable("id") long id,
            @RequestBody Todo todo) {
       Todo todo1= todoServices.save(todo);
       return new ResponseEntity<Todo>(todo1, HttpStatus.OK);
    }

    @PostMapping("/users/{username}/todos/")
    public ResponseEntity<Void>postTodos(@RequestBody Todo todo) {
        Todo todo1= todoServices.save(todo);
        URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("{id}").buildAndExpand(todo1.getId()).toUri();
        return  ResponseEntity.created(uri).build();
    }

    }
