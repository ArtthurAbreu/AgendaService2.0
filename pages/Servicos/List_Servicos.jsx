import Heading from "src/UI/Heading/Heading";
const List_Servicos = ()=> {
  return(
    <section>
      <Heading title='Serviços Cadastrados' />
      <form>
        <div>
          <label htmlFor="name" className="hidden">
            Nome

          </label>
          <input type="text" name="name" id="Listservico" placeholder="Nome do servico" />
        </div>
        <button className="btn btn-primary">Listar</button>
      </form>
    </section>
  );
}
export default List_Servicos;
