import React from 'react'
import styles from './styles.module.css';

export default function Sidebar() {
  return (
    <aside className={styles.aside_container}>
      <nav>
        <a href='/'>
          Home
        </a>
        <a href='/newDelivery'>
          Cadastrar
        </a>
      </nav>
    </aside>
  )
}
