import config from '../config';

const URL_VIDEOS = `${config.URL_BACKEND}/videos`;

function create(VideoObject) {
  return fetch(`${URL_VIDEOS}?_embed=categorias`, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(VideoObject),
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
