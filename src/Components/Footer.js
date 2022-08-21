import React from 'react'
import '../Styles/Footer.css';

export default function () {
  return (
    <div className='Footer-Box'>
      <div className='Team'>
      <img src="https://trello.com/1/cards/6302551ed59f6128266eec5d/attachments/6302552bd67650272769f354/previews/6302552bd67650272769f35e/download/xiaomei.png" alt="" />
        <p className='Footer-Text'>Panda Xiao Mei - Cohort 31</p>
      </div>
        <div className='Footer-Icons'>
            <img src="https://trello.com/1/cards/62fea6b3233d9a20086630de/attachments/62fea706630275877cec91a9/previews/62fea706630275877cec982a/download/icons8-instagram-viejo-50.png" alt="Instagram"/>
            <img src="https://trello.com/1/cards/62fea6b3233d9a20086630de/attachments/62fea787e8cb7276d5071950/previews/62fea787e8cb7276d5071955/download/icons8-facebook-rodeado-de-c%C3%ADrculo-50.png" alt="Facebook"/>
            <img src="https://trello.com/1/cards/62fea6b3233d9a20086630de/attachments/62fea7fdeba539055afcbfff/previews/62fea7feeba539055afcc005/download/icons8-whatsapp-50.png" alt="Whatsapp"/>
        </div>
    </div>
  )
}