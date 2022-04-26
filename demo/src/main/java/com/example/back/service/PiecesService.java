package com.example.back.service;

import com.example.back.model.Pieces;
import com.example.back.repository.PiecesRepository;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

@Service
public class PiecesService {

    final private PiecesRepository piecesRepository;

    public PiecesService(PiecesRepository piecesRepository) {
        this.piecesRepository = piecesRepository;
    }

    public Page<Pieces> allPieces(Pageable pageable){
        return piecesRepository.findAll(pageable);
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
