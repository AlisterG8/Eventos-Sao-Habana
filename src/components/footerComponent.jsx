import React from 'react'
import facebook from '../assets/ico/icons8-facebook-150.png'
import instagram from '../assets/ico/icons8-instagram-192.png'
import whatsapp from '../assets/ico/whatsapp.png'

function FooterView() {
    return(
        <footer>
        <div className="footer-container">
            <div className="footer-links">
              <h3>Redes sociales:</h3>
              <ul className="social-icons">
                <li>
                    <a href="https://www.facebook.com/profile.php?id=100066469402976">
                        <img src={facebook} alt="Facebook" class="iconFacebook"/>
                    </a>
                </li>
                <li>
                    <a href="https://www.instagram.com/eventos_sao?igsh=NTc4MTIwNjQ2YQ==">
                        <img src={instagram} alt="Instagram" class="iconInstagram"/>
                    </a>
                </li>
                <li>
                    <a href="https://wa.me/5354754297">
                        <img src={whatsapp} alt="Whatsapp" class="iconWhatsapp"/>
                    </a>
                </li>
              </ul>
            </div>

            <div className="footer-info">
              <h3 className='infoTitle'>Información de contacto:</h3>
              <ul className="info-list">
                <li>
                    <p>Dirección:Calle 71 #5234 /52a y 54, Altura de Loteria, Cotorro, Habana, Cuba</p>
                </li>
                <li>
                    <p>Teléfono: +53 54754297</p>
                </li>
                <li>
                    <p>Correo electrónico: jorgesao@gmail.com</p>
                </li>
              </ul>
            </div>
            
          
        </div>
      </footer>




    );

}
export default FooterView;