package com.example.back.repository;

import com.example.back.model.Pieces;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PiecesRepository  extends PagingAndSortingRepository<Pieces,String>{
}
