import { useState } from 'react';
import Heading from "src/UI/Heading/Heading";
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const Add_Mecanico = () => {
  const initialFormData = {
    name: '',
    login: '',
    senha: '',
    confSenha: '',
    email: '',
    cpf: '', // removendo o estado 'cpf' desnecessário
    tel: '',
  };

  const [formData, setFormData] = useState(initialFormData);
  const [senhaMatch, setSenhaMatch] = useState(true);
  const [showPassword, setShowPassword] = useState(false);

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

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleClear = () => {
    setFormData(initialFormData); // Limpa todos os campos
    setSenhaMatch(true); // Reseta a validação de senha
    setShowPassword(false); // Reseta a exibição da senha
  };

  return (
    <section>
      <Heading title='Cadastrar Mecânico' subtitle='Preencha os campos'/>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name"></label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Nome" />
        </div>
        <div>
          <label htmlFor="login"></label>
          <input type="text" name="login" value={formData.login} onChange={handleChange} placeholder="Login" />
        </div>
        <div>
          <label htmlFor="senha"></label>
          <input type={showPassword ? "text" : "password"}  name="senha" value={formData.senha} onChange={handleChange} placeholder="Senha"
          />
          {showPassword ? (
            <FaEyeSlash onClick={toggleShowPassword} />
          ) : (
            <FaEye onClick={toggleShowPassword} />
          )}
        </div>
        <div>
          <label htmlFor="confSenha"></label>
          <input type="password" name="confSenha" value={formData.confSenha} onChange={handleChange} placeholder="Confirmar Senha"

          />
          {!senhaMatch &&  <p>As senhas não são iguais</p>}
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
          <label htmlFor="tel"></label>
          <input type="tel" name="tel" value={formData.tel} onChange={handleChange} placeholder="Telefone" />
        </div>
        <button className="btn btn-primary" type="submit">Cadastrar</button>
        <button className="btn btn-primary" type="button" onClick={handleClear}>Limpar</button>
      </form>
    </section>
  );
};

export default Add_Mecanico;
