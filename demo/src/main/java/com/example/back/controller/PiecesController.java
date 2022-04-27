package com.example.back.controller;

import com.example.back.model.Pieces;
import com.example.back.service.PiecesService;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/pieces")
public class PiecesController {
    private final PiecesService piecesService;

    public PiecesController(PiecesService piecesService){
        this.piecesService=piecesService;
    }

    @GetMapping("/all")
    public ResponseEntity<Response> allPieces(@RequestParam(defaultValue = "0") int page,
                                               @RequestParam(defaultValue = "3") int size){
        try{
            List<Pieces> pieces;
            Pageable paging = PageRequest.of(page, size);
            Page<Pieces> pagePieces;
            pagePieces = piecesService.allPieces(paging);
            pieces = pagePieces.getContent();
            Response response = new Response(pieces,pagePieces.getTotalPages(),pagePieces.getTotalElements(),pagePieces.getNumber());
            return new ResponseEntity<Response>(response,HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity("Pieces not found",HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/filter")
    public ResponseEntity<Response> filterPieces(@RequestParam(required = false) Map<String,String> filterParams,
                                               @RequestParam(defaultValue = "0") int page,
                                               @RequestParam(defaultValue = "3") int size){
        try{
            List<Pieces> pieces;
            Pageable paging = PageRequest.of(page, size);
            Page<Pieces> pagePieces;
            pagePieces = piecesService.findByFilters(filterParams,paging);
            pieces = pagePieces.getContent();
            Response response = new Response(pieces,pagePieces.getTotalPages(),pagePieces.getTotalElements(),pagePieces.getNumber());
            return new ResponseEntity<Response>(response,HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity("Pieces not found",HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PostMapping("/add")
    public ResponseEntity<Pieces> addPiece(@RequestBody Pieces piece) {
        try{
            Pieces newPiece = piecesService.addPiece(piece);
            return new ResponseEntity<>(piece,HttpStatus.OK);
        }catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @DeleteMapping("/deleteAll")
    public ResponseEntity<HttpStatus> deleteAllPieces() {
        try {
            piecesService.removeAllPieces();
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } catch (Exception e) {
            return new ResponseEntity("Couldn't delete",HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<HttpStatus> deletePiece(@PathVariable("id") String id) {
        try {
            piecesService.removePieceById(id);
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } catch (Exception e) {
            return new ResponseEntity("Couldn't delete",HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
