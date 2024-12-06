package com.infosys.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import com.infosys.entity.Register;
import com.infosys.service.RegisterServiceImp;

@RestController
@CrossOrigin(origins = {"*"})
public class RegisterController {

    @Autowired
    private RegisterServiceImp service;

    @PostMapping("/save")
    public String saveUser(@RequestBody Register register) {
        Register save = service.saveNewUser(register);
        return save != null ? "New User Successfully Registered." : "Registration Failed.";
    }

    @PostMapping("/login")
    public String loginUser(@RequestBody Register register) {
        Register foundUser = service.login(register.getUsername(), register.getPassword());
        return foundUser != null ? "Login Successful" : "Invalid Username or Password";
    }
}
