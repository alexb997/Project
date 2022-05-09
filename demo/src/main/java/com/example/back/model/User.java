package com.example.back.model;

import lombok.Data;
import org.apache.commons.lang3.StringUtils;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.HashMap;
import java.util.Map;

@Data
@Document(collection = "users")
public class User {

    @Id
    private String id;

    private String username;
    private String password;
    private Map<String,Boolean> favourites;

    public User() {
        this.username = StringUtils.EMPTY;
        this.password = StringUtils.EMPTY;
        this.favourites = new HashMap<>();
    }

    public User(String username, String password) {
        this.username = username;
        this.password = password;
        this.favourites = new HashMap<>();
    }

    public String getId() {
        return id;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public Map<String, Boolean> getFavourites() {
        return favourites;
    }

    public void setFavourites(Map<String, Boolean> favourites) {
        this.favourites = favourites;
    }

    public void updateFavourites(String id) {
        if(this.favourites.containsKey(id)){
            this.favourites.remove(id);
        }else{
            this.favourites.put(id,true);
        }
    }

    public void updateWith(User user) {
        this.username = user.getUsername();
        this.password = user.getPassword();
        this.favourites= user.getFavourites();
        this.id = user.getId();
    }

    @Override
    public String toString() {
        return "User{" +
                "id='" + id + '\'' +
                ", username='" + username + '\'' +
                ", password='" + password + '\'' +
                ", favourites=" + favourites +
                '}';
    }
}
