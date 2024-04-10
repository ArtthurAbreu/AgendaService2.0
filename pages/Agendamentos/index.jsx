import Heading from "src/UI/Heading/Heading";
import Link from "next/link"
const Agendamentos = () =>{
  return(
    <section>
      <Heading title='Agendamento'/>
      <Link href='/Agendamentos/List_Agendamentos' className='btn btn-primary'>Listar Agendamentos</Link> 
      <Link href='/Agendamentos/AddAgendamentos' className='btn btn-primary'>Cadastrar Agendamentos</Link> 
      
      
    </section>

  );
}
export default Agendamentos;