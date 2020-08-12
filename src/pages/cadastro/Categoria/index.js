import React, {useState} from 'react';
import PageDefault from '../../../components/PageDefault';
import { Link } from 'react-router-dom';
import FormField from '../../../components/FormField';


const CadastroCategoria = () => {

  const valoresIniciais = useState([
    {
      name: 'Diego',
      description:'',
      color: '',
    },
  ])

const [values, setValues] = useState(valoresIniciais);
const [categorias, setCategorias] = useState([]);

  const setValue = (key, value)=>{
    setValues({
      ...values,
      [key]: value,
    })
  }

  function handleChange(info){

    setValue(
      info.target.getAttribute('name'),
      info.target.value
    );
  }


  return(
    <PageDefault>
      <h1>Cadastro de Categoria: {values.name}</h1>

      <form onSubmit={(info)=>{
        info.preventDefault();
        setCategorias([
          ...categorias,
          values
        ]);
      }}>

      <FormField 
        label="Nome"
        name="nome"
        type="text"
        value={values.name}
        onChange={handleChange}
      />

      <FormField 
        label="Descrição"
        name="description"
        type={<textarea />}
        value={values.description}
        onChange={handleChange}
      />

      <FormField 
        label="Cor"
        name="color"
        type="color"
        value={values.color}
        onChange={handleChange}
      />

        <button>
          Cadastrar
        </button>
      </form>

      <ul>
         {categorias.map((categorias, indice)=>{
           return(
           <li key={`${categorias}${indice}`}>
             {categorias.name}
             
            </li>
           )
         })}
      </ul>
      <Link to="/">
        Ir para Home
      </Link>
    </PageDefault>
  )
}
export default CadastroCategoria;