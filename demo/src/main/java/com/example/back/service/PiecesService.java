package com.example.back.service;

import com.example.back.model.Pieces;
import com.example.back.repository.PiecesRepository;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.Map;
import java.util.Objects;

@Service
public class PiecesService {

    final private PiecesRepository piecesRepository;

    public PiecesService(PiecesRepository piecesRepository) {
        this.piecesRepository = piecesRepository;
    }

    public Page<Pieces> allPieces(Pageable pageable){
        return piecesRepository.findAll(pageable);
    }

    public Page<Pieces> findByFilters(Map<String,String> filters, Pageable pageable){
        String name="";
        String utility="";
        String model="";
        String type="";
        int price=0;
        for (String filter : filters.keySet()) {
            if(Objects.equals(filter, "name")){
                name=filters.get(filter);
            }
            if(Objects.equals(filter, "utility")){
                utility=filters.get(filter);
            }
            if(Objects.equals(filter, "model")){
                model=filters.get(filter);
            }
            if(Objects.equals(filter, "type")){
                type=filters.get(filter);
            }
            if(Objects.equals(filter, "price")){
                price=Integer.parseInt(filters.get(filter));
            }
        }
        if(price!=0){
            return piecesRepository.findAllByNameMatchesRegexAndUtilityMatchesRegexAndModelMatchesRegexAndTypeMatchesRegexAndPrice
                    (name,utility,model,type,price,pageable);
        }
        return piecesRepository.findAllByNameMatchesRegexAndUtilityMatchesRegexAndModelMatchesRegexAndTypeMatchesRegex
                (name,utility,model,type,pageable);
    }


    public Pieces addPiece(Pieces piece) throws IllegalArgumentException{
        return piecesRepository.save(piece);
    }

    public void removeAllPieces(){
        piecesRepository.deleteAll();
    }

    public void removePieceById(String id ){
        piecesRepository.deleteById(id);
    }


}
