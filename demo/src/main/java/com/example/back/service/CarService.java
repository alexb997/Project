package com.example.back.service;

import com.example.back.model.Car;
import com.example.back.repository.CarRepository;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.Map;
import java.util.Objects;
import java.util.Optional;

@Service
public class CarService {

    final private CarRepository carRepository;

    public CarService(CarRepository carRepository) {
        this.carRepository = carRepository;
    }

    public Optional<Car> findById(String id) {
        return carRepository.findById(id);
    }

    public Car addCar(Car car) throws IllegalArgumentException{
        return carRepository.save(car);
    }

    public Car editCar(Car car){
        return carRepository.save(car);
    }

    public Page<Car> filterCars(Map<String,String> allParams,Pageable pageable){

        return null;
    }

    public Page<Car> allCars(Pageable pageable){
        return carRepository.findAll(pageable);
    }

    public Page<Car> findByFilters(Map<String,String> filters,Pageable pageable){
        String brand="";
        String color="";
        String model="";
        String combustible="";
        String body="";
        int numberDoors=0;
        int cargoVolume=0;
        for (String filter : filters.keySet()) {
            if(Objects.equals(filter, "brand")){
                brand=filters.get(filter);
            }
            if(Objects.equals(filter, "color")){
                color=filters.get(filter);
            }
            if(Objects.equals(filter, "model")){
                model=filters.get(filter);
            }
            if(Objects.equals(filter, "combustible")){
                combustible=filters.get(filter);
            }
            if(Objects.equals(filter, "body")){
                body=filters.get(filter);
            }
            if(Objects.equals(filter, "numberDoors")){
                numberDoors=Integer.parseInt(filters.get(filter));
            }
            if(Objects.equals(filter, "cargoVolume")){
                cargoVolume=Integer.parseInt(filters.get(filter));
            }
        }
        if(numberDoors!=0 && cargoVolume!=0) {
            return carRepository.findAllByBrandMatchesRegexAndColorMatchesRegexAndModelMatchesRegexAndBodyMatchesRegexAndCombustibleMatchesRegexAndNumberDoorsAndCargoVolume
                    (brand,color,model,body,combustible,numberDoors,cargoVolume,pageable);

        }
        if(numberDoors!=0){
            return carRepository.findAllByBrandMatchesRegexAndColorMatchesRegexAndModelMatchesRegexAndBodyMatchesRegexAndCombustibleMatchesRegexAndNumberDoors
                    (brand,color,model,body,combustible,numberDoors,pageable);
        }
        if(cargoVolume!=0){
            return carRepository.findAllByBrandMatchesRegexAndColorMatchesRegexAndModelMatchesRegexAndBodyMatchesRegexAndCombustibleMatchesRegexAndCargoVolume
                    (brand,color,model,body,combustible,cargoVolume,pageable);
        }
        return carRepository.findAllByBrandMatchesRegexAndColorMatchesRegexAndModelMatchesRegexAndBodyMatchesRegexAndCombustibleMatchesRegex
                (brand,color,model,body,combustible,pageable);
    }

    public void removeAllCars(){
        carRepository.deleteAll();
    }

    public void removeCarById(String id ){
        carRepository.deleteById(id);
    }


}
