package com.example.back.repository;

import com.example.back.model.Car;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CarRepository extends PagingAndSortingRepository<Car,String>{
    Page<Car> findAllByBrandMatchesRegex(String keyword, Pageable pageable);
}
