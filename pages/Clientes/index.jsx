import Heading from "src/UI/Heading/Heading"
import Link from "next/link"


const Clientes = () => {
  return(
    <section>
      <Heading title='Clientes'/>
      <Link href='/Clientes/List_Clientes' className='btn btn-primary'>Listar Clientes</Link> 
      <Link href='/Clientes/AddClientes' className='btn btn-primary'>Cadastrar Clientes</Link> 
      <Link href='/Clientes/Upd_Clientes' className='btn btn-primary'>Atulaizar Clientes</Link> 
      
       
    </section>

   
  )
}
export default Clientes