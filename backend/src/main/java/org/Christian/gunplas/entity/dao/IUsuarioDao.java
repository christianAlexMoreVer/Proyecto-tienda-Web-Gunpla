package org.Christian.gunplas.entity.dao;

import java.util.Optional;

import org.Christian.gunplas.entity.models.Usuario;
import org.springframework.data.repository.CrudRepository;

public interface IUsuarioDao extends CrudRepository<Usuario, Long>{
	Optional<Usuario> findBycorreoElectronico(String correo);
}
