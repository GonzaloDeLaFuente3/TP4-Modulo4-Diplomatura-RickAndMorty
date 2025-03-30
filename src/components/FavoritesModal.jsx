// eslint-disable-next-line no-unused-vars
import React, { useContext } from 'react';
import { FavoritesContext } from '../contexts/FavoritesContext';

// eslint-disable-next-line react/prop-types
const FavoritesModal = ({ onClose }) => {//recibe una prop onClose que es una funcion para cerrar el modal.
    const { favorites, removeFromFavorites } = useContext(FavoritesContext);//tengo la lista de personajes favortios y la funcion removeFromFavorites que se encarga de eliminar personajes de la lista de favoritos.

    return (
        <div className="fixed inset-0 bg-gray-900/75 flex justify-center items-center z-50">
            <div className="bg-blue-200 p-8 rounded-lg shadow-2xl w-11/12 max-w-md relative max-h-[80vh] overflow-y-auto">
                <button
                onClick={onClose}//cierra el modal al hacer click en el boton.
                className="absolute top-4 right-4 text-red-500 hover:text-black transition-colors duration-300 cursor-pointer"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                        />
                    </svg>
                </button>
                <h2 className="text-3xl font-bold text-black mb-6 text-center">Favoritos</h2>

                <ul className="space-y-4">

                    {favorites.map((favorite) => (//mapeo la lista de favoritos y por cada favorito muestro su nombre, especie y una imagen.)
                        <li
                        key={favorite.id}
                        className="flex justify-between items-center bg-amber-50 p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 hover:bg-amber-100 hover:scale-105"
                        >
                            <div className="flex flex-col items-center sm:flex-row sm:items-start sm:justify-between space-y-2 sm:space-y-0 sm:space-x-4">
                                {/* imagen */}
                                <img
                                src={favorite.image}
                                alt={favorite.name}
                                className="w-12 h-12 object-cover rounded-lg mb-2 sm:mb-0"
                                />
                                {/* nombre y especie */}
                                <div className="text-center sm:text-left space-y-1">
                                    <span className="text-lg text-black block">{favorite.name}</span>
                                    <span className="text-lg text-gray-600 block">{favorite.species}</span>
                                </div>
                            </div>
                            
                            <button
                                onClick={() => removeFromFavorites(favorite.id)}//elimina el personaje de la lista de favoritos al hacer click en el boton.
                                className="text-red-500 hover:text-red-900"
                            >
                                <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                                />
                                </svg>
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default FavoritesModal;
