package com.devglan.controller;

import com.devglan.model.ApiResponse;
import com.devglan.model.Curso;
import com.devglan.model.CursoDto;
import com.devglan.service.CursoService;
import com.rollbar.notifier.Rollbar;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import static com.rollbar.notifier.config.ConfigBuilder.withAccessToken;

import java.util.List;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/cursos")
public class CursoController {

	Rollbar rollbar;
	
	public CursoController() {
		rollbar = Rollbar.init(withAccessToken("faketoken").build());
	}
	
    @Autowired
    private CursoService cursoService;

    @PostMapping
    public ApiResponse<Curso> saveCurso(@RequestBody CursoDto curso){
    	try {
    		return new ApiResponse<>(HttpStatus.OK.value(), "Curso salvo corretamente.",cursoService.save(curso));
    	} catch (Exception e) {
    		rollbar.error(e.getMessage());
    		return new ApiResponse<>(HttpStatus.INTERNAL_SERVER_ERROR.value(), e.getMessage(), null);
    	}
    	
    }

    @GetMapping
    public ApiResponse<List<Curso>> listCurso(){
        return new ApiResponse<>(HttpStatus.OK.value(), "Lista de cursos obtida corretamente.",cursoService.findAll());
    }

    @GetMapping("/{id}")
    public ApiResponse<Curso> getOne(@PathVariable int id){
        return new ApiResponse<>(HttpStatus.OK.value(), "Curso obtido corretamente.",cursoService.findById(id));
    }

    @PutMapping("/{id}")
    public ApiResponse<CursoDto> update(@RequestBody CursoDto cursoDto) {
        try {
        	return new ApiResponse<>(HttpStatus.OK.value(), "Curso atualizado corretamente.",cursoService.update(cursoDto));
    	} catch (Exception e) {
    		rollbar.error(e.getMessage());
    		return new ApiResponse<>(HttpStatus.INTERNAL_SERVER_ERROR.value(), e.getMessage(), null);
    	}
    	
    }

    @DeleteMapping("/{id}")
    public ApiResponse<Void> delete(@PathVariable int id) {
    	try {
    		cursoService.delete(id);
    		return new ApiResponse<>(HttpStatus.OK.value(), "Curso obtido corretamente.", null);
    	} catch (Exception e) {
    		rollbar.error(e.getMessage());
    		return new ApiResponse<>(HttpStatus.INTERNAL_SERVER_ERROR.value(), e.getMessage(), null);
    	}
    	
    }



}
