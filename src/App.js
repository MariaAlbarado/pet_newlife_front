import { FaPaw } from "react-icons/fa";


import './App.css';

function App(){
  return(
    <div className='container_inicial'> 

      
      <div className='container_titulo'>
        <h1>< FaPaw/> {""} Pet new Life</h1>
        <p>Painel administrativo</p>
      </div>

      
        <div className='container_imput'>
          <label>CPF</label>
          <input type="text" placeholder='000.000.000-00' />
        </div>

        <div className='container_imput'>
          <label>Senha</label>
          <input type="password" placeholder='********' />
        </div>

        <button className='botao_logar' type='submit'>Entrar</button>
        
        <p className='paragrafo_login'>Faça login com suas credenciais de funcionário</p>
      
    </div>

  )
}


export default App;