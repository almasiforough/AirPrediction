async function fetchGet(url) {
  let status;
  return fetch(url)
    .then((response) => {
      status = response.status;
      return response.json();
    })
    .then((responseJSON) => {
      return { responseJSON, status };
    })
    .catch(() => {
      return { responseJSON: [], status: status };
    });
}
export { fetchGet };



