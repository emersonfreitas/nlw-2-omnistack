import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

function TeacherItem() {
  return (
    <article className="teacher-item">
      <header>
        <img src="https://pbs.twimg.com/profile_images/1236049480367169543/ISGkKiHL_400x400.jpg" alt="Emerson Freitas" />
        <div>
          <strong>Emerson Freitas</strong>
          <span>Inglês</span>
        </div>
      </header>

      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing.

        <br /> <br />

        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil suscipit officia quas reprehenderit nisi dolorem laudantium, excepturi corrupti nam natus dolorum accusantium velit. Ducimus voluptatum, vero similique provident voluptas officiis.
      </p>

      <footer>
        <p>
          Preço/hora
          <strong>R$30,00</strong>
        </p>
        <button type="button">
          <img src={whatsappIcon} alt="Whatsapp" />
          Entrar em contato
        </button>
      </footer>
    </article>
  );
}

export default TeacherItem;
