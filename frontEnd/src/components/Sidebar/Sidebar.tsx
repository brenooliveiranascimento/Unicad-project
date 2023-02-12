import styles from './styles.module.css';
import { AiFillHome, AiOutlineBars, AiOutlineEdit, AiOutlineEnvironment } from "react-icons/ai";
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import GlobalStateI from '../../interfaces/globalState/GlobalStateI';

export default function Sidebar() {
  const history = useHistory();
  const currPath = history.location.pathname;

  const { deliverys } = useSelector(({ deliverys }: GlobalStateI) => deliverys);

  return (
    <aside className={styles.aside_container}>
      <nav>
        <a
          style={{
            color: currPath === '/' ? '#aaa' : '#fff'
          }}
          href='/'
        >
          <AiOutlineBars /> Home
        </a>
        <a
          style={{
            color: currPath === '/newDelivery' ? '#aaa' : '#fff'
          }}
          href='/newDelivery'
        >
          <AiOutlineEdit /> Registrar
        </a>
        <a
          style={{
            color: currPath.split('/')[1] === 'deliveryDetails' ? '#aaa' : '#fff'
          }}
          href={`/deliveryDetails/${deliverys[0]?.id}`}
        >
          <AiOutlineEnvironment /> Detalhes
        </a>
      </nav>
    </aside>
  )
}
