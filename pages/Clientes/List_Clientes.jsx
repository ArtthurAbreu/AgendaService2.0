import { useState } from 'react';
import Heading from "src/UI/Heading/Heading";

const List_Servicos = () => {
  const [cpf, setCpf] = useState('');

  const handleChange = (event) => {
    // Remove qualquer caractere não numérico do valor do input
    const cpfValue = event.target.value.replace(/\D/g, '');
    setCpf(cpfValue);
  };

  const formatCpf = (cpf) => {
    
    return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  
    console.log('CPF:', cpf);
  };

  return (
    <section>
      <Heading title='Clientes Cadastrados' />
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="listCliente"></label>
          <input type="text" name="name" id="listCliente" value={formatCpf(cpf)} onChange={handleChange} placeholder="Informe o CPF do cliente" 
            maxLength={14} // Define o tamanho máximo do campo
            minLength={14} // Define o tamanho mínimo do campo
            pattern="\d{3}\.\d{3}\.\d{3}-\d{2}" // Define um padrão para validação
            required // Campo obrigatório
          />
        </div>
        <button className="btn btn-primary">Listar</button>
      </form>
    </section>
  );
};

export default List_Servicos;
