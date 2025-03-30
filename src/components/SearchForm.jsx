// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// eslint-disable-next-line react/prop-types
const SearchForm = ({ onSearch, onViewAll }) => {//recibe dos props: onSearch y onViewAll. onSearch es la funcion que se ejecuta al enviar el formulario y onViewAll es la funcion que se ejecuta al hacer click en el boton "Ver Todos".
    const [query, setQuery] = useState('');// para manejar el valor del input de busqueda.

    const handleSubmit = (e) => {
        e.preventDefault();//previene el comportamiento por defecto del formulario (que es recargar la pagina al enviar el formulario).
        if (query.trim() === '') {//verifica si el input esta vacio o solo tiene espacios en blanco.
            toast.warn('Por favor ingrese un nombre para buscar');
        } else {
            onSearch(query);//llama a la funcion onSearch (que es la que busca los personajes) y le pasa el valor del input como argumento.
        }
    };

    return (
        // formulario de busqueda
        <form onSubmit={handleSubmit} className="mb-4 flex items-center">
            <div className="relative flex-grow">
                <input
                    type="text"
                    value={query} //valor del input es el estado query.
                    onChange={(e) => setQuery(e.target.value)}//actualiza el estado del input al cambiar su valor.
                    placeholder="Buscar Personaje Por Nombre..."
                    className="border p-2 rounded-l w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button
                    type="submit"
                    className="absolute right-0 top-0 h-full bg-blue-500 text-white px-4 rounded-r hover:bg-blue-600 transition-colors duration-300 flex items-center"
                >
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                    </svg>
                </button>
            </div>
            <button
            type="button"
            onClick={onViewAll}//llama a la funcion onViewAll (que es la que carga todos los personajes) al hacer click en el boton "Ver Todos".
            className="bg-blue-500 text-white px-4 py-2 rounded ml-2 hover:bg-blue-700 transition-colors duration-300"
            >
                Ver Todos
            </button>
    </form>
    );
};

export default SearchForm;
