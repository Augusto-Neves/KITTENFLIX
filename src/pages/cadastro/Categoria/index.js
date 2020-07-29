import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/pageDefault';
import FormField from '../../../components/FormField';

function CadastroCategoria() {
  const valoresIniciais = {
    nome: '',
    descricao: '',
    cor: '',
  }

  const [categorias, setCategorias] = useState([]);
  const [values, setValues] = useState(valoresIniciais);

  function setValue(chave, valor) {
    //chave: nome, descrição e etc
    setValues({
      ...values,
      [chave]: valor, //nome: 'valor'
    })
  }

  function handleChange(infoEvento) {
    setValue(
      infoEvento.target.getAttribute('name'),
      infoEvento.target.value
    )
  }
  
  return (
    <PageDefault>
      <h1>Cadastro de Categoria: {values.nome} </h1>

      <form onSubmit={function handleSubmit(infosEvento){
        infosEvento.preventDefault()        
        setCategorias([
          ...categorias,
          values
        ]);
        
        setValues(valoresIniciais)
      }}>

        <FormField 
          label="Nome da Categoria: "
          type="text"
          name="nome"
          value={values.nome}
          onChange={handleChange}
        />

        <FormField 
          label="Descrição: "
          type="text"
          name="descricao"
          value={values.descricao}
          onChange={handleChange}
        
        />       
        <FormField 
          label="Cor"
          type="color"
          name="cor"
          value={values.cor}
          onChange={handleChange}
        />       
                
        <button>
          Cadastrar
        </button>
      </form>
      
      <ul>
        {categorias.map((categoria, indice)=>{
          return (
            <li key={`${categoria} ${indice}`}>
              {categoria.nome}              
            </li>
          )
        })}
      </ul>

      <Link to="/">
        Ir para home
      </Link>
    </PageDefault>
  )
}

export default CadastroCategoria;