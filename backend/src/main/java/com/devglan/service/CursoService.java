package com.devglan.service;

import com.devglan.model.Curso;
import com.devglan.model.CursoDto;

import java.util.List;

public interface CursoService {

	Curso save(CursoDto user) throws Exception;
    List<Curso> findAll();
    void delete(int id) throws Exception;

    List<Curso> findByNome(String nome);

    Curso findById(int id);

    CursoDto update(CursoDto cursoDto) throws Exception;
}
