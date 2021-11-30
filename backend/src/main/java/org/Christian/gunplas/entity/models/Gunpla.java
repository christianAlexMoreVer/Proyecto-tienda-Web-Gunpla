package org.Christian.gunplas.entity.models;

import java.io.Serializable;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;


@Entity
@Table(name = "Maqueta")
public class Gunpla implements Serializable {

	private static final long serialVersionUID = 1L;
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long idMaqueta;
	
	private String nombre;
	
	private int precio;
	
	private String escala;
	
	private String tipoGrado;
	
	private String breveIntro;
	
	private String descripcion;
	
	private String imgFileName;

	public long getIdMaqueta() {
		return idMaqueta;
	}

	public void setIdMaqueta(long idMaqueta) {
		this.idMaqueta = idMaqueta;
	}

	public String getNombre() {
		return nombre;
	}

	public void setNombre(String nombre) {
		this.nombre = nombre;
	}

	public int getPrecio() {
		return precio;
	}

	public void setPrecio(int precio) {
		this.precio = precio;
	}

	public String getEscala() {
		return escala;
	}

	public void setEscala(String escala) {
		this.escala = escala;
	}

	public String getTipoGrado() {
		return tipoGrado;
	}

	public void setTipoGrado(String tipoGrado) {
		this.tipoGrado = tipoGrado;
	}
	
	public String getDescripcion() {
		return descripcion;
	}
	
	public void setDescripcion(String descripcion) {
		this.descripcion = descripcion;
	}

	public String getImgFileName() {
		return imgFileName;
	}

	public void setImg(String imgFileName) {
		this.imgFileName = imgFileName;
	}

	public Gunpla(String nombre, int precio, String escala, String tipoGrado,String breveIntro ,String descripcion, String img) {
		super();
		this.nombre = nombre;
		this.precio = precio;
		this.escala = escala;
		this.tipoGrado = tipoGrado;
		this.breveIntro = breveIntro;
		this.descripcion = descripcion;
		this.imgFileName = img;
	}
	
	public Gunpla(String nombre, int precio, String escala, String tipoGrado, String breveIntro, String descripcion) {
		super();
		this.nombre = nombre;
		this.precio = precio;
		this.escala = escala;
		this.tipoGrado = tipoGrado;
		this.breveIntro = breveIntro;
		this.descripcion = descripcion;
	}
	
	public Gunpla() {}

	public String getBreveIntro() {
		return breveIntro;
	}

	public void setBreveIntro(String breveIntro) {
		this.breveIntro = breveIntro;
	}

	

	
	
	
}
