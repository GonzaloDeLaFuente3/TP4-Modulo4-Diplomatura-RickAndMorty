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
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchCharacters = async (query) => {
    setLoading(true);
    try {
      const response = await axios.get(`https://rickandmortyapi.com/api/character/?name=${query}`);
      setCharacters(response.data.results);
      toast.success('!Personajes cargados exitosamente!');
    // eslint-disable-next-line no-unused-vars
    } catch (error) {
      toast.error('El nombre buscado no coincide con la busqueda');
    } finally {
      setLoading(false);
    }
  };

  const viewAllCharacters = async () => {
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
    <FavoritesProvider>
      <Header /> {/* Usa el Header aquí */}
      <div className="container mx-auto p-4 bg-gradient-to-r from-blue-400 via-green-400 to-blue-400 animate-gradient-x mb-10 rounded-2xl">
        <h1 className="text-3xl font-bold mb-4 text-center text-black">Rick And Morty</h1>
        <h2 className="text-3xl font-bold mb-4 text-center text-black">Buscar Personaje</h2>
        <SearchForm onSearch={fetchCharacters} onViewAll={viewAllCharacters}/>
        {loading ? (
          <Loader />
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {characters.map((character) => (
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
