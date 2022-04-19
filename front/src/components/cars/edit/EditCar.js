import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../Cars.css";

const EditCar = () => {
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [car, setCar] = useState({});
  const [model, setModel] = useState("");
  const [brand, setBrand] = useState("");
  const [color, setColor] = useState("");
  const [body, setBody] = useState("");
  const [combustible, setCombustible] = useState("");
  const [price, setPrice] = useState(0);
  const [cargoVolume, setCargoVolume] = useState(0);
  const [numberDoors, setNumberDoors] = useState(0);

  useEffect(() => {
    fetch("http://localhost:8080/cars/" + id)
      .then((response) => response.json())
      .then((data) => {
        setCar(data);
        setIsLoading(false);
        setModel(car.model);
        setBrand(car.brand);
        setColor(car.color);
        setBody(car.body);
        setCombustible(car.combustible);
        setPrice(car.price);
        setCargoVolume(car.cargoVolume);
        setNumberDoors(car.numberDoors);
      })
      .catch((err) => console.log(err));
  }, [isLoading]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const requestOptions = {
      method: "PUT",
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
        price: price,
      }),
    };
    fetch("http://localhost:8080/cars/edit/" + id, requestOptions)
      .then((response) => response.json())
      .then((data) => setCar(data));
  };

  return (
    <div>
      <h3>Edit car by id: {car.id}</h3>
      {isLoading && <p>Loading...</p>}
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
          Price:
          <input
            type="number"
            name="price"
            placeholder={car.price}
            onChange={(e) => setPrice(e.target.value)}
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

export default EditCar;
