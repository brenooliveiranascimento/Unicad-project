import styles from './styles.module.css';

export default function NewDelivery() {
  return (
    <main className={styles.new_delivery_container} >
      <form>
        <h2>Cadastrar entrega</h2>
        <input
          placeholder='Cliente'
        />
        <input
          placeholder="Saida"
        />
        <input
          placeholder="Destino"
        />
      </form>
    </main>
  )
}
