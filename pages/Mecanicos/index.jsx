
import Heading from "src/UI/Heading/Heading"
import Link from "next/link"



const Mecanico = () => {
  return (
    <section>
    <Heading title='Mecânicos'/>
    <Link href='/Mecanicos/List_Mecanico' className='btn btn-primary '>Listar Mecânico </Link>  
    <Link href='/Mecanicos/AddMecanico' className='btn btn-primary  '>Cadastrar Mecânico </Link>
    
  </section>
  
    );
}
export default Mecanico