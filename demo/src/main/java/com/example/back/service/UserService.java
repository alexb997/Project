package com.example.back.service;

import com.example.back.model.User;
import com.example.back.repository.UserRepository;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UserService {

    final private UserRepository userRepository;

    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public Optional<User> loginUser(String username,String password){
        return userRepository.findByUsernameAndPassword(username,password);
    }

    public User addNewUser(User user) throws IllegalArgumentException{
        return userRepository.save(user);
    }

    public Optional<User> findByUsername(String username){
        return userRepository.findByUsername(username);
    }
}