package com.example.back.repository;

import com.example.back.model.Car;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CarRepository extends PagingAndSortingRepository<Car,String>{
    Page<Car>
    findAllByBrandMatchesRegexAndColorMatchesRegexAndModelMatchesRegexAndBodyMatchesRegexAndCombustibleMatchesRegex
            (String brand,String color,String model,String body,String combustible, Pageable pageable);
    Page<Car>
    findAllByBrandMatchesRegexAndColorMatchesRegexAndModelMatchesRegexAndBodyMatchesRegexAndCombustibleMatchesRegexAndNumberDoors
            (String brand,String color,String model,String body,String combustible, int numberDoors, Pageable pageable);
    Page<Car>
    findAllByBrandMatchesRegexAndColorMatchesRegexAndModelMatchesRegexAndBodyMatchesRegexAndCombustibleMatchesRegexAndCargoVolume
            (String brand,String color,String model,String body,String combustible, int cargoVolume, Pageable pageable);
    Page<Car>
    findAllByBrandMatchesRegexAndColorMatchesRegexAndModelMatchesRegexAndBodyMatchesRegexAndCombustibleMatchesRegexAndNumberDoorsAndCargoVolume
            (String brand,String color,String model,String body,String combustible,int numberDoors,int cargoVolume, Pageable pageable);

    Page<Car>findAllByOwner(String owner, Pageable pageable);
}
