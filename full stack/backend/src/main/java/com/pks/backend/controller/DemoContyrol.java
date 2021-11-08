package com.pks.backend.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("epaymentApi/v1/api/")
@CrossOrigin("http://localhost:4200/")
public class DemoContyrol {

    @GetMapping("server")
    String getValue(){
        return "String value Returns";
    }

}
