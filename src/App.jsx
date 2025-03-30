// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SearchForm from './components/SearchForm';
import CharacterCard from './components/CharacterCard';
import Loader from './components/Loader';
import Header from './components/Header'; // Importa el Header
import Footer from './components/Footer'; 
import { FavoritesProvider } from './contexts/FavoritesContext';

const App = () => {
  const [characters, setCharacters] = useState([]); //para guardar la lista de personajes 
  const [loading, setLoading] = useState(false);// para indicar si se está cargando la información

  const fetchCharacters = async (query) => {//funcion para buscar personajes
    setLoading(true);//para mostrar el Loader mientras se obtiene la información.
    try {
      const response = await axios.get(`https://rickandmortyapi.com/api/character/?name=${query}`);//query es el nombre del personaje que se busca
      setCharacters(response.data.results);// actualizo el estado con los personajes obtenidos
      toast.success('!Personajes cargados exitosamente!');
    // eslint-disable-next-line no-unused-vars
    } catch (error) {
      toast.error('El nombre buscado no coincide con la busqueda');
    } finally {
      setLoading(false);//Finaliza desactivando loading para mostrar los resultados.
    }
  };

  const viewAllCharacters = async () => {//funcion para cargar todos los personajes
    setLoading(true);
    try {
      const response = await axios.get('https://rickandmortyapi.com/api/character/');
      setCharacters(response.data.results);
      toast.success('¡Todos los personajes se cargaron exitosamente!');
      // eslint-disable-next-line no-unused-vars
    } catch (error) {
      toast.error('Error al cargar todos los personajes');
    } finally {
      setLoading(false);
    }
  };

  return (
    <FavoritesProvider>{/* contexto de favoritos */}
      <Header /> 

      <div className="container mx-auto p-4 bg-gradient-to-r from-blue-400 via-green-400 to-blue-400 animate-gradient-x mb-10 rounded-2xl">
        <h1 className="text-3xl font-bold mb-4 text-center text-black">Rick And Morty</h1>
        <h2 className="text-3xl font-bold mb-4 text-center text-black">Buscar Personaje</h2>

        {/* Formulario de busqueda */}
        <SearchForm onSearch={fetchCharacters} onViewAll={viewAllCharacters}/> {/*fetchCharacters y viewAllCharacters como props para ejecutar la búsqueda. */}
        {loading ? ( //si loading es true, muestra el Loader: que es una animacion de carga 
          <Loader />
        ) : (//si es false, muestra los personajes
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {characters.map((character) => ( //recorro el array de personajes y por cada uno de ellos, renderizo el componente CharacterCard
              <CharacterCard key={character.id} character={character} />
            ))}
          </div>
        )}
        <ToastContainer />
      </div>

      <Footer/>
    </FavoritesProvider>
  );
};

export default App;
