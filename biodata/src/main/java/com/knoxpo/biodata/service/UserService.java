package com.knoxpo.biodata.service;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.knoxpo.biodata.bean.User;
import com.knoxpo.biodata.repositoy.UserRepository;

@Service
public class UserService {
	
	//private static final Logger logger = LoggerFactory.getLogger(UserService.class);

	private UserRepository userRepository;

	@Autowired
	public void setUserRepository(UserRepository userRepository) {
		this.userRepository = userRepository;
	}

	@Transactional
	public void particularUser(User user) {
		userRepository.save(user);
	}

	@Transactional
	public void saveOrUpdateUser(User user) {
		User updatedUser = userRepository.findByUid(user.getUid());
		updatedUser.setName(user.getName());
		updatedUser.setEmail(user.getEmail());
		updatedUser.setMobileNumber(user.getMobileNumber());
		updatedUser.setJobTitle(user.getJobTitle());
		userRepository.save(updatedUser);
	}
	@Transactional
	public void deleteUserById(int id) {
		User updatedUser = userRepository.findByUid(id);
		userRepository.delete(updatedUser);
	}
	@Transactional
	public List<User> getAllUsers(){
		return userRepository.findAll();	
	}
	
}
