package com.pks.restapi;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

@SpringBootApplication
public class RestApiApplication {


	public static void main(String[] args) {
		SpringApplication.run(RestApiApplication.class, args);
		BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();
		for (int i = 1; i<=10; i++){
			String encPass = encoder.encode("123456");
			System.out.println(encPass);
		}
	}

}
