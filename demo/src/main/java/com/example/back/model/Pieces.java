package com.example.back.model;


import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Data
@Document(collection = "pieces")
public class Pieces {

    @Id
    private String id;
    private String name;
    private String model;
    private String utility;
    private String type;
    private String owner;
    private int price;

    public String getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getModel() {
        return model;
    }

    public void setModel(String model) {
        this.model = model;
    }

    public String getUtility() {
        return utility;
    }

    public void setUtility(String utility) {
        this.utility = utility;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public String getOwner() {
        return owner;
    }

    public void setOwner(String owner) {
        this.owner = owner;
    }

    public int getPrice() {
        return price;
    }

    public void setPrice(int price) {
        this.price = price;
    }

    @Override
    public String toString() {
        return "Pieces{" +
                "name='" + name + '\'' +
                ", model='" + model + '\'' +
                ", utility='" + utility + '\'' +
                ", type='" + type + '\'' +
                ", owner='" + owner + '\'' +
                ", price=" + price +
                '}';
    }
}
