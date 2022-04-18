package com.example.back.model;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Data
@Document(collection = "cars")
public class Car {

    @Id
    private String id;
    private String brand;
    private String color;
    private String model;
    private String body;
    private int price;
    private int numberDoors;
    private String combustible;
    private int cargoVolume;

    public Car(){}

    public Car(String brand, String color, String model, String body, int price, int numberDoors, String combustible, int cargoVolume) {
        this.brand = brand;
        this.color = color;
        this.model = model;
        this.body = body;
        this.price = price;
        this.numberDoors = numberDoors;
        this.combustible = combustible;
        this.cargoVolume = cargoVolume;
    }

    public String getId() {
        return id;
    }

    public String getBrand() {
        return brand;
    }

    public void setBrand(String brand) {
        this.brand = brand;
    }

    public String getColor() {
        return color;
    }

    public void setColor(String color) {
        this.color = color;
    }

    public String getModel() {
        return model;
    }

    public void setModel(String model) {
        this.model = model;
    }

    public String getBody() {
        return body;
    }

    public void setBody(String body) {
        this.body = body;
    }

    public int getNumberDoors() {
        return numberDoors;
    }

    public int getPrice() {
        return price;
    }

    public void setPrice(int price) {
        this.price = price;
    }

    public void setNumberDoors(int numberDoors) {
        this.numberDoors = numberDoors;
    }

    public String getCombustible() {
        return combustible;
    }

    public void setCombustible(String combustible) {
        this.combustible = combustible;
    }

    public int getCargoVolume() {
        return cargoVolume;
    }

    public void setCargoVolume(int cargoVolume) {
        this.cargoVolume = cargoVolume;
    }

    @Override
    public String toString() {
        return "Car{" +
                "brand='" + brand + '\'' +
                ", color='" + color + '\'' +
                ", model='" + model + '\'' +
                ", body='" + body + '\'' +
                ", price=" + price +
                ", numberDoors=" + numberDoors +
                ", combustible='" + combustible + '\'' +
                ", cargoVolume=" + cargoVolume +
                '}';
    }
}
