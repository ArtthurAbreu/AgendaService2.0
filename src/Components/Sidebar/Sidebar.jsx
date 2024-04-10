import styles from './sidebar.module.scss';
import Image from 'next/image';
import {
  MdOutlineDashboardCustomize,
  MdOutlineHomeRepairService ,
  MdOutlinePeopleAlt,
  MdSchedule,
  MdBuild,
} from 'react-icons/md';
import Link from 'next/link';
import {useRouter} from 'next/router';

const links = [
  { name: 'painel', icon: <MdOutlineDashboardCustomize />, url: '/' },
  { name: 'Serviços', icon: <MdOutlineHomeRepairService />, url: '/Servicos' },
  { name: 'Clientes', icon: <MdOutlinePeopleAlt/>, url: '/Clientes' },
  { name: 'Agendamentos', icon: <MdSchedule/>, url: '/Agendamentos' },
  { name: 'Mecânicos', icon: <MdBuild/>, url: '/Mecanicos' },
]

const Sidebar = () => {
  const router = useRouter();
  let{route} = router;
  if(route === '/Clientes/AddClientes')route = '/Clientes';
  if(route === '/Clientes/List_Clientes')route = '/Clientes';
  if(route === '/Clientes/Upd_Clientes')route = '/Clientes';
  if(route === '/Servicos/Add_Servicos')route = '/Servicos';
  if(route === '/Servicos/List_Servicos')route = '/Servicos';
  if(route === '/Agendamentos/AddAgendamentos')route = '/Agendamentos';
  if(route === '/Agendamentos/List_Agendamentos')route = '/Agendamentos';
  if(route === '/Mecanicos/AddMecanico')route = '/Mecanicos';
  if(route === '/Mecanicos/List_Mecanico')route = '/Mecanicos';
 
  
  const renderLinks = links.map((link, i) => (
    <li key={i}>
        <Link href={link.url} className = {route === link.url ? styles.active: ''}>
        <div>{link.icon}</div>
        <span>{link.name}</span>
      </Link>
    </li>
  ));

  return(
    <section className={styles.Sidebar}>
      
      <nav className={styles.navigation}>
        <ul>{renderLinks}</ul>
      </nav>
    </section>
  

  )
}
export default Sidebar;