package com.devglan.model;

import java.util.Date;

import javax.persistence.*;

@Entity
@Table(name = "aluno")
public class Aluno {

    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    private int id;
    @Column(length = 100)
    private String nome;
    @Column(name = "cpf", nullable = false, unique = true, length = 14)
    private String cpf;
    @Column(length = 100)
    private String email;
    @Column(columnDefinition="date")
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
