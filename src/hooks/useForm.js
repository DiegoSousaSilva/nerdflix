import { useState } from 'react';

const useForm = (valoresIniciais) => {
  const [values, setValues] = useState(valoresIniciais);
  // const [categorias, setCategorias] = useState([]);

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

  function clearForm() {
    setValues(valoresIniciais);
  }

  return {
    values,
    handleChange,
    clearForm,
  };
};

export default useForm;
