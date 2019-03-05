package com.devglan.model;

import java.util.Date;

public class AlunoDto {

    private int id;
    private String nome;
    private String cpf;
    private String email;
    private Date data_nascimento;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}

	public String getCpf() {
		return cpf;
	}

	public void setCpf(String cpf) {
		this.cpf = cpf;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public Date getData_nascimento() {
		return data_nascimento;
	}

	public void setData_nascimento(Date data_nascimento) {
		this.data_nascimento = data_nascimento;
	}
   
}
