package com.knoxpo.biodata.controller;

import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


import com.knoxpo.biodata.bean.User;
import com.knoxpo.biodata.service.UserService;


@RestController
@RequestMapping("/user")
public class UserController {

	//private static final Logger logger = LoggerFactory.getLogger(UserController.class);
	private UserService userService;

	@Autowired
	public void setUserService(UserService userService) {
		this.userService = userService;
	}

	@PostMapping("/save")
	public void saveUser(@RequestBody User user) {
		userService.particularUser(user);
	}
	@PutMapping("/save")
	public void saveOrUpdateUser(@RequestBody User user) {
		System.out.println(user);
		userService.saveOrUpdateUser(user);
	}
	@DeleteMapping("/delete/{uid}")
	public void deleteUser(@PathVariable("uid") int uid) {
		userService.deleteUserById(uid);
	}
	@GetMapping("/users")
	public List<User> getAllUsers() {
		List<User> users = userService.getAllUsers();
		return users;
	}

}
