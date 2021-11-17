package org.Christian.gunplas.controllers;

import java.util.List;


import org.Christian.gunplas.entity.models.Gunpla;
import org.Christian.gunplas.entity.models.Pedido;
import org.Christian.gunplas.entity.models.Usuario;
import org.Christian.gunplas.entity.services.IEncryptService;
import org.Christian.gunplas.entity.services.IGunplaService;
import org.Christian.gunplas.entity.services.IPedidoService;
import org.Christian.gunplas.entity.services.IUsuarioService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin
@RestController
public class GunplaController {
	
	@Autowired
	IGunplaService gunplaService;
	@Autowired
	IUsuarioService usuarioService;
	@Autowired
	IPedidoService pedidoService;
	@Autowired
	IEncryptService encryptService;
	
	@GetMapping("/pedido/{idPedido}")
	Pedido getOnePedido(@PathVariable(value = "idPedido") long idPedido) {
		return pedidoService.get(idPedido);
	}
	
	@GetMapping("/pedido")
	List<Pedido> getAllPedidos(){
		return pedidoService.getAll();
	}
	
	@GetMapping("/usuario/{idUsuario}")
	Usuario getOneUsuario(@PathVariable(value = "idUsuario") long idUsuario) {
		return usuarioService.get(idUsuario);
	}
	
	@GetMapping("/usuario")
	List<Usuario> getAllUsuarios(){
		return usuarioService.getAll();
	}
	
	@GetMapping("/maqueta/{idMaqueta}")
	Gunpla getOneMaqueta(@PathVariable(value = "idMaqueta") long id_Maqueta) {
		return gunplaService.get(id_Maqueta);
	}
	
	@GetMapping("/maqueta")
	List<Gunpla> getAllGunplas(){
		return gunplaService.getAll();
	}  
	
	@PostMapping("/pedido")
	void add(Pedido pedido) {
		pedidoService.add(pedido);
	}
	
	@PostMapping("/usuario")
	void add(Usuario usuario) {
		String hashPass = encryptService.encryptPassword(usuario.getContrasena());
		usuario.setContrasena(hashPass);
		usuarioService.add(usuario);
	}
	
	@PostMapping("/maquetas")
	void add(Gunpla gunpla) {
		gunplaService.add(gunpla);
	}
	
	@PutMapping("/pedido/{idPedido}")
	public void update(Pedido pedido, @PathVariable(value = "idPedido") long idPedido) {
		pedidoService.update(pedido, idPedido);
	}
	
	@PutMapping("/usuario/{idUsuario}")
	public void update(Usuario usuario, @PathVariable(value = "idUsuario") long idUsuario) {
		String hashPass = encryptService.encryptPassword(usuario.getContrasena());
		usuario.setContrasena(hashPass);
		usuarioService.update(usuario, idUsuario);
	}
	
	@PutMapping("/maquetas/{idMaqueta}")
	public void update(Gunpla gunpla, @PathVariable(value = "idMaqueta") long idMaqueta) {
		gunplaService.update(gunpla, idMaqueta);
	}
	
	@DeleteMapping("/pedido/{idPedido}")
	void deletePedido(@PathVariable("idPedido") long idPedido) {
		pedidoService.delete(idPedido);
	}
	
	@DeleteMapping("/usuario/{idUsuario}")
	void deleteUser(@PathVariable("idUsuario") long idUsuario) {
		usuarioService.delete(idUsuario);
	}
	
	@DeleteMapping("/maqueta/{idMaqueta}")
	void deleteMaqueta(@PathVariable("idMaqueta") long idMaqueta) {
		gunplaService.delete(idMaqueta);
	}

}
