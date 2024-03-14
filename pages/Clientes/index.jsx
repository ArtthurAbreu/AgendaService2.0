import Heading from "src/UI/Heading/Heading"
import Link from "next/link"
import GridChart from "src/Components/GridChart/GridChart"

const Clientes = () => {
  return(
    <section>
      <Heading title='Clientes'/>
      <Link href='/Clientes' className='btn btn-primary'>Adicionar Clientes</Link> 
      
    </section>
  )
}
export default Clientes