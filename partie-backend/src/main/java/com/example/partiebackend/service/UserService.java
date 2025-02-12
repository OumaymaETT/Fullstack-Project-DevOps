package com.example.partiebackend.service;

import com.example.partiebackend.model.User;
import com.example.partiebackend.model.UserType;
import com.example.partiebackend.repository.UserRepository;
import com.example.partiebackend.repository.UserTypeRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {
    private final UserRepository userRepository;
    private final UserTypeRepository userTypeRepository;

    public UserService(UserRepository userRepository, UserTypeRepository userTypeRepository) {
        this.userRepository = userRepository;
        this.userTypeRepository = userTypeRepository;
    }

    public List<User> getAllUsers() {
        return userRepository.findAll();
    }
    public User getUserById(Long id) {
        return userRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("User not found"));
    }


    public User createUser(User user) {
        if (user.getUserType().getId() != null) {
            UserType userType = userTypeRepository.findById(user.getUserType().getId())
                    .orElseThrow(() -> new RuntimeException("UserType not found"));
            user.setUserType(userType);
        } else {
            throw new RuntimeException("UserType is required");
        }

        return userRepository.save(user);
    }


    public User updateUser(Long id, User userDetails) {
        User user = userRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("User not found"));

        user.setName(userDetails.getName());
        user.setFirstName(userDetails.getFirstName());
        user.setEmail(userDetails.getEmail());

        if (userDetails.getUserType() != null && userDetails.getUserType().getId() != null) {
            UserType userType = userTypeRepository.findById(userDetails.getUserType().getId())
                    .orElseThrow(() -> new RuntimeException("UserType not found"));
            user.setUserType(userType);
        }

        return userRepository.save(user);
    }

    public void deleteUser(Long id) {
        if (!userRepository.existsById(id)) {
            throw new RuntimeException("User not found");
        }
        userRepository.deleteById(id);
    }

}
