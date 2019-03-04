package com.devglan.dao;

import com.devglan.model.Matricula;
import com.devglan.model.MatriculaId;

import java.util.Optional;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MatriculaDao extends CrudRepository<Matricula, MatriculaId> {

	//void deleteByMatriculaId(MatriculaId mId);

	//Optional<Matricula> findByMatriculaId(MatriculaId mId);

}
