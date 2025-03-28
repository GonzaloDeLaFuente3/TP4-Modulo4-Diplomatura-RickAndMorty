// eslint-disable-next-line no-unused-vars
import React from 'react';

// eslint-disable-next-line react/prop-types
const SocialIcon = ({ icon, link }) => {
    
    //verifico si es un correo o un link 
    // eslint-disable-next-line react/prop-types
    const isEmail = link.startsWith('mailto:') || /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(link);
    //condicional para mandar correo sino paso el link como viene
    const href = isEmail ? `mailto:${link}` : link;

    return (
        <a href={href} className="text-green-900 hover:text-blue-900 mx-2" target="_blank">
        <i className={`bi ${icon}`}></i>
        </a>
    );
};

export default SocialIcon;