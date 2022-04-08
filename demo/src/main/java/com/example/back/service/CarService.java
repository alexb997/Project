package com.example.back.service;

import com.example.back.model.Car;
import com.example.back.repository.CarRepository;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.Map;

@Service
public class CarService {

    final private CarRepository carRepository;

    public CarService(CarRepository carRepository) {
        this.carRepository = carRepository;
    }

    public Car addCar(Car car) throws IllegalArgumentException{
        return carRepository.save(car);
    }

    public Page<Car> filterCars(Map<String,String> allParams,Pageable pageable){

        return null;
    }

    public Page<Car> allCars(Pageable pageable){
        return carRepository.findAll(pageable);
    }

    public Page<Car> findByFilters(Map<String,String> filters,Pageable pageable){
        for (String filter : filters.keySet()) {
            System.out.println(filter + "=" + filters.get(filter));
        }
        return carRepository.findAllByBrandMatchesRegexAndColorMatchesRegexAndModelMatchesRegexAndBodyMatchesRegexAndCombustibleMatchesRegex
                ("toyota","","","","",pageable);
    }

    public void removeAllCars(){
        carRepository.deleteAll();
    }
}
