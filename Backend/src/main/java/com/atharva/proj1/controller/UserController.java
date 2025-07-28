package com.atharva.proj1.controller;


import com.atharva.proj1.entity.User;
import com.atharva.proj1.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/users")
@CrossOrigin(origins = "*")
public class UserController {

    @Autowired
    private UserRepository userrepo;

    @GetMapping
    public List<User> getAllUsers(){
        return userrepo.findAll();
    }

    @PostMapping
    public User createUser(@RequestBody User user){
        return userrepo.save(user);
    }

    @PatchMapping("/{id}")
    public User updateUser(@PathVariable Long id, @RequestBody User updatedUser){
        User existing = userrepo.findById(id).get();
        existing.setName(updatedUser.getName());
        existing.setEmail(updatedUser.getEmail());
        existing.setCompany(updatedUser.getCompany());
        return userrepo.save(existing);
    }

    @DeleteMapping("/{id}")
    public void deleteUser(@PathVariable Long id){
        userrepo.deleteById(id);
    }
}
