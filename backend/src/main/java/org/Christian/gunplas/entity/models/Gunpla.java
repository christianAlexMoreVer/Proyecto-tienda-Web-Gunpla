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
	
	private String Nombre;
	
	private int precio;
	
	private String Escala;
	
	private String TipoGrado;
	
	private String Descripcion;
	
	private String img;

	public long getIdMaqueta() {
		return idMaqueta;
	}

	public void setIdMaqueta(long idMaqueta) {
		this.idMaqueta = idMaqueta;
	}

	public String getNombre() {
		return Nombre;
	}

	public void setNombre(String nombre) {
		Nombre = nombre;
	}

	public int getPrecio() {
		return precio;
	}

	public void setPrecio(int precio) {
		this.precio = precio;
	}

	public String getEscala() {
		return Escala;
	}

	public void setEscala(String escala) {
		Escala = escala;
	}

	public String getTipoGrado() {
		return TipoGrado;
	}

	public void setTipoGrado(String tipoGrado) {
		TipoGrado = tipoGrado;
	}
	
	public String getDescripcion() {
		return Descripcion;
	}
	
	public void setDescripcion(String descripcion) {
		Descripcion = descripcion;
	}

	public String getImg() {
		return img;
	}

	public void setImg(String img) {
		this.img = img;
	}

	public Gunpla(String nombre, int precio, String escala, String tipoGrado, String descripcion, String img) {
		super();
		this.Nombre = nombre;
		this.precio = precio;
		this.Escala = escala;
		this.TipoGrado = tipoGrado;
		this.Descripcion = descripcion;
		this.img = img;
	}
	
	public Gunpla() {}

	

	
	
	
}
