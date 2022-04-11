import { useEffect, useState } from "react";
import "../Cars.css";

const AddCar = () => {
  const [car, setCar] = useState({});
  const [model, setModel] = useState("");
  const [brand, setBrand] = useState("");
  const [color, setColor] = useState("");
  const [body, setBody] = useState("");
  const [combustible, setCombustible] = useState("");
  const [cargoVolume, setCargoVolume] = useState(0);
  const [numberDoors, setNumberDoors] = useState(0);

  useEffect(() => {
    setCar({
      model: model,
      brand: brand,
      color: color,
      body: body,
      combustible: combustible,
      cargoVolume: cargoVolume,
      numberDoors: numberDoors,
    });
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: model,
        brand: brand,
        color: color,
        body: body,
        combustible: combustible,
        cargoVolume: cargoVolume,
        numberDoors: numberDoors,
      }),
    };
    fetch("http://localhost:8080/cars/add/", requestOptions)
      .then((response) => response.json())
      .then((data) => setCar(data));
  };

  return (
    <div>
      <h3>Input form</h3>
      <form
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <label>
          Model:
          <input
            type="text"
            name="model"
            placeholder={car.model}
            onChange={(e) => setModel(e.target.value)}
          />
        </label>
        <label>
          Color:
          <input
            type="text"
            name="color"
            placeholder={car.color}
            onChange={(e) => setColor(e.target.value)}
          />
        </label>
        <label>
          Brand:
          <input
            type="text"
            name="brand"
            placeholder={car.brand}
            onChange={(e) => setBrand(e.target.value)}
          />
        </label>
        <label>
          Body:
          <input
            type="text"
            name="body"
            placeholder={car.body}
            onChange={(e) => setBody(e.target.value)}
          />
        </label>
        <label>
          Combustible:
          <input
            type="text"
            name="combustible"
            placeholder={car.combustible}
            onChange={(e) => setCombustible(e.target.value)}
          />
        </label>
        <label>
          Doors:
          <input
            type="number"
            name="numberDoors"
            placeholder={car.numberDoors}
            onChange={(e) => setNumberDoors(e.target.value)}
          />
        </label>

        <label>
          Volume:
          <input
            type="number"
            name="cargoVolume"
            placeholder={car.cargoVolume}
            onChange={(e) => setCargoVolume(e.target.value)}
          />
        </label>
        <hr className="hr-invisible" />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default AddCar;
