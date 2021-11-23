package org.Christian.gunplas.entity.models;

import java.io.Serializable;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "Pedido")
public class Pedido implements Serializable {

	private static final long serialVersionUID = 1L;
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long idPedido;
	private long idUsuarioPedido;
	private long idMaqueta;
	
	public long getIdPedido() {
		return idPedido;
	}
	public void setIdPedido(long idPedido) {
		this.idPedido = idPedido;
	}
	public long getIdUsuarioPedido() {
		return idUsuarioPedido;
	}
	public void setIdUsuarioPedido(long idUsuarioPedido) {
		this.idUsuarioPedido = idUsuarioPedido;
	}
	public long getIdMaqueta() {
		return idMaqueta;
	}
	public void setIdMaqueta(long idMaqueta) {
		this.idMaqueta = idMaqueta;
	}
	
	public Pedido(long idPedido, long idUsuarioPedido, long idMaqueta) {
		super();
		this.idPedido = idPedido;
		this.idUsuarioPedido = idUsuarioPedido;
		this.idMaqueta = idMaqueta;
	}
	
	public Pedido(long idUsuarioPedido, long idMaqueta) {
		super();
		this.idUsuarioPedido = idUsuarioPedido;
		this.idMaqueta = idMaqueta;
	}
	public Pedido() {}
	
	
}
