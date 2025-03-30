// eslint-disable-next-line no-unused-vars
import React, { createContext, useState, useEffect } from 'react';
import { toast } from 'react-toastify';

// eslint-disable-next-line react-refresh/only-export-components
export const FavoritesContext = createContext();//crea un contexto para manejar los favoritos de los personajes.

// eslint-disable-next-line react/prop-types
export const FavoritesProvider = ({ children }) => {//el provider que envuelve a toda la aplicacion y permite acceder al contexto de favoritos desde cualquier componente hijo.
    const [favorites, setFavorites] = useState(() => {//inicializa el estado de favoritos con los personajes guardados en localStorage (si existen).
        return JSON.parse(localStorage.getItem('favorites')) || [];
    });

    useEffect(() => {//actualiza el localStorage cada vez que cambia el estado de favoritos.
        localStorage.setItem('favorites', JSON.stringify(favorites));
    }, [favorites]);

    const addToFavorites = (character) => {//funcion para agregar un personaje a favoritos.
        if (favorites.some((fav) => fav.id === character.id)) {//verifica si el personaje ya está en favoritos.
            toast.info('Este personaje ya está en tus favoritos');
        } else {
            setFavorites((prevFavorites) => [...prevFavorites, character]);//agrega el personaje a favoritos.
            toast.success('Personaje agregado a favoritos');
        }
    };

    const removeFromFavorites = (id) => {//funcion para eliminar un personaje de favoritos.
        setFavorites((prevFavorites) => prevFavorites.filter((favorite) => favorite.id !== id));//filtra los favoritos y elimina el personaje con el id recibido.
        toast.success('Personaje eliminado de favoritos');  
    };

    return (//proporciona el contexto de favoritos a los componentes hijos.
        <FavoritesContext.Provider value={{ favorites, addToFavorites, removeFromFavorites }}>{/* value es el objeto que contiene los valores que se van a compartir con los componentes hijos. */}
            {children}{/* renderiza los componentes hijos dentro del provider. */}
        </FavoritesContext.Provider>
    );
};
