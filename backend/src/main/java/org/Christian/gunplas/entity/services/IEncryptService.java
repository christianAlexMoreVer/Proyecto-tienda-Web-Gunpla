package org.Christian.gunplas.entity.services;

import org.Christian.gunplas.entity.models.Usuario;

public interface IEncryptService {
	
	String encryptPassword(String password);
	
	boolean verifyPassword(String originalPassword, String hashPassword);
	
	public Usuario saveUsuario(Usuario newUser);

}
