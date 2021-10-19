package org.Christian.gunplas.controllers;

import java.util.List;


import org.Christian.gunplas.entity.models.Gunpla;
import org.Christian.gunplas.entity.services.IGunplaService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin
@RestController
public class GunplaController {
	
	@Autowired
	IGunplaService gunplaService;
	
	@GetMapping("/maquetas")
	List<Gunpla> getAllGunplas(){
		return gunplaService.getAll();
	}
	
	@GetMapping("/maquetas/{idMaqueta}")
	Gunpla getOne(@PathVariable(value = "idMaqueta") long id_Maqueta) {
		return gunplaService.get(id_Maqueta);
	}
	
	@PostMapping("/maquetas")
	void add(Gunpla gunpla) {
		gunplaService.add(gunpla);
	}
	
	@PutMapping("/maquetas/{idMaqueta}")
	public void update(Gunpla gunpla, @PathVariable(value = "idMaqueta") long idMaqueta) {
		gunplaService.update(gunpla, idMaqueta);
	}
	
	@DeleteMapping("/maquetas/{idMaqueta}")
	void delete(@PathVariable("idMaqueta") long idMaqueta) {
		gunplaService.delete(idMaqueta);
	}

}
