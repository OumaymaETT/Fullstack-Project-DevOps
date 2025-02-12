package com.example.partiebackend.service;

import com.example.partiebackend.model.UserType;
import com.example.partiebackend.repository.UserTypeRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserTypeService {
    private final UserTypeRepository userTypeRepository;

    public UserTypeService(UserTypeRepository userTypeRepository) {
        this.userTypeRepository = userTypeRepository;
    }

    public List<UserType> getAllUserTypes() {
        return userTypeRepository.findAll();
    }

    public UserType createUserType(UserType userType) {
        return userTypeRepository.save(userType);
    }

    public void deleteUserType(Long id) {
        userTypeRepository.deleteById(id);
    }
    public UserType updateUserType(Long id, UserType userTypeDetails) {
        UserType userType = userTypeRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("UserType not found"));

        userType.setType(userTypeDetails.getType());

        return userTypeRepository.save(userType);
    }
    public UserType getUserTypeById(Long id) {
        return userTypeRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("UserType not found with id: " + id));
    }


}