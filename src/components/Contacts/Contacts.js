import React, { Component } from 'react';
import { PageHeader, Grid, Row, Col } from 'react-bootstrap';
import Map from './../Map/Map';

class Contacts extends Component {
  render() {
    return (
      <div className="container">
        <PageHeader>
          Контакты
        </PageHeader>
        <Grid>
          <Row className="show-grid">
            <Col xs={12} md={6}>
              <p>Наш адрес: Киев, Бульварно-Кудрявская 8б, офис 2</p>
              <p>Всю необходимую информацию можно уточнить по следующим телефонам:</p>
              <p><a href="tel:+380966033377"> (096) 603-33-77 (Киевстар) </a></p>
              <p><a href="tel:+380636033377"> (063) 603-33-77 (Life) </a></p>
              <p>Менеджер Вадим</p>
              <p><a href="mailto:kievreklam@ukr.net">Или напишите нам на почту: kievreklam@ukr.net </a></p>
              <address></address>
              <p>Наши сотрудники&nbsp;максимально быстро свяжутся с Вами для уточнения всех деталей!</p>
            </Col>
            <Col xs={12} md={6}>
              <Map googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
                   loadingElement={<div style={{height: `100%`}}/>}
                   containerElement={<div style={{height: `300px`}}/>}
                   mapElement={<div style={{height: `100%`}}/>}/>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default Contacts;
