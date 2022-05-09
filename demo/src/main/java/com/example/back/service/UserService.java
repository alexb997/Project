package com.example.back.service;

import com.example.back.model.Car;
import com.example.back.model.User;
import com.example.back.repository.UserRepository;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UserService {

    final private UserRepository userRepository;

    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public Page<User> allUsers(Pageable pageable){
        return userRepository.findAll(pageable);
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

    public Optional<User> updateFavourites(String username, String id){
        System.out.println("calling user-Service");
        return userRepository.findByUsername(username)
                .map(oldUser -> {
                    System.out.println(oldUser);
                    User updated = new User();
                    updated.updateWith(oldUser);
                    updated.updateFavourites(id);
                    System.out.println(updated);
                    return userRepository.save(updated);
                });

    }

    public void removeUserByID(String id ){
        userRepository.deleteById(id);
    }
}