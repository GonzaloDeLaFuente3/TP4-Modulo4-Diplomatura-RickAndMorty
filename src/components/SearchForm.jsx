// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// eslint-disable-next-line react/prop-types
const SearchForm = ({ onSearch, onViewAll }) => {
    const [query, setQuery] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (query.trim() === '') {
            toast.warn('Por favor ingrese un nombre para buscar');
        } else {
            onSearch(query);
        }
    };

    return (
        
        <form onSubmit={handleSubmit} className="mb-4 flex items-center">
            <div className="relative flex-grow">
                <input
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
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
            onClick={onViewAll}
            className="bg-blue-500 text-white px-4 py-2 rounded ml-2 hover:bg-blue-700 transition-colors duration-300"
            >
                Ver Todos
            </button>
    </form>
    );
};

export default SearchForm;
