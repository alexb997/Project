package com.example.back.service;

import org.springframework.stereotype.Service;

@Service
public class UserService {

    public String loginUser( String user){
        return "Logged in as " + user + " from UserService.";
    }
}