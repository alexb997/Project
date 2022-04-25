package com.example.back.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/pieces")
public class PiecesController {
    @GetMapping("/all")
    public ResponseEntity<String> getPieces() {
        System.out.println("You are inside pieces Controller");
        return new ResponseEntity("Inside getPieces function",HttpStatus.OK);
    }
}
