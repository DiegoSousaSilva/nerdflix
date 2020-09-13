import config from '../config';

const URL_CATEGORY = `${config.URL_BACKEND}/categorias`;

function create(CategoryObject) {
  return fetch(`${URL_CATEGORY}?_embed=videos`, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(CategoryObject),
  })
    .then(async (resServer) => {
      if (resServer.ok); {
        const res = await resServer.json();
        return res;
      }
      // eslint-disable-next-line no-unreachable
      throw new Error('Não foi possivel caastrar aos dados :(');
    });
}

export default {
  create,
};
