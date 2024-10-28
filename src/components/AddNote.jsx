import React from 'react'
import styles from '../styles/AddNote.module.css'

const AddNote = () => {
  return (
    <div class="noteOpenDiv">
      <div class="noteOpenDivSection">
        <input v-model="selectedNote.titulo" class="noteTitleInput" placeholder="Titulo..." />
      </div>
      <div class="noteOpenDivSection">
        <textarea v-model="selectedNote.contenido" class="noteContentInput" placeholder="Contenido..."></textarea>
      </div>
    </div>
  )
}

export default AddNote
