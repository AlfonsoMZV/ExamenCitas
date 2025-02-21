package com.citas.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.citas.demo.entity.CitasEntity;

@Repository
public interface CitasRepository extends JpaRepository<CitasEntity, Integer> {

}
