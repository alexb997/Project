package com.example.back.service;

import com.example.back.model.Car;
import com.example.back.repository.CarRepository;
import org.springframework.stereotype.Service;

@Service
public class CarService {

    final private CarRepository carRepository;

    public CarService(CarRepository carRepository) {
        this.carRepository = carRepository;
    }

    public Car addCar(Car car) throws IllegalArgumentException{
        return carRepository.save(car);
    }
}
