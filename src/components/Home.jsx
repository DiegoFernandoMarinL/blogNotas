import React from 'react'
import { Link } from 'react-router-dom'
import styles from '../styles/Home.module.css'
import iconsearch from '../storage/img/iconsearch.svg'
import iconi from '../storage/img/iconi.svg'
import iconAgregate from '../storage/img/iconAgregate.svg'

const Home = () => {
  return (
    <main>
        <section className={styles.section__header}>
            <h1>Notes</h1>
            <div>
              <img src={iconsearch}></img>
              <img src={iconi}></img>
            </div>
        </section>
        <section className={styles.section__notes}>
          <div>
            <h2>title note</h2>
          </div>
        </section>
        <section>
          <div>
            <img src={iconAgregate}></img>
          </div>
        </section>  
        <section className={styles.section__buttonAgregate}>
            <Link className={styles.link}to="/LogIn">Sign In</Link>
        </section>
    </main>
  )
}

export default Home