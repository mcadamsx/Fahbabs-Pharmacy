package com.simpleform.simpleform.repository;

import com.simpleform.simpleform.model.UserModel;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface LoginRespository extends JpaRepository <UserModel, Integer> {

    Optional<UserModel> findByLoginAndPassword(String login, String password);
}
