package com.example.back.service;

import com.example.back.model.User;
import com.example.back.repository.UserRepository;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    final private UserRepository userRepository;

    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public String loginUser( String user){
        return "Logged in as " + user + " from UserService.";
    }
}