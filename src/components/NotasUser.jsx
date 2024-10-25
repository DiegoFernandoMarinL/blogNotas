import React from 'react'
import styles from '../styles/NotasUser.module.css'

const NotasUser = ({ title }) => {
    const colors = ['#FD99FF', '#FF9E9E', '#91F48F', '#FFF599', '#9EFFFF', '#B69CFF'];

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
