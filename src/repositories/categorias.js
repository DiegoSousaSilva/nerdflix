import config from '../config';

const URL_CATEGORIES = `${config.URL_BACKEND}/categorias`;

function getAllWithVideos() {
  return fetch(`${URL_CATEGORIES}/?_embed=videos`)
    .then(async (resServer) => {
      if (resServer.ok); {
        const res = await resServer.json();
        return res;
      }
      // eslint-disable-next-line no-unreachable
      throw new Error('Não foi possivel acessar aos dados :(');
    });
}

export default {
  getAllWithVideos,
};
