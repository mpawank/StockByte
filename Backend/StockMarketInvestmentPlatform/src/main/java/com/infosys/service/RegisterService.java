package com.infosys.service;

import com.infosys.entity.Register;

public interface RegisterService {
	
	public Register saveNewUser(Register register);
	public Register login(String username,String password);

	
}
