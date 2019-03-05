package com.devglan.service.impl;

import com.devglan.dao.MatriculaDao;
import com.devglan.model.Matricula;
import com.devglan.model.MatriculaDto;
import com.devglan.model.MatriculaId;
import com.devglan.service.MatriculaService;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;


@Service(value = "matriculaService")
public class MatriculaServiceImpl implements MatriculaService {
	
	@Autowired
	private MatriculaDao matriculaDao;

	public List<Matricula> findAll() {
		List<Matricula> list = new ArrayList<>();
		matriculaDao.findAll().iterator().forEachRemaining(list::add);
		return list;
	}

	@Override
	public void delete(int id_aluno, int id_curso) {
		
		MatriculaId mId = new MatriculaId(id_aluno, id_curso);
		matriculaDao.deleteById(mId); 
	}

	@Override
	public Matricula findById(int id_aluno, int id_curso) {
		MatriculaId mId= new MatriculaId(id_aluno, id_curso);
		
		Optional<Matricula> optionalMatricula = matriculaDao.findById(mId);
		return optionalMatricula.isPresent() ? optionalMatricula.get() : null;
	}

    @Override
    public MatriculaDto update(MatriculaDto matriculaDto) throws Exception {
    	
        Matricula matricula = findById(matriculaDto.getId_aluno(), matriculaDto.getId_curso());
        if(matricula != null) {
            BeanUtils.copyProperties(matriculaDto, matricula);
            try {
            	matriculaDao.save(matricula);
            }
            catch (DataIntegrityViolationException e) {
                throw new Exception("TODO");
            }
        }
        return matriculaDto;
    }

    @Override
    public Matricula save(MatriculaDto matricula) throws Exception {
	    MatriculaId mId = new MatriculaId(matricula.getId_aluno(), matricula.getId_curso());
	    Matricula newMatricula = new Matricula(mId);
	    newMatricula.setData_matricula(matricula.getData_matricula());
	    newMatricula.setTurno(matricula.getTurno());
        try {
        	return matriculaDao.save(newMatricula);
        }
        catch (DataIntegrityViolationException e) {
            throw new Exception("TODO");
        }
    }
}
