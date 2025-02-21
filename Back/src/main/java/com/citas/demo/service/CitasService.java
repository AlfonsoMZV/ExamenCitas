package com.citas.demo.service;

import com.citas.demo.entity.CitasEntity;
import com.citas.demo.repository.CitasRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;
import java.util.Optional;

@Service
public class CitasService {

    @Autowired
    private CitasRepository repository;

    @Transactional
    public String createCita(CitasEntity cita){
    	String response=null;
        try {
            repository.save(cita);
            response = "Cita creada correctamente.";
        }catch (Exception e){
            throw e;
        }
        return response;
    }

    @Transactional
    public String updateCita(CitasEntity entity, Integer id) {
		String response=null;
        try {
        	entity.setId(id);
    		repository.save(entity);
            response = "Cita actualizada correctamente.";
    	}catch (Exception e){
            throw e;
        }
        return response;
	}

    @Transactional
    public String deleteCita(Integer id){
        String response=null;
        try {
        	repository.deleteById(id);;
            response = "Cita eliminada correctamente.";
    	}catch (Exception e){
            throw e;
        }
        return response;
    }
    
    public List<CitasEntity> getAllCitas(){
		return repository.findAll();
	}
	
	public Optional<CitasEntity> getByIdCitas(Integer id) {
		return repository.findById(id);
	}
}
