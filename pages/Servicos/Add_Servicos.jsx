import Heading from "src/UI/Heading/Heading";
const Add_Servicos = ()=> {
  return(
    <section>
      <Heading title='Cadastrar Serviço' subtitle='Preencha os campos'/>
      <form>
        <div>
          <label htmlFor="name" className="hidden">
            Serviço
          </label>
          <input type="text" name="name" id="servico" placeholder="Nome do servico" />
        </div>
        <div>
          <label htmlFor="name" className="hidden">
            Descrição
          </label>
          <input type="text" name="descricao" id="descricao" placeholder="Descrição" />
        </div>
        <div>
          <label htmlFor="name" className="hidden">
            Tempo estimado
          </label>
          <input type="time" name="time" id="time"/>
        </div>
        <div>
          <label htmlFor="price" className="hidden">
            Valor
          </label>
          <input type="number" name="price" id="price" placeholder="Valor" />
        </div>
        <button className="btn btn-primary">Cadastar</button>
        <button className="btn btn-primary">Limpar</button>
      </form>
    </section>
  );
}
export default Add_Servicos;
