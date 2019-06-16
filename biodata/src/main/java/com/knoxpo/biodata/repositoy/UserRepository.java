package com.knoxpo.biodata.repositoy;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.knoxpo.biodata.bean.User;
@Repository
public interface UserRepository extends JpaRepository<User, Integer> {


	User findByUid(int uid);



}
