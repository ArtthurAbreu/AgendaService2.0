
import Heading from "src/UI/Heading/Heading"
import Link from "next/link"



const Servicos = () => {
  return (
    <section>
    <Heading title='Serviços'/>
    <Link href='/Servicos/List_Servicos' className='btn btn-primary '>Listar Serviço </Link>  
    <Link href='/Servicos/Add_Servicos' className='btn btn-primary  '>Cadastrar Serviço </Link>
    
  </section>
  
    );
}
export default Servicos