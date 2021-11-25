package org.Christian.gunplas.entity.dao;

import java.util.List;
import java.util.Optional;

import org.Christian.gunplas.entity.models.Gunpla;
import org.springframework.data.repository.CrudRepository;

public interface IGunplaDao extends CrudRepository<Gunpla, Long>{
	List<Gunpla> findUserBynombreContaining(String Nombre);
}
