package com.citas.demo.controller;

import com.citas.demo.entity.CitasEntity;
import com.citas.demo.service.CitasService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/api/v1/")
public class CitasController {

    @Autowired
    private CitasService citasService;

    @PostMapping(value = "createCita")
    public String createCita(@RequestBody CitasEntity citas){
        return citasService.createCita(citas);
    }

    @PutMapping(value = "updateCita/{id}")
    public String updateCita(@RequestBody CitasEntity cita, @PathVariable Integer id){
        return citasService.updateCita(cita, id);
    }

    @DeleteMapping(value = "deleteCita/{id}")
    public String deleteCita(@PathVariable Integer id){
        return citasService.deleteCita(id);
    }
    
    @GetMapping("getAllCitas")
	public List<CitasEntity> getAllCitas(){
		return citasService.getAllCitas();
	}
	
	@GetMapping("getByIdCitas/{id}")
	public Optional<CitasEntity> getByIdCitas(@PathVariable Integer id) {
		return citasService.getByIdCitas(id);
	}
}
