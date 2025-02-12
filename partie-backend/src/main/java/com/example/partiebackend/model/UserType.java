package com.example.partiebackend.model;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;


import jakarta.persistence.*;

@Entity
@Table(name = "user_type")
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
public class UserType {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    private String type;

    // Getters & Setters
    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public String getType() { return type; }
    public void setType(String type) { this.type = type; }
}
