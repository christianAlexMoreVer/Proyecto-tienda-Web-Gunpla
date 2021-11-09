package org.Christian.gunplas.entity.services;
import java.util.List;

import org.Christian.gunplas.entity.models.Usuario;

public interface IUsuarioService{
	public List<Usuario> getAll();
	public Usuario get(long idUsuario);
	public void add(Usuario usuario);
	public void delete(long idUsuario);
	public void update(Usuario usuario, long idUsuario);
}
