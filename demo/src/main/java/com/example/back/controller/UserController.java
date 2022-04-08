package com.example.back.controller;

import com.example.back.model.User;
import com.example.back.service.UserService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Optional;

@RestController
@RequestMapping("/users")
public class UserController {
    final private UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }

    @GetMapping("/login")
    public ResponseEntity<User> loginUser() {
        System.out.println("Calling controller login");
        Optional<User> responseUser = userService.loginUser("owner","password");
        System.out.println(responseUser);
        return responseUser.map(user -> new ResponseEntity<>(user, HttpStatus.OK)).orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    @PostMapping("/add")
    public ResponseEntity<String> registerUser() {
        System.out.println("Calling controller register user");
        return new ResponseEntity<String>("Controller post user",HttpStatus.OK);
    };
}
