//Establecer variable del api
const URL = "https://api.coincap.io/v2";

function getAssets() {
  return fetch(`${URL}/assets?limit=20`)
    .then((res) => res.json())
    .then((res) => res.data);
}

export default {
  getAssets,
};
