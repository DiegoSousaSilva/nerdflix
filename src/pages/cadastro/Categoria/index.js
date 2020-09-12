/* eslint-disable react/button-has-type */
/* eslint-disable react/no-array-index-key */
/* eslint-disable no-shadow */
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
// eslint-disable-next-line import/no-named-as-default
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';

const CadastroCategoria = () => {
  const valoresIniciais = useState([
    {
      nome: '',
      description: '',
      color: '',
    },
  ]);

  const [values, setValues] = useState(valoresIniciais);
  const [categorias, setCategorias] = useState([]);

  const setValue = (key, value) => {
    setValues({
      ...values,
      [key]: value,
    });
  };

  function handleChange(info) {
    setValue(
      info.target.getAttribute('name'),
      info.target.value,
    );
  }

  useEffect(() => {
    const URL = window.location.hostname.includes('localhost')
      ? 'http://localhost:8080/categorias'
      : 'https://nerdflix-diego.herokuapp.com/categorias';

    fetch(URL)
      .then(async (resServer) => {
        const res = await resServer.json();
        setCategorias([
          ...res,
        ]);
      });
  }, []);

  return (
    <PageDefault>
      <h1>
        Cadastro de Categoria:
        {values.name}
      </h1>

      <form onSubmit={function handleSubmit(info) {
        info.preventDefault();
        setCategorias([
          ...categorias,
          values,
        ]);
        setValues(valoresIniciais);
      }}
      >

        <FormField
          label="Nome da Categoria:"
          name="nome"
          type="text"
          value={values.nome}
          onChange={handleChange}
        />

        <FormField
          label="Descrição:"
          name="description"
          type="textarea"
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

        <Button>
          Cadastrar
        </Button>

      </form>

      {categorias.length === 0 && (
        <div>Loading.....</div>
      )}

      <ul>
        {categorias.map((categorias) => (
          <li key={`${categorias}${categorias.nome}`}>
            {categorias.nome}

          </li>
        ))}
      </ul>
      <Link to="/">
        Ir para Home
      </Link>
    </PageDefault>
  );
};
export default CadastroCategoria;
