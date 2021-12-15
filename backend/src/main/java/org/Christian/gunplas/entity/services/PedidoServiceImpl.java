package org.Christian.gunplas.entity.services;

import java.util.List;

import org.Christian.gunplas.entity.dao.IPedidoDao;
import org.Christian.gunplas.entity.models.Pedido;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class PedidoServiceImpl implements IPedidoService {

	@Autowired
	private IPedidoDao PedidoDao;
	
	@Override
	public List<Pedido> getAll() {
		return (List<Pedido>) PedidoDao.findAll();
	}
	
	@Override
	public Pedido get(long idPedido) {
		return PedidoDao.findById(idPedido).get();
	}

	@Override
	public void add(Pedido pedido) {
		PedidoDao.save(pedido);
	}

	@Override
	public Pedido addPedidoGraphQL(Pedido pedido) {
		return PedidoDao.save(pedido);
	}
	
	@Override
	public void delete(long idPedido) {
		PedidoDao.deleteById(idPedido);
		
	}

	@Override
	public void update(Pedido pedido, long idPedido) {
		PedidoDao.findById(idPedido).ifPresent((x)->{
			pedido.setIdPedido(idPedido);
			PedidoDao.save(pedido);
		});
		
	}

	@Override
	public Pedido updatePedidoGraphQL(Pedido pedido, long idPedido) {
		PedidoDao.findById(idPedido).ifPresent((x)->{
			pedido.setIdPedido(idPedido);
		});
		return PedidoDao.save(pedido);
	}

	@Override
	public List<Pedido> getPedidoidUsuarioPedido(long idUsuarioPedido) {
		return (List<Pedido>) PedidoDao.findByidUsuarioPedido(idUsuarioPedido);
	}

	
	
	
	
	
}
