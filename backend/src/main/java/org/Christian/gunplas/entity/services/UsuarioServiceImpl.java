package org.Christian.gunplas.entity.services;

import java.util.List;

import org.Christian.gunplas.entity.dao.IUsuarioDao;
import org.Christian.gunplas.entity.models.Usuario;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UsuarioServiceImpl implements IUsuarioService{

	@Autowired
	private IUsuarioDao UsuarioDao;

	@Override
	public List<Usuario> getAll() {
		return (List<Usuario>) UsuarioDao.findAll();
	}
	
	@Override
	public Usuario get(long idUsuario) {
		return UsuarioDao.findById(idUsuario).get();
	}
	
	@Override
	public void add(Usuario usuario) {
		UsuarioDao.save(usuario);
		
	}
	
	@Override
	public Usuario addUsuarioGraphQL(Usuario usuario) {
		return UsuarioDao.save(usuario);
	}

	@Override
	public void delete(long idUsuario) {
		UsuarioDao.deleteById(idUsuario);
		
	}

	@Override
	public void update(Usuario usuario, long idUsuario) {
		UsuarioDao.findById(idUsuario).ifPresent((x)->{
			usuario.setIdUsuario(idUsuario);
			UsuarioDao.save(usuario);
		});
		
	}

	@Override
	public Usuario updateUsuarioGraphQL(Usuario usuario, long idUsuario) {
		UsuarioDao.findById(idUsuario).ifPresent((x)->{
			usuario.setIdUsuario(idUsuario);
		});
		return UsuarioDao.save(usuario);
	}

	

}
