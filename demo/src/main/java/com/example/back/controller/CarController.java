package com.example.back.controller;

import com.example.back.model.Car;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Optional;

@RestController
@RequestMapping("/cars")
public class CarController {

    @PostMapping("/add")
    public ResponseEntity<String> addCar() {
        System.out.println("Calling car controller addCar");
        return new ResponseEntity<String>("Calling car controller addCar",HttpStatus.OK);
    }
}
