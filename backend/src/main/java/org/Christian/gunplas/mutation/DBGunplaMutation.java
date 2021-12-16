package org.Christian.gunplas.mutation;

import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.OutputStream;
import java.util.Base64;
import java.util.Base64.Decoder;

import org.Christian.gunplas.entity.models.Gunpla;
import org.Christian.gunplas.entity.models.Pedido;
import org.Christian.gunplas.entity.models.Usuario;
import org.Christian.gunplas.entity.services.IEncryptService;
import org.Christian.gunplas.entity.services.IGunplaService;
import org.Christian.gunplas.entity.services.IPedidoService;
import org.Christian.gunplas.entity.services.IUsuarioService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import com.coxautodev.graphql.tools.GraphQLMutationResolver;

@Component
public class DBGunplaMutation implements GraphQLMutationResolver {

	@Autowired
	private IGunplaService gunplaService;
	@Autowired
	private IUsuarioService usuarioService;
	@Autowired
	private IPedidoService pedidoService;
	@Autowired
	IEncryptService encryptService;
	
	public Gunpla createGunpla(String nombre, int precio, String escala, String tipoGrado, String breveIntro ,String descripcion, String imgFileName, String img64)throws IOException {
		Gunpla gunpla = new Gunpla (nombre, precio, escala, tipoGrado, breveIntro ,descripcion, imgFileName);
		String processedImg64 = img64.substring(img64.indexOf(",")+1);
		Decoder dec = Base64.getDecoder();
		OutputStream outputStream = null;
		byte[] fileBytes = dec.decode(processedImg64);
		outputStream = new FileOutputStream(new File("src/main/resources/static/img/maquetas" , imgFileName));
		outputStream.write(fileBytes);
		return gunplaService.addGunplaGraphQL(gunpla);
	}
	
	public Usuario createUsuario(String nombre, String apellidos, String contrasena, String correoElectronico, String imgUser) {
		Usuario usuario = new Usuario (nombre, apellidos, contrasena, correoElectronico, imgUser);
		String hashPass = encryptService.encryptPassword(usuario.getContrasena());
		usuario.setContrasena(hashPass);
		return usuarioService.addUsuarioGraphQL(usuario);
	}
	
	public Usuario createAdmin(String nombre, String apellidos, String contrasena, String correoElectronico, String imgUser, int admin) {
		Usuario usuario = new Usuario (nombre, apellidos, contrasena, correoElectronico, imgUser, admin);
		String hashPass = encryptService.encryptPassword(usuario.getContrasena());
		usuario.setContrasena(hashPass);
		return usuarioService.addUsuarioGraphQL(usuario);
	}
	
	public Pedido createPedido(long idUsuarioPedido, long idMaqueta) {
		Pedido pedido = new Pedido (idUsuarioPedido, idMaqueta);
		return pedidoService.addPedidoGraphQL(pedido);
	}
	
	public Gunpla updateGunpla(long idMaqueta,String nombre, int precio, String escala, String tipoGrado,String breveIntro,  String descripcion, String imgFileName, String img64)throws IOException {
		Gunpla gunpla = new Gunpla (nombre, precio, escala, tipoGrado,breveIntro, descripcion, imgFileName);
		String processedImg64 = img64.substring(img64.indexOf(",")+1);
		Decoder dec = Base64.getDecoder();
		OutputStream outputStream = null;
		byte[] fileBytes = dec.decode(processedImg64);
		outputStream = new FileOutputStream(new File("src/main/resources/static/img/maquetas" , imgFileName));
		outputStream.write(fileBytes);
		return gunplaService.updateGunplaGraphQL(gunpla, idMaqueta);
	}
	
	public Usuario updateUsuario(long idUsuario, String nombre, String apellidos, String contrasena, String correoElectronico) {
		Usuario usuario = new Usuario (nombre, apellidos, contrasena, correoElectronico);
		String hashPass = encryptService.encryptPassword(usuario.getContrasena());
		usuario.setContrasena(hashPass);
		return usuarioService.updateUsuarioGraphQL(usuario, idUsuario);
	}
	
	public Usuario updateUsuarioImgUser(long idUsuario, String imgUser, String img64)throws IOException{
		String processedImg64 = img64.substring(img64.indexOf(",")+1);
		Decoder dec = Base64.getDecoder();
		OutputStream outputStream = null;
		byte[] fileBytes = dec.decode(processedImg64);
		outputStream = new FileOutputStream(new File("src/main/resources/static/img/Usuarios" , imgUser));
		outputStream.write(fileBytes);
		return usuarioService.updateUsuarioImgUser(imgUser, idUsuario);
	}
	
	public Pedido updatePedido(long idPedido,long idUsuarioPedido, long idMaqueta) {
		Pedido pedido = new Pedido (idUsuarioPedido, idMaqueta);
		return pedidoService.updatePedidoGraphQL(pedido, idPedido);
	}
	
	public String deleteGunpla(long idMaqueta) {
		gunplaService.delete(idMaqueta);
		return ("Se ha eliminado la maqueta con id "+idMaqueta+" Correctamente");
	}
	
	public String deleteUsuario(long idUsuario) {
		usuarioService.delete(idUsuario);
		return ("Se ha eliminado el usuario con id "+idUsuario+" Correctamente");
	}
	
	public String deletePedido(long idPedido) {
		pedidoService.delete(idPedido);
		return ("Se ha eliminado el pedido con id "+idPedido+" Correctamente");
	}
}