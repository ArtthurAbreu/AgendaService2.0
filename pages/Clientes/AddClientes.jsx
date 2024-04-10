import { useState } from 'react';
import Heading from "src/UI/Heading/Heading";

const Add_Clientes = () => {
  const [formData, setFormData] = useState({
    name: '',
    login: '',
    senha: '',
    confSenha: '',
    email: '',
    cpf: '',
    tel: '',
  });
  const [senhaMatch, setSenhaMatch] = useState(true);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    
    if (formData.senha === formData.confSenha) {
      setSenhaMatch(true);
      
    } else {
      setSenhaMatch(false);
    }
  };

  return (
    <section>
      <Heading title='Cadastrar Cliente' subtitle='Preencha os campos'/>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name"></label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Nome do Cliente" />
        </div>
        <div>
          <label htmlFor="login"></label>
          <input type="text" name="login" value={formData.login} onChange={handleChange} placeholder="Login" />
        </div>
        <div>
          <label htmlFor="senha"></label>
          <input type="password" name="senha" value={formData.senha} onChange={handleChange} placeholder="Senha" />
        </div>
        <div>
          <label htmlFor="confsenha"></label>
          <input type="password" name="confSenha" value={formData.confSenha} onChange={handleChange} placeholder="Confirmar senha" />
          {!senhaMatch &&  <p>As senhas não iguais</p>}
        </div>
        <div>
          <label htmlFor="email"></label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" />
        </div>
        <div>
          <label htmlFor="cpf"></label>
          <input type="text" name="cpf" value={formData.cpf} onChange={handleChange} placeholder="CPF" />
        </div>
        <div>
          <label htmlFor="telefone"></label>
          <input type="tel" name="tel" value={formData.tel} onChange={handleChange} placeholder="Telefone" />
        </div>
        <button className="btn btn-primary" type="submit">Cadastrar</button>
        <button className="btn btn-primary" type="reset">Limpar</button>
      </form>
    </section>
  );
};

export default Add_Clientes;
