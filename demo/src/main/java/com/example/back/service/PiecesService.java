package com.example.back.service;

import com.example.back.model.Pieces;
import com.example.back.repository.PiecesRepository;
import org.apache.commons.lang3.StringUtils;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.Map;
import java.util.Objects;
import java.util.Optional;

@Service
public class PiecesService {

    final private PiecesRepository piecesRepository;

    public PiecesService(PiecesRepository piecesRepository) {
        this.piecesRepository = piecesRepository;
    }

    public Page<Pieces> allPieces(Pageable pageable){
        return piecesRepository.findAll(pageable);
    }

    public Optional<Pieces> findById(String id) {
        return piecesRepository.findById(id);
    }

    public Page<Pieces> findByFilters(Map<String,String> filters, Pageable pageable){
        String name= StringUtils.EMPTY;
        String utility=StringUtils.EMPTY;
        String model=StringUtils.EMPTY;
        String type=StringUtils.EMPTY;
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
        }
        return piecesRepository.findAllByNameMatchesRegexAndUtilityMatchesRegexAndModelMatchesRegexAndTypeMatchesRegex
                (name,utility,model,type,pageable);
    }


    public Pieces addPiece(Pieces piece) throws IllegalArgumentException{
        return piecesRepository.save(piece);
    }

    public Optional<Pieces> editPiece(String id, Pieces piece){
        return piecesRepository.findById(id)
                .map(oldPiece -> {
                    Pieces updated = oldPiece.updateWith(piece);
                    updated.setId(id);
                    return piecesRepository.save(updated);
                });
    }

    public void removeAllPieces(){
        piecesRepository.deleteAll();
    }

    public void removePieceById(String id ){
        piecesRepository.deleteById(id);
    }


}
