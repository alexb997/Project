package com.example.back.controller;

import com.example.back.model.Car;
import com.example.back.model.User;
import com.example.back.service.UserService;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/users")
public class UserController {
    final private UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }

    @GetMapping("/")
    public ResponseEntity<Response> getAllUsers(@RequestParam(defaultValue = "0") int page,
                                                @RequestParam(defaultValue = "3") int size) {
        try{
            List<User> users;
            Pageable paging = PageRequest.of(page, size);
            Page<User> pageUsers;
            pageUsers = userService.allUsers(paging);
            users = pageUsers.getContent();
            Response response = new Response(users,pageUsers.getTotalPages(),pageUsers.getTotalElements(),pageUsers.getNumber());
            return new ResponseEntity<>(response, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity("Users not found",HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/{username}")
    public ResponseEntity<User> getUser(@PathVariable("username") String username) {
        Optional<User> userData = userService.findByUsername(username);
        return userData.map(user -> new ResponseEntity<>(user, HttpStatus.OK)).orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    @GetMapping("/login")
    public ResponseEntity<User> loginUser(@RequestParam String username, @RequestParam String password) {
        System.out.println("Calling controller login");
        Optional<User> responseUser = userService.loginUser(username,password);
        System.out.println(responseUser);
        return responseUser.map(user -> new ResponseEntity<>(user, HttpStatus.OK)).orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    @PostMapping("/add")
    public ResponseEntity<User> registerUser(@RequestBody User user) {
        System.out.println("Calling controller register user");
        try{
            User newUser= userService.addNewUser(user);
            return new ResponseEntity<>(newUser, HttpStatus.CREATED);
        }catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PutMapping("/update/{username}")
    public ResponseEntity<User> updateFavourites(@PathVariable String username, @RequestParam String id) {
        Optional<User> updatedUser=userService.updateFavourites(username,id);
        System.out.println(updatedUser);
        return updatedUser.map(value -> new ResponseEntity<>(value, HttpStatus.OK)).orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<HttpStatus> deleteUser(@PathVariable("id") String id) {
        try {
            userService.removeUserByID(id);
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } catch (Exception e) {
            return new ResponseEntity("Couldn't delete",HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
