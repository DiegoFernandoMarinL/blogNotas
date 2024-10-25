import React from 'react'
import styles from '../styles/NotasUser.module.css'

const NotasUser = ({ title }) => {
    const colors = ['#FF5733', '#33FF57', '#3357FF', '#F7DC6F', '#8E44AD'];

    function getRandomColorFromList() {
        const randomIndex = Math.floor(Math.random() * colors.length);
        return colors[randomIndex];
    }  

    const randomColor = getRandomColorFromList();

    return (
        <div className={styles.container_note} style={{ backgroundColor: randomColor }}>
            <h3>{title}</h3>
        </div>
    );
}

export default NotasUser;
