import { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useParams } from "react-router-dom";
import ResultsContainer from "../../cars/ResultsContainer";
import "../Users.css";

const Profile = () => {
  const { username } = useParams();
  const [carsList, setCarsList] = useState([]);
  const [carsPerPage, setCarsPerPage] = useState(6);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState();
  const [totalElements, setTotalElements] = useState();
  const [user, setUser] = useState({});

  useEffect(() => {
    fetch(
      "http://localhost:8080/users/" +
        username +
        "?page=" +
        (currentPage - 1) +
        "&size=" +
        carsPerPage
    )
      .then((response) => response.json())
      .then((data) => {
        setUser(data);
        fetch("http://localhost:8080/cars/owned/" + username)
          .then((response) => response.json())
          .then((data) => {
            setCarsList(data.items);
            setTotalPages(data.totalPages ? data.totalPages : 0);
            setTotalElements(data.totalItems ? data.totalItems : 0);
          })
          .catch((err) => console.log(err));
      }, []);
  }, []);
  return (
    <Container>
      <Row className="justify-content-center">
        <Col>
          <h2>Profile {username}</h2>
        </Col>
      </Row>
      <hr className="hr-invisible" />
      <Row>
        {carsList.length !== 0 ? (
          carsList.map((c, index) => <ResultsContainer car={c} key={index} />)
        ) : (
          <h3>No cars documented</h3>
        )}
      </Row>
    </Container>
  );
};

export default Profile;
