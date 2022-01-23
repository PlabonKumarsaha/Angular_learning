package com.pks.restapi.controller;

import com.pks.restapi.model.Response;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class HelloWorldController {

    @GetMapping("/hello")
    Response helloWorld(){
        return new Response("Hello world");
    }

    @GetMapping("/hello/{path-var}")
    Response helloWorld2(@PathVariable("path-var") String message){
        String returnVal = "Hello from "+message.toString()+".";
        return new Response(returnVal);
    }




}
