// eslint-disable-next-line no-unused-vars
import React, { useContext } from 'react';
import SocialIcon from './SocialIcon';


function Footer() {

  const socialLinks = [
    { id: 1, icon: 'bi-instagram', link: 'https://www.instagram.com/gonzalo_de_la_fuente_/' },
    { id: 2, icon: 'bi-github', link: 'https://github.com/GonzaloDeLaFuente3' },
    { id: 3, icon: 'bi-linkedin', link: 'https://www.linkedin.com/in/gonzalo-de-la-fuente-257745253/' },
    { id: 4, icon: 'bi-envelope-at-fill', link: 'gonchi3.gdlf@gmail.com' },
    
  ];

  return (
    
    <footer className=" text-black p-4  z-50 bg-blue-300">
      <div className="container mx-auto text-center">

        <p>Alumno: De La Fuente Gonzalo</p>

        <p>Desarrollo Front End con React</p>

        <p>© 2025 Tienda de Productos. Todos los derechos reservados.</p>

        <div className="mt-2">
          {/* recorro y mando a SocialIcon para mostar en el footer */}
          {socialLinks.map((social) => (
            <SocialIcon key={social.id} icon={social.icon} link={social.link} />
          ))}
        </div>

      </div>
    </footer>
  )
}

export default Footer