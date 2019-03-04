package com.devglan.model;

import java.util.Date;
import java.util.HashSet;
import java.util.Set;

import javax.persistence.*;

@Entity
@Table(name = "curso")
public class Curso {

    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    private int id;
    @Column(length = 100)
    private String nome;
    @Column(columnDefinition="date")
    private Date data_inicio;
    @Column(columnDefinition="date")
    private Date data_fim;

    @OneToMany(mappedBy = "curso")
    private Set<Matricula> matricula = new HashSet<Matricula>();

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

	public Date getData_inicio() {
		return data_inicio;
	}

	public void setData_inicio(Date data_inicio) {
		this.data_inicio = data_inicio;
	}

	public Date getData_fim() {
		return data_fim;
	}

	public void setData_fim(Date data_fim) {
		this.data_fim = data_fim;
	}
	
	public boolean matriculaIsEmpty() {
		return matricula.isEmpty();
	}
}
