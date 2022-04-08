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

@RestController
@RequestMapping("/cars")
public class CarController {

    private final CarService carService;

    public CarController(CarService carService){
        this.carService=carService;
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
        System.out.println("Calling car controller addCar");
        try{
            Car newCar = carService.addCar(car);
            return new ResponseEntity<>(newCar,HttpStatus.OK);
        }catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
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

}
