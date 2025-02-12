package com.example.partiebackend.controller;

import com.example.partiebackend.model.UserType;
import com.example.partiebackend.service.UserTypeService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/user-types")
public class UserTypeController {
    private final UserTypeService userTypeService;

    public UserTypeController(UserTypeService userTypeService) {
        this.userTypeService = userTypeService;
    }

    @GetMapping
    public List<UserType> getAllUserTypes() {
        return userTypeService.getAllUserTypes();
    }
    @GetMapping("/{id}")
    public UserType getUserTypeById(@PathVariable Long id) {
        return userTypeService.getUserTypeById(id);
    }


    @PostMapping
    public UserType createUserType(@RequestBody UserType userType) {
        return userTypeService.createUserType(userType);
    }

    @PutMapping("/{id}")
    public UserType updateUserType(@PathVariable Long id, @RequestBody UserType userTypeDetails) {
        return userTypeService.updateUserType(id, userTypeDetails);
    }


    @DeleteMapping("/{id}")
    public void deleteUserType(@PathVariable Long id) {
        userTypeService.deleteUserType(id);
    }
}