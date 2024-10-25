import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import styles from '../styles/Home.module.css'
import iconsearch from '../storage/img/iconsearch.svg'
import iconi from '../storage/img/iconi.svg'
import iconAgregate from '../storage/img/iconAgregate.svg'
import NotasUser from './NotasUser';

const Home = () => {
  const [notas, setnotas] = useState([]);

  useEffect(() => {
      // Creamos una función asíncrona dentro de useEffect
      const fetchNotas = async () => {
          try {
              const response = await fetch('https://localhost:3443/notes'); // Llama a tu backend
              const data = await response.json(); 
              setnotas(data); // Guarda los datos en el estado             
            } catch (error) {
              console.error('Error al obtener los datos de las notas:', error);
            }
          };
          fetchNotas(); // Ejecutamos la función
    }, []); 

  return (
    <main>
        <section className={styles.section__header}>
            <h1>Notes</h1>
            <div className={styles.container__icons}>
              <img src={iconsearch}></img>
              <img src={iconi}></img>
            </div>
        </section>
        <section className={styles.section__notes}>
          {notas.map((nota) => (
              <NotasUser
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
  )
}

export default Home