// eslint-disable-next-line no-unused-vars
import React from 'react';

const Loader = () => {
    return (
        <div className="flex flex-col justify-center items-center h-full">
            <div className="loader mb-4">
                <div className="spinner"></div>
            </div>
            <p className="text-black text-lg font-bold">Cargando, por favor espere...</p>
        </div>
    );
  };

export default Loader;
