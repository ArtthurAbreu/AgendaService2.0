import Heading from "src/UI/Heading/Heading";
const List_Mecanico = ()=> {
  return(
    <section>
      <Heading title='Mecânicos Cadastrados' />
      <form>
        <div>
          <label htmlFor="name" className="hidden">
            Nome
          </label>
          <input type="text" name="name" id="listMecancico" placeholder="Nome do Mecânico" />
        </div>
        <button className="btn btn-primary">Listar</button>
      </form>
    </section>
  );
}
export default List_Mecanico;
