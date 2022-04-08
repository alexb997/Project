package com.example.back.controller;

import com.example.back.model.Car;
import com.example.back.service.CarService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;
import java.util.Optional;

@RestController
@RequestMapping("/cars")
public class CarController {

    private final CarService carService;

    public CarController(CarService carService){
        this.carService=carService;
    }

    @GetMapping("/filter")
    public ResponseEntity<String> filterCars(@RequestParam(required = false) Map<String,String> allParams){
        return new ResponseEntity<>("Parameters are " + allParams.entrySet(),HttpStatus.OK);
    }

    @PostMapping("/add")
    public ResponseEntity<Car> addCar(@RequestBody Car car) {
        System.out.println("Calling car controller addCar");
        try{
            Car newCar = carService.addCar(car);
            return new ResponseEntity<>(newCar,HttpStatus.OK);
        }catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
