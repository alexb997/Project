import { Col, Container, Row } from "react-bootstrap";

import "./Footer.css";

function Footer() {
  return (
    <div className="footer">
      <Container>
        <Row className="justify-content-center">
          <Col>
            <b>
              <Row className="mb-2">Ne gasesti pe</Row>
            </b>
            <Row className="smallFont mb-2">Facebook</Row>
            <Row className="smallFont mb-2">YouTube</Row>
          </Col>
          <Col>
            <b>
              <Row className="mb-2">SECTIUNI AUTOVIT.RO</Row>
            </b>
            <Row className="smallFont mb-2">Autoturisme</Row>
            <Row className="smallFont mb-2">Agro</Row>
            <Row className="smallFont mb-2">Autoutilitare</Row>
            <Row className="smallFont mb-2">Camioane</Row>
            <Row className="smallFont mb-2">Constructii</Row>
            <Row className="smallFont mb-2">Motociclete</Row>
            <Row className="smallFont mb-2">Piese</Row>
            <Row className="smallFont mb-2">Remorci</Row>
          </Col>
          <Col>
            <b>
              <Row className="mb-2">AUTOVIT</Row>
            </b>
            <Row className="smallFont mb-2">Blog</Row>
            <Row className="smallFont mb-2">Ajutor</Row>
            <Row className="smallFont mb-2">Trimite mesaj</Row>
            <Row className="smallFont mb-2">Publicitate</Row>
            <Row className="smallFont mb-2">Politica de confidentialitate</Row>
            <Row className="smallFont mb-2">Politica de cookies</Row>
            <Row className="smallFont mb-2">Setari Cookies</Row>
            <Row className="smallFont mb-2">Regulament persoane fizice</Row>
            <Row className="smallFont mb-2">Regulament profesionisti</Row>
          </Col>
          <Col>
            <b>
              <Row className="mb-2">INFORMATII UTILE</Row>
            </b>
            <Row className="smallFont mb-2">
              Lista de preturi persone fizice
            </Row>
            <Row className="smallFont mb-2">Lista de preturi profesionisti</Row>
            <Row className="smallFont mb-2">Harta site</Row>
            <Row className="smallFont mb-2">Harta judetelor</Row>
            <Row className="smallFont mb-2">Contract vanzare cumparare</Row>
          </Col>
        </Row>
        <hr className="hr-invisible" />
        <Row className="justify-content-center">
          <Col sm={3}>
            <b>
              <Row className="mb-2">Cariere in OLX/Autovit</Row>
            </b>
            <Row className="smallFont mb-2">Vino sa lucrezi cu noi!</Row>
            <Row className="smallFont mb-2">Cautati oferte de munca</Row>
          </Col>
          <Col sm={3}>
            <strong>
              <Row className="mb-2">Customer support</Row>
            </strong>
            <b>
              <Row className="smallFont">(031) 860 90 90</Row>
              <Row className="smallFont">
                (de Luni pana Vineri intre 09:00 - 18:00)
              </Row>
            </b>
          </Col>
        </Row>
      </Container>
      <hr />
      <Container>
        <Row className="justify-content-center mb-2">
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
