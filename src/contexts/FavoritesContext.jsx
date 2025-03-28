// eslint-disable-next-line no-unused-vars
import React, { createContext, useState, useEffect } from 'react';
import { toast } from 'react-toastify';

// eslint-disable-next-line react-refresh/only-export-components
export const FavoritesContext = createContext();

// eslint-disable-next-line react/prop-types
export const FavoritesProvider = ({ children }) => {
    const [favorites, setFavorites] = useState(() => {
        return JSON.parse(localStorage.getItem('favorites')) || [];
    });

    useEffect(() => {
        localStorage.setItem('favorites', JSON.stringify(favorites));
    }, [favorites]);

    const addToFavorites = (character) => {
        if (favorites.some((fav) => fav.id === character.id)) {
            toast.info('Este personaje ya está en tus favoritos');
        } else {
            setFavorites((prevFavorites) => [...prevFavorites, character]);
            toast.success('Personaje agregado a favoritos');
        }
    };

    const removeFromFavorites = (id) => {
        setFavorites((prevFavorites) => prevFavorites.filter((favorite) => favorite.id !== id));
    };

    return (
        <FavoritesContext.Provider value={{ favorites, addToFavorites, removeFromFavorites }}>
            {children}
        </FavoritesContext.Provider>
    );
};
