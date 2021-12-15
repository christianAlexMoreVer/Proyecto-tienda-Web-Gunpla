package org.Christian.gunplas.entity.dao;

import java.util.List;
import java.util.Optional;

import org.Christian.gunplas.entity.models.Pedido;
import org.Christian.gunplas.entity.models.Usuario;
import org.springframework.data.repository.CrudRepository;


public interface IPedidoDao extends CrudRepository<Pedido, Long>{
	List<Pedido> findByidUsuarioPedido(long idUsuarioPedido);
}
