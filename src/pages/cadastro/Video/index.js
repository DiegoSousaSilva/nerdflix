import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import useForm from '../../../hooks/useForm';
import Button from '../../../components/Button';
import videosRepository from '../../../repositories/videos';
import categoriesRepository from '../../../repositories/categorias';

const CadastroVideo = () => {
  const history = useHistory();
  const [categorias, setCategorias] = useState([]);
  const categoryTitles = categorias.map(({ titulo }) => titulo);
  const { handleChange, values } = useForm({
    titulo: '',
    url: '',
    categoria: '',
  });

  useEffect(() => {
    categoriesRepository
      .getAll()
      .then((categoriasFromServer) => {
        setCategorias(categoriasFromServer);
      });
  }, []);

  console.log(categorias);

  return (
    <PageDefault>
      <h1>Cadastro de Video</h1>

      <form onSubmit={
        (event) => {
          event.preventDefault();
          const categoriaEScolhida = categorias.find((categoria) => categoria.titulo === values.categoria);
          videosRepository.create({
            titulo: values.titulo,
            url: values.url,
            categoriaId: categoriaEScolhida.id,
          })
            .then(() => {
              console.log('Cadastrado com sucesso!!!');
              history.push('/');
            });
        }
    }
      >

        <FormField
          label="Titulo do Video "
          name="titulo"
          value={values.titulo}
          onChange={handleChange}
        />

        <FormField
          label="Cole ou copie a URL do video aqui "
          name="url"
          value={values.url}
          onChange={handleChange}
        />

        <FormField
          label="Escolha a Categoria"
          name="categoria"
          value={values.categoria}
          onChange={handleChange}
          suggestions={categoryTitles}
        />

        <Button>
          Cadastrar Video
        </Button>
      </form>

      <Link to="/cadastro/categoria">
        Cadastrar Categoria
      </Link>
    </PageDefault>
  );
};
export default CadastroVideo;
