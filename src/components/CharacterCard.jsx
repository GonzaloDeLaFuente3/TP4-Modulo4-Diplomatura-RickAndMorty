/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React, { useContext } from 'react';
import { FavoritesContext } from '../contexts/FavoritesContext';


const CharacterCard = ({ character }) => {//recibe un objeto character como prop, que contiene la información del personaje a mostrar.

    const { addToFavorites } = useContext(FavoritesContext);//obtengo la función addToFavorites del contexto FavoritesContext, que se encarga de agregar personajes a la lista de favoritos.
    return (
    
        <div className="bg-green-100 p-4 rounded-lg shadow-md text-center overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:bg-green-300  flex flex-col h-full">  
            <img src={character.image} alt={character.name} className="w-full h-48 object-cover rounded-t-lg" />
            <h3 className="text-xl font-bold mt-2">{character.name}</h3>
            <p className="text-gray-600">{character.species}</p>
            <p className="text-gray-600">{character.location.name}</p>
            {/* boton para agregar a favoritos */}
            <button onClick={() => addToFavorites(character)} className="w-full bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-all duration-300 transform hover:scale-105 active:scale-95 mt-2 cursor-pointer">
                Agregar a Favoritos
            </button>
        </div>
  );
};

export default CharacterCard;
