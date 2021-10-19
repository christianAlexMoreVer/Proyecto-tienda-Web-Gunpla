package org.Christian.gunplas.entity.services;
import java.util.List;

import org.Christian.gunplas.entity.models.Gunpla;

public interface IGunplaService {
	public Gunpla get(long id_Maqueta);
	public List<Gunpla> getAll();
	public void add(Gunpla gunpla);
	public void delete(long id_Maqueta);
	public void update(Gunpla gunpla, long id_Maqueta);
}
