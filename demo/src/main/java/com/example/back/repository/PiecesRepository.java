package com.example.back.repository;

import com.example.back.model.Pieces;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PiecesRepository  extends PagingAndSortingRepository<Pieces,String>{
    Page<Pieces>
    findAllByNameMatchesRegexAndUtilityMatchesRegexAndModelMatchesRegexAndTypeMatchesRegexAndPrice
            (String name,String utility,String model,String type, int price, Pageable pageable);
    Page<Pieces>
    findAllByNameMatchesRegexAndUtilityMatchesRegexAndModelMatchesRegexAndTypeMatchesRegex
            (String name,String utility,String model,String type, Pageable pageable);
}
