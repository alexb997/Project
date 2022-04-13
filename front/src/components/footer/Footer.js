import { Col, Container, Row } from "react-bootstrap";

import "./Footer.css";

function Footer() {
  return (
    <div className="footer">
      <Container>
        <Row className="justify-content-center">
          <Col>
            <strong>
              <Row>Ne gasesti pe</Row>
            </strong>
            <Row>Facebook</Row>
            <Row>YouTube</Row>
          </Col>
          <Col>
            <strong>
              <Row>SECTIUNI AUTOVIT.RO</Row>
            </strong>
            <Row>Autoturisme</Row>
            <Row>Agro</Row>
            <Row>Autoutilitare</Row>
            <Row>Camioane</Row>
            <Row>Constructii</Row>
            <Row>Motociclete</Row>
            <Row>Piese</Row>
            <Row>Remorci</Row>
          </Col>
          <Col>
            <strong>
              <Row>AUTOVIT</Row>
            </strong>
            <Row>Blog</Row>
            <Row>Ajutor</Row>
            <Row>Trimite mesaj</Row>
            <Row>Publicitate</Row>
            <Row>Politica de confidentialitate</Row>
            <Row>Politica de cookies</Row>
            <Row>Setari Cookies</Row>
            <Row>Regulament persoane fizice</Row>
            <Row>Regulament profesionisti</Row>
          </Col>
          <Col>
            <strong>
              <Row>INFORMATII UTILE</Row>
            </strong>
            <Row>Lista de preturi persone fizice</Row>
            <Row>Lista de preturi profesionisti</Row>
            <Row>Harta site</Row>
            <Row>Harta judetelor</Row>
            <Row>Contract vanzare cumparare</Row>
          </Col>
        </Row>
        <hr className="hr-invisible" />
        <Row className="justify-content-center">
          <Col sm={3}>
            <strong>
              <Row>Cariere in OLX/Autovit</Row>
            </strong>
            <Row>Vino sa lucrezi cu noi!</Row>
            <Row>Cautati oferte de munca</Row>
          </Col>
          <Col sm={3}>
            <strong>
              <Row>Customer support</Row>
            </strong>
            <Row>(031) 860 90 90</Row>
            <Row>(de Luni pana Vineri intre 09:00 - 18:00)</Row>
          </Col>
        </Row>
      </Container>
      <hr />
      <Container>
        <Row className="justify-content-center">
          Incearca acum aplicatia Autovit.ro
        </Row>
        <Row className="justify-content-center">
          <Col md={2}>Google Play Store</Col>
          <Col md={2}>App Store</Col>
        </Row>
      </Container>
    </div>
  );
}

export default Footer;
