package org.Christian.gunplas.entity.services;
import java.util.List;

import org.Christian.gunplas.entity.models.Pedido;

public interface IPedidoService {
	public List<Pedido> getAll();
	public Pedido get(long idPedido);
	public void add(Pedido pedido);
	public Pedido addPedidoGraphQL(Pedido pedido);
	public void delete(long idPedido);
	public void update(Pedido pedido, long idPedido);
	public Pedido updatePedidoGraphQL(Pedido pedido, long idPedido);
	public List<Pedido> getPedidoidUsuarioPedido(long idUsuarioPedido);
}
