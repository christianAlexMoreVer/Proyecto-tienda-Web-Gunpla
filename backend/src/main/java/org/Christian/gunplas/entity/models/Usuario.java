package org.Christian.gunplas.entity.models;

import java.io.Serializable;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "Usuario")
public class Usuario implements Serializable{

	private static final long serialVersionUID = 1L;
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long idUsuario;
	
	private String nombre;
	
	private String apellidos;
	
	private String contrasena;
	
	private String correoElectronico;
	
	private String imgUser;
	
	private int admin;

	public long getIdUsuario() {
		return idUsuario;
	}

	public void setIdUsuario(long idUsuario) {
		this.idUsuario = idUsuario;
	}

	public String getNombre() {
		return nombre;
	}

	public void setNombre(String nombre) {
		this.nombre = nombre;
	}

	public String getApellidos() {
		return apellidos;
	}

	public void setApellidos(String apellidos) {
		this.apellidos = apellidos;
	}

	public String getContrasena() {
		return contrasena;
	}

	public void setContrasena(String contrasena) {
		this.contrasena = contrasena;
	}

	public String getCorreoElectronico() {
		return correoElectronico;
	}

	public void setCorreoElectronico(String correoElectronico) {
		this.correoElectronico = correoElectronico;
	}
	
	public int getAdmin() {
		return admin;
	}

	public void setAdmin(int admin) {
		this.admin = admin;
	}
	
	public String getImgUser() {
		return imgUser;
	}

	public void setImgUser(String imgUser) {
		this.imgUser = imgUser;
	}


	public Usuario(long idUsuario, String nombre, String apellidos, String contrasena, String correoElectronico, String imgUser, int admin) {
		super();
		this.idUsuario = idUsuario;
		this.nombre = nombre;
		this.apellidos = apellidos;
		this.contrasena = contrasena;
		this.correoElectronico = correoElectronico;
		this.imgUser = imgUser;
		this.admin = admin;
	}
	
	public Usuario(String nombre, String apellidos, String contrasena, String correoElectronico, String imgUser) {
		super();
		this.nombre = nombre;
		this.apellidos = apellidos;
		this.contrasena = contrasena;
		this.correoElectronico = correoElectronico;
		this.imgUser = imgUser;
	}
	
	public Usuario(String nombre, String apellidos, String contrasena, String correoElectronico) {
		super();
		this.nombre = nombre;
		this.apellidos = apellidos;
		this.contrasena = contrasena;
		this.correoElectronico = correoElectronico;
	}

	public Usuario() {}

	
}
