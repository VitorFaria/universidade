package com.devglan.service.impl;

import com.devglan.dao.AlunoDao;
import com.devglan.model.Aluno;
import com.devglan.model.AlunoDto;
import com.devglan.service.AlunoService;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;


@Service(value = "alunoService")
public class AlunoServiceImpl implements AlunoService {
	
	@Autowired
	private AlunoDao alunoDao;

	public List<Aluno> findAll() {
		List<Aluno> list = new ArrayList<>();
		alunoDao.findAll().iterator().forEachRemaining(list::add);
		return list;
	}

	@Override
	public void delete(int id) {
		alunoDao.deleteById(id);
	}

	@Override
	public Aluno findById(int id) {
		Optional<Aluno> optionalUser = alunoDao.findById(id);
		return optionalUser.isPresent() ? optionalUser.get() : null;
	}
	
	@Override
	public List<Aluno> findByNome(String nome) {
		alunoDao.findByNome(nome);
		return null;
	}

    @Override
    public AlunoDto update(AlunoDto alunoDto) throws Exception {
        Aluno aluno = findById(alunoDto.getId());
        if(aluno != null) {
            BeanUtils.copyProperties(alunoDto, aluno);
            try {
            	alunoDao.save(aluno);
            }
            catch (DataIntegrityViolationException e) {
                throw new Exception("CPF já cadastrado.");
            }
        }
        return alunoDto;
    }

    @Override
    public Aluno save(AlunoDto aluno) throws Exception {
	    Aluno newAluno = new Aluno();
	    newAluno.setNome(aluno.getNome());
	    newAluno.setCpf(aluno.getCpf());
	    newAluno.setEmail(aluno.getEmail());
	    newAluno.setData_nascimento(aluno.getData_nascimento());
        try {
        	return alunoDao.save(newAluno);
        }
        catch (DataIntegrityViolationException e) {
            throw new Exception("CPF já cadastrado.");
        }
    }
}
