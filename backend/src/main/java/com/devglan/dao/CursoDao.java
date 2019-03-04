package com.devglan.dao;

import com.devglan.model.Curso;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CursoDao extends CrudRepository<Curso, Integer> {

	Curso findByNome(String nome);
}
