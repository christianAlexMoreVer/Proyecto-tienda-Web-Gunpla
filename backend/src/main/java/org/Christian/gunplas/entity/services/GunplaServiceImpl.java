package org.Christian.gunplas.entity.services;

import java.util.List;
import java.util.Optional;

import org.Christian.gunplas.entity.models.Gunpla;
import org.Christian.gunplas.entity.dao.IGunplaDao;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class GunplaServiceImpl implements IGunplaService {
	
	@Autowired
	private IGunplaDao GunplaDao;

	@Override
	public Gunpla get(long id_Maqueta) {
		return GunplaDao.findById(id_Maqueta).get();
	}
	
	@Override
	public List<Gunpla> getAll() {
		return (List<Gunpla>) GunplaDao.findAll();
	}

	@Override
	public void add(Gunpla gunpla) {
		GunplaDao.save(gunpla);
	}
	
	@Override
	public Gunpla addGunplaGraphQL(Gunpla gunpla) {
		return GunplaDao.save(gunpla);
	}

	@Override
	public void delete(long id_Maqueta) {
		GunplaDao.deleteById(id_Maqueta);
	}

	@Override
	public void update(Gunpla gunpla, long id_Maqueta) {
		GunplaDao.findById(id_Maqueta).ifPresent((x)->{
			gunpla.setIdMaqueta(id_Maqueta);
			GunplaDao.save(gunpla);
		});
	}

	@Override
	public Gunpla updateGunplaGraphQL(Gunpla gunpla, long id_Maqueta) {
		 GunplaDao.findById(id_Maqueta).ifPresent((x)->{
			gunpla.setIdMaqueta(id_Maqueta);
		});
		return GunplaDao.save(gunpla);
	}

	@Override
	public List<Gunpla> findUserBynombreContaining(String Nombre) {
		return GunplaDao.findUserBynombreContaining(Nombre);
	}

	
	
	


}
