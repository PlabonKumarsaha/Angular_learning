package com.pks.restapi.controller;

import com.pks.restapi.model.Response;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class HelloWorldController {

    @GetMapping("/hello")
    String helloWorld(){
        return "hello world";
    }

    @GetMapping("/hello/{path-var}")
    Response helloWorld2(@PathVariable("path-var") String message){
        String returnVal = "Hello from "+message.toString()+".";
        return new Response(returnVal);
    }
}
