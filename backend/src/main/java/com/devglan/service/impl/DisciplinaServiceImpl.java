package com.devglan.service.impl;

import com.devglan.dao.DisciplinaDao;
import com.devglan.model.Curso;
import com.devglan.model.Disciplina;
import com.devglan.model.DisciplinaDto;
import com.devglan.model.Matricula;
import com.devglan.service.CursoService;
import com.devglan.service.DisciplinaService;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.Set;


@Service(value = "disciplinaService")
public class DisciplinaServiceImpl implements DisciplinaService {
	
	@Autowired
	private DisciplinaDao disciplinaDao;

	public List<Disciplina> findAll(Integer cursoFiltro) {
		List<Disciplina> list = new ArrayList<>();
		if(cursoFiltro == null) {			
			disciplinaDao.findAll().iterator().forEachRemaining(list::add);
		} else {
			disciplinaDao.findAll().forEach(dis -> {
				if(dis.getCurso().getId() == cursoFiltro) list.add(dis);
				});
		}
		return list;
	}

	@Override
	public void delete(int id) throws Exception {
		Disciplina disciplina = findById(id); 
		if(disciplina.cursoMatriculaIsEmpty())
			disciplinaDao.deleteById(id);
		else
			throw new Exception("Disciplina possui alunos matriculados.");
	}

	@Override
	public Disciplina findById(int id) {
		Optional<Disciplina> optionalUser = disciplinaDao.findById(id);
		return optionalUser.isPresent() ? optionalUser.get() : null;
	}
	
	@Override
	public List<Disciplina> findByNome(String nome) {
		disciplinaDao.findByNome(nome);
		return null;
	}

    @Override
    public DisciplinaDto update(DisciplinaDto disciplinaDto) throws Exception {
        Disciplina disciplina = findById(disciplinaDto.getId());
        if(disciplina != null) {
            BeanUtils.copyProperties(disciplinaDto, disciplina);
            try {
            	disciplinaDao.save(disciplina);
            }
            catch (DataIntegrityViolationException e) {
                throw new Exception("TODO");
            }
        }
        return disciplinaDto;
    }

    @Override
    public Disciplina save(DisciplinaDto disciplina) throws Exception {
	    Disciplina newDisciplina = new Disciplina();
	    Curso curso = new Curso();
	    curso.setId(disciplina.getId_curso());
	    newDisciplina.setNome(disciplina.getNome());
	    newDisciplina.setCurso(curso);
        try {
        	return disciplinaDao.save(newDisciplina);
        }
        catch (DataIntegrityViolationException e) {
            throw new Exception("TODO");
        }
    }
}
