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
    private String combustible;
    private String owner;
    private int price;
    private int numberDoors;
    private int cargoVolume;

    public Car(){}

    public Car(String brand, String color, String model, String body, String owner, int price, int numberDoors, String combustible, int cargoVolume) {
        this.brand = brand;
        this.color = color;
        this.model = model;
        this.body = body;
        this.price = price;
        this.numberDoors = numberDoors;
        this.combustible = combustible;
        this.cargoVolume = cargoVolume;
        this.owner= owner;
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

    public int getNumberDoors() {
        return numberDoors;
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

    public Car updateWith(Car car) {
        Car updated = new Car(
                car.brand,
                car.color,
                car.model,
                car.body,
                car.owner,
                car.price,
                car.numberDoors,
                car.combustible,
                car.cargoVolume
        );
        updated.setId(car.id);
        return updated;
    }

    @Override
    public String toString() {
        return "Car{" +
                "brand='" + brand + '\'' +
                ", color='" + color + '\'' +
                ", model='" + model + '\'' +
                ", body='" + body + '\'' +
                ", combustible='" + combustible + '\'' +
                ", owner='" + owner + '\'' +
                ", price=" + price +
                ", numberDoors=" + numberDoors +
                ", cargoVolume=" + cargoVolume +
                '}';
    }
}
