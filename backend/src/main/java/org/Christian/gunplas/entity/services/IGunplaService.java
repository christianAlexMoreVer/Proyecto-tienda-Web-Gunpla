package org.Christian.gunplas.entity.services;
import java.util.List;
import java.util.Optional;

import org.Christian.gunplas.entity.models.Gunpla;

public interface IGunplaService {
	public List<Gunpla> getAll();
	public Gunpla get(long idMaqueta);
	public void add(Gunpla gunpla);
	public Gunpla addGunplaGraphQL(Gunpla gunpla);
	public void delete(long idMaqueta);
	public void update(Gunpla gunpla, long idMaqueta);
	public Gunpla updateGunplaGraphQL(Gunpla gunpla, long idMaqueta);
	public List<Gunpla> findUserBynombreContaining(String Nombre);
}
