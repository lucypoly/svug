import React, { Component } from 'react';
import { PageHeader } from 'react-bootstrap';

class Contacts extends Component {
  render() {
    return (
      <div className="container">
        <PageHeader>
          Контакты
        </PageHeader>
        <p>Всю необходимую информацию можно уточнить по следующим телефонам:</p>
        <p><a href="tel:+380966033377"> (096) 603-33-77 (Киевстар) </a></p>
        <p><a href="tel:+380636033377"> (063) 603-33-77 (Life) </a></p>
        <p>Менеджер Вадим</p>
        <p><a href="mailto:kievreklam@ukr.net">Или напишите нам на почту: kievreklam@ukr.net </a></p>
        <p>Наши сотрудники&nbsp;максимально быстро свяжутся с Вами для уточнения всех деталей!</p>
      </div>
    );
  }
}

export default Contacts;
