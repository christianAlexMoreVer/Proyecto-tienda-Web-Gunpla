package org.Christian.gunplas.entity.services;

import org.Christian.gunplas.entity.models.Usuario;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCrypt;
import org.springframework.stereotype.Service;

@Service
public class EncryptServiceImpl implements IEncryptService{
	
	@Autowired 
	private org.Christian.gunplas.entity.dao.IUsuarioDao IUsuarioDao;

	@Override
	public String encryptPassword(String password) {
		return BCrypt.hashpw(password, BCrypt.gensalt());
	}

	@Override
	public boolean verifyPassword(String originalPassword, String hashPassword) {
		return BCrypt.checkpw(originalPassword, hashPassword);
	}

	@Override
	public Usuario saveUsuario(Usuario newUser) {
		return this.IUsuarioDao.save(newUser);
	}
	
	

}
