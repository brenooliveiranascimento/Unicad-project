import React from 'react'
import styles from './styles.module.css';

export default function Sidebar() {
  return (
    <aside className={styles.aside_container}>
      <a href='/'>
        Home
      </a>
      <a href='/newDelivery'>
        Cadastrar
      </a>
    </aside>
  )
}
