import React, { useContext, useState } from 'react';
import { motion } from 'framer-motion';
import { FavoritesContext } from '../contexts/FavoritesContext';
import FavoritesModal from './FavoritesModal'; // Importa el componente de modal de favoritos

import logo from '../assets/logo.jpeg';

function Header() {
    const { favorites } = useContext(FavoritesContext);//obtengo la lista de favoritos del contexto FavoritesContext.
    const [isFavoritesOpen, setIsFavoritesOpen] = useState(false);//estado para manejar la apertura y cierre del modal de favoritos.

  /* animacion de rotacion para el logo */
    const [isRotating, setIsRotating] = useState(false);
    
    React.useEffect(() => {

        const rotationInterval = setInterval(() => {
            setIsRotating(true);
            setTimeout(() => {
            setIsRotating(false);
            }, 2000);
        }, 12000);

        return () => clearInterval(rotationInterval);
    }, []);


    return (
        <motion.header
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-black p-4 mb-5 z-50 bg-blue-300"
        >
            <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center">
                <div className="flex flex-col sm:flex-row items-center gap-2 text-center sm:text-left">
                    {/* logo */}
                    <motion.img
                        src={logo}
                        alt="Logo"
                        className="w-[60px] rounded-full"
                        animate={{ rotate: isRotating ? 360 : 0 }}
                        transition={{
                        duration: 2,
                        ease: "linear",
                        repeat: isRotating ? Infinity : 0,
                        }}
                    />
                    {/* Titulo */}
                    <h1 className="text-2xl font-bold mt-2 sm:mt-0 mx-auto">Buscador de Personajes</h1>
                </div>
                {/* Boton */}
                <div className="flex space-x-4">
                    <motion.button
                        onClick={() => setIsFavoritesOpen(true)}//abre el modal de favoritos al hacer click en el boton.
                        className="bg-blue-800 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors duration-300 mt-4 sm:mt-0 cursor-pointer "
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Favoritos ({favorites.length})
                    </motion.button>
                </div>
            </div>
            {isFavoritesOpen && <FavoritesModal onClose={() => setIsFavoritesOpen(false)} />} {/* //modal de favoritos que se abre al hacer click en el boton de favoritos. Le paso onClose para cerrar el modal  */}
        </motion.header>
    );
}

export default Header;
