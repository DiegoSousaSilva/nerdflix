/* eslint-disable react/button-has-type */
/* eslint-disable react/no-array-index-key */
/* eslint-disable no-shadow */
import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
// eslint-disable-next-line import/no-named-as-default
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';
import useForm from '../../../hooks/useForm';
import category from '../../../repositories/category';
// import categoriesRepository from '../../../repositories/categorias';

const CadastroCategoria = () => {
  const history = useHistory();

  const { handleChange, values } = useForm({
    titulo: '',
    description: '',
    color: '',
  });

  /* const valoresIniciais = useState([
    {
      nome: '',
      description: '',
      color: '',
    },
  ]);

  const { handleChange, values, clearForm } = useForm(valoresIniciais); */

  const [categorias, setCategorias] = useState([]);

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

      <form onSubmit={
        (event) => {
          event.preventDefault();
          category.create({
            titulo: values.titulo,
            description: values.description,
            color: values.color,
          })
            .then(() => {
              console.log('Cadastrado com sucesso!!!');
              history.push('/');
            });
        }
    }
      >

        <FormField
          label="Nome da Categoria:"
          name="titulo"
          type="text"
          value={values.titulo}
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
          <li key={`${categorias}${categorias.id}`}>
            {categorias.titulo}
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
