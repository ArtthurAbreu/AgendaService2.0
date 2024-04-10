import Heading from "src/UI/Heading/Heading";
const Add_Agendamentos = ()=> {
  return(
    <section>
      <Heading title='Cadastrar Agendamento' subtitle='Preencha os campos'/>
      <form>
        <div>
          <label htmlFor="agend_Cliente" className="hidden">
            Cliente
          </label>
          <input type="text" name="agend_Cliente" id="agend_Cliente" placeholder="Cliente" />
        </div>
        <div>
          <label htmlFor="data" className="hidden">
            Data
          </label>
          <input type="date" name="data" id="data" placeholder="Data" />
        </div>
        <div>
          <label htmlFor="name" className="hidden">
            Selecionar Servico
          </label>
          <input type="select" name="sel_Servico" id="sel_servico" placeholder="Selecionar Servico"/>  <button className="btn btn-primary">Adicionar Serviço</button>
        </div>
        <button className="btn btn-primary">Cadastar</button>
        <button className="btn btn-primary">Limpar</button>
      </form>
    </section>
  );
}
export default Add_Agendamentos ;
