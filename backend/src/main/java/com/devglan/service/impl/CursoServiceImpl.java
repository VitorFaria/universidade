package com.devglan.service.impl;

import com.devglan.dao.CursoDao;
import com.devglan.model.Curso;
import com.devglan.model.CursoDto;
import com.devglan.model.Matricula;
import com.devglan.service.CursoService;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.Set;


@Service(value = "cursoService")
public class CursoServiceImpl implements CursoService {
	
	@Autowired
	private CursoDao cursoDao;

	public List<Curso> findAll() {
		List<Curso> list = new ArrayList<>();
		cursoDao.findAll().iterator().forEachRemaining(list::add);
		return list;
	}

	@Override
	public void delete(int id) throws Exception {
		Curso curso = findById(id); 
		if(curso.matriculaIsEmpty())
			cursoDao.deleteById(id);
		else
			throw new Exception("Curso possui alunos matriculados.");
	}

	@Override
	public Curso findById(int id) {
		Optional<Curso> optionalUser = cursoDao.findById(id);
		return optionalUser.isPresent() ? optionalUser.get() : null;
	}
	
	@Override
	public List<Curso> findByNome(String nome) {
		cursoDao.findByNome(nome);
		return null;
	}

    @Override
    public CursoDto update(CursoDto cursoDto) throws Exception {
        Curso curso = findById(cursoDto.getId());
        if(curso != null) {
            BeanUtils.copyProperties(cursoDto, curso);
            try {
            	cursoDao.save(curso);
            }
            catch (DataIntegrityViolationException e) {
                throw new Exception("TODO");
            }
        }
        return cursoDto;
    }

    @Override
    public Curso save(CursoDto curso) throws Exception {
	    Curso newCurso = new Curso();
	    newCurso.setNome(curso.getNome());
	    newCurso.setData_inicio(curso.getData_inicio());
	    newCurso.setData_fim(curso.getData_fim());
        try {
        	return cursoDao.save(newCurso);
        }
        catch (DataIntegrityViolationException e) {
            throw new Exception("TODO");
        }
    }
}
