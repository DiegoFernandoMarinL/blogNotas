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
            <div className={styles.container__icons}>
              <img src={iconsearch}></img>
              <img src={iconi}></img>
            </div>
        </section>
        <section className={styles.section__notes}>
          <div className={styles.container_note}>
            <h3>title note</h3>
          </div>
          <div className={styles.container_note}>
            <h3>title note</h3>
          </div>
          <div className={styles.container_note}>
            <h3>title note</h3>
          </div>
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