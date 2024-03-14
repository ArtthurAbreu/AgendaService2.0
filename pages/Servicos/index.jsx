import Heading from "src/UI/Heading/Heading"
import Link from "next/link"



const Servicos = () => {
  return (
    <section>
      <Heading title='Servicos' />

      <div style={{ marginBottom: '10px' }}>
        <Link href='/Servicos' className='btn btn-primary'>
          Listar Serviços
        </Link>
      </div>

      <div>
        <Link href='/Servicos' className='btn btn-primary'>
          Cadastrar Serviços
        </Link>
      </div>
    </section>
  );
}
export default Servicos