package com.example.back.controller;

import com.example.back.model.Car;
import com.example.back.service.CarService;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;
import java.util.Optional;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/cars")
public class CarController {

    private final CarService carService;

    public CarController(CarService carService){
        this.carService=carService;
    }

    @GetMapping("/{id}")
    public ResponseEntity<Car> getCar(@PathVariable("id") String id) {
        Optional<Car> carData = carService.findById(id);
        return carData.map(car -> new ResponseEntity<>(car, HttpStatus.OK)).orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    @GetMapping("/owned/{owner}")
    public ResponseEntity<Response> getCars(@PathVariable("owner") String owner,
                                           @RequestParam(defaultValue = "0") int page,
                                           @RequestParam(defaultValue = "3") int size) {
        try{
            List<Car> cars;
            Pageable paging = PageRequest.of(page, size);
            Page<Car> pageCars;
            pageCars = carService.findByOwner(owner,paging);
            cars = pageCars.getContent();
            Response response = new Response(cars,pageCars.getTotalPages(),pageCars.getTotalElements(),pageCars.getNumber());
            return new ResponseEntity<>(response,HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity("Cars not found",HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/filter")
    public ResponseEntity<Response> filterCars(@RequestParam(required = false) Map<String,String> filterParams,
                                             @RequestParam(defaultValue = "0") int page,
                                             @RequestParam(defaultValue = "3") int size){
        try{
            List<Car> cars;
            Pageable paging = PageRequest.of(page, size);
            Page<Car> pageCars;
            pageCars = carService.findByFilters(filterParams,paging);
            cars = pageCars.getContent();
            Response response = new Response(cars,pageCars.getTotalPages(),pageCars.getTotalElements(),pageCars.getNumber());
            return new ResponseEntity<>(response,HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity("Cars not found",HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PostMapping("/add")
    public ResponseEntity<Car> addCar(@RequestBody Car car) {
        try{
            Car newCar = carService.addCar(car);
            return new ResponseEntity<>(newCar,HttpStatus.CREATED);
        }catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PutMapping("/edit/{id}")
    public ResponseEntity<Car> editCar(@PathVariable("id") String id, @RequestBody Car car) {
        Optional<Car> carData = carService.findById(id);
        if (carData.isPresent()) {
            Car newCar = carData.get();
            newCar.setBrand(car.getBrand());
            newCar.setColor(car.getColor());
            newCar.setCombustible(car.getCombustible());
            newCar.setBody(car.getBody());
            newCar.setNumberDoors(car.getNumberDoors());
            newCar.setCargoVolume(car.getCargoVolume());
            newCar.setModel(car.getModel());
            newCar.setPrice(car.getPrice());
            newCar.setOwner(car.getOwner());
            return new ResponseEntity<>(carService.editCar(newCar), HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @DeleteMapping("/deleteAll")
    public ResponseEntity<HttpStatus> deleteAllCars() {
        try {
            carService.removeAllCars();
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } catch (Exception e) {
            return new ResponseEntity("Couldn't delete",HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<HttpStatus> deleteCar(@PathVariable("id") String id) {
        try {
            carService.removeCarById(id);
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } catch (Exception e) {
            return new ResponseEntity("Couldn't delete",HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
