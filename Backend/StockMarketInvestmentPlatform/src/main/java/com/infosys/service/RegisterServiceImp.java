package com.infosys.service;
 
import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.stereotype.Service;
 
import com.infosys.entity.Register;

import com.infosys.repo.RegisterRepo;
 
@Service

public class RegisterServiceImp implements RegisterService {
 
	@Autowired private RegisterRepo repo;

	@Override

	public Register saveNewUser(Register rergister) {

		return repo.save(rergister);

	}
 
	@Override
	public Register login(String username, String password) {
	    return repo.findByUsernameAndPassword(username, password);
	}
 
}

