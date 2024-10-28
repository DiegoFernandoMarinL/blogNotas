import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/Home.module.css';
import iconsearch from '../storage/img/iconsearch.svg';
import iconi from '../storage/img/iconi.svg';
import iconAgregate from '../storage/img/iconAgregate.svg';
import NotasUser from './NotasUser';

const Home = () => {
  const [notas, setnotas] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const fetchNotas = async () => {
      try {
        const response = await fetch('https://localhost:3443/notes');
        const data = await response.json(); 
        setnotas(data);             
      } catch (error) {
        console.error('Error al obtener los datos de las notas:', error);
      }
    };
    fetchNotas();
  }, []); 

  // useEffect para realizar la consulta en tiempo real
  useEffect(() => {
    if (searchQuery !== '') {
      const fetchFilteredNotas = async () => {
        try {
          // Envía la consulta por parámetros
          const response = await fetch(`https://localhost:3443/notes/search/${searchQuery}`);
          const data = await response.json();
          console.log(data)
          setnotas(data); // Actualiza las notas según la búsqueda
        } catch (error) {
          console.error('Error al obtener los datos de la búsqueda:', error);
        }
      };
      fetchFilteredNotas();
    }
  }, [searchQuery]); // Ejecuta este efecto cada vez que searchQuery cambie

  const handleSearchClick = () => {
    setIsSearching(!isSearching);
  };

  const handleInputChange = (e) => {
    setSearchQuery(e.target.value); // Actualiza el valor de búsqueda
  };

  return (
    <main>
      <section className={styles.section__header}>
        {isSearching ? (
          <input 
            type="text" 
            value={searchQuery} 
            onChange={handleInputChange} 
            placeholder="Buscar notas..." 
            className={styles.searchInput}
          />
        ) : (
          <h1>Notes</h1>
        )}
        <div className={styles.container__icons}>
          <img src={iconsearch} onClick={handleSearchClick} alt="Buscar" />
          <img src={iconi} alt="Info" />
        </div>
      </section>
      <section className={styles.section__notes}>
        {notas.map((nota) => (
          <NotasUser
            key={nota.id}
            title={nota.title}
          />
        ))}
      </section> 
      <section className={styles.section__buttonAgregate}>
        <div>
          <Link className={styles.link} to="/LogIn">
            <img src={iconAgregate} alt="icon" />
          </Link>
        </div>
      </section>
    </main>
  );
};

export default Home;
