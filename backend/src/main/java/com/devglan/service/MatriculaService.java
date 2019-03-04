package com.devglan.service;

import com.devglan.model.Matricula;
import com.devglan.model.MatriculaDto;

import java.util.List;

public interface MatriculaService {

    Matricula save(MatriculaDto user) throws Exception;
    List<Matricula> findAll();
    void delete(int id_aluno, int id_curso);

    Matricula findById(int id_aluno, int id_curso);

    MatriculaDto update(MatriculaDto matriculaDto) throws Exception;
}
