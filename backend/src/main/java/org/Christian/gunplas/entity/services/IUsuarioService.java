package org.Christian.gunplas.entity.services;
import java.util.List;
import java.util.Optional;

import org.Christian.gunplas.entity.models.Usuario;

public interface IUsuarioService{
	public List<Usuario> getAll();
	public Usuario get(long idUsuario);
	public void add(Usuario usuario);
	public Usuario addUsuarioGraphQL(Usuario usuario);
	public void delete(long idUsuario);
	public void update(Usuario usuario, long idUsuario);
	public Usuario updateUsuarioGraphQL(Usuario usuario, long idUsuario);
	public Usuario updateUsuarioImgUser(String imgUser, long idUsuario);
	public boolean findBycorreoElectronico(String correo);
	public Usuario getUsuarioByCorreo(String correo);
	public Usuario usuarioLogged(String correo, String contrasena);
}