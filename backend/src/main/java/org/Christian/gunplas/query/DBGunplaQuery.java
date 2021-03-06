package org.Christian.gunplas.query;

import java.util.List;

import org.Christian.gunplas.entity.models.Gunpla;
import org.Christian.gunplas.entity.models.Pedido;
import org.Christian.gunplas.entity.models.Usuario;
import org.Christian.gunplas.entity.services.IGunplaService;
import org.Christian.gunplas.entity.services.IPedidoService;
import org.Christian.gunplas.entity.services.IUsuarioService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import com.coxautodev.graphql.tools.GraphQLQueryResolver;


@Component
public class DBGunplaQuery implements GraphQLQueryResolver {
	
	@Autowired
	private IGunplaService gunplaService;
	@Autowired
	private IUsuarioService usuarioService;
	@Autowired
	private IPedidoService pedidoService;
	
	public List<Gunpla> getGunplas(){
		return gunplaService.getAll();
	}
	
	public List<Gunpla> getGunplaByName(String nombre){
		return gunplaService.findUserBynombreContaining(nombre);
	}
	
	public Gunpla getGunpla(long id){
		return gunplaService.get(id);
	}
	
	
	public List<Usuario> getUsuarios(){
		return usuarioService.getAll();
	}
	
	public Usuario getUsuario(long id){
		return usuarioService.get(id);
	}
	
	public Usuario getUsuarioGetCorreo(String correo) {
		return usuarioService.getUsuarioByCorreo(correo);
	}
	
	public Boolean getUsuarioExist(String correo) {
		return usuarioService.findBycorreoElectronico(correo);
	}
	
	public Usuario getUsuarioLogged(String correo, String contrasena) {
		return usuarioService.usuarioLogged(correo, contrasena);
	}
	
	public List<Pedido> getPedidos(){
		return pedidoService.getAll();
	}
	
	public Pedido getPedido(long id){
		return pedidoService.get(id);
	}
	
	public List<Pedido> getPedidosUser(long id){
		return pedidoService.getPedidoidUsuarioPedido(id);
	}
}
