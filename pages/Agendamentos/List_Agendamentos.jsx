import Heading from "src/UI/Heading/Heading";
const List_Agendamentos = ()=> {
  return(
    <section>
      <Heading title='Agendamentos Cadastrados' />
      <form>
        <div>
          <label htmlFor="name" className="hidden">
            Nome

          </label>
          <input type="text" name="name" id="ListAgendamento" placeholder="Nome do Cliente" />
        </div>
        <button className="btn btn-primary">Listar</button>
      </form>
    </section>
  );
}
export default List_Agendamentos;
