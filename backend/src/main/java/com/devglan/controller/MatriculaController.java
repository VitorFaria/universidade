package com.devglan.controller;

import com.devglan.model.ApiResponse;
import com.devglan.model.Matricula;
import com.devglan.model.MatriculaDto;
import com.devglan.service.MatriculaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/matriculas")
public class MatriculaController {

    @Autowired
    private MatriculaService matriculaService;

    @PostMapping
    public ApiResponse<Matricula> saveMatricula(@RequestBody MatriculaDto matricula){
    	try {
    		return new ApiResponse<>(HttpStatus.OK.value(), "Matricula salva corretamente.",matriculaService.save(matricula));
    	} catch (Exception e) {
    		return new ApiResponse<>(HttpStatus.INTERNAL_SERVER_ERROR.value(), e.getMessage(), null);
    	}
    	
    }

    @GetMapping
    public ApiResponse<List<Matricula>> listMatricula(){
        return new ApiResponse<>(HttpStatus.OK.value(), "Lista de matriculas obtida corretamente.",matriculaService.findAll());
    }

    @GetMapping("/{id}")
    public ApiResponse<Matricula> getOne(@PathVariable int id_aluno, @PathVariable int id_curso){
        return new ApiResponse<>(HttpStatus.OK.value(), "Matricula obtida corretamente.",matriculaService.findById(id_aluno, id_curso));
    }

    @PutMapping("/{id}")
    public ApiResponse<MatriculaDto> update(@RequestBody MatriculaDto matriculaDto) {
        try {
        	return new ApiResponse<>(HttpStatus.OK.value(), "Matricula atualizada corretamente.",matriculaService.update(matriculaDto));
    	} catch (Exception e) {
    		return new ApiResponse<>(HttpStatus.INTERNAL_SERVER_ERROR.value(), e.getMessage(), null);
    	}
    	
    }

    @DeleteMapping("/{id}")
    public ApiResponse<Void> delete(@PathVariable int id_aluno, @PathVariable int id_curso) {
        matriculaService.delete(id_aluno, id_curso);
        return new ApiResponse<>(HttpStatus.OK.value(), "Matricula obtida corretamente.", null);
    }



}
