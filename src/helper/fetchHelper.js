async function fetchGet(url){
    return new Promise((res)=>{
        let status;
        fetch(url)
        .then((Response)=>{
            status=Response.json();
            return response.json();
        })
        .then((responseJSON) => {
            res({ responseJSON, status });
          })
          .catch(() => {
            res({ responseJSON: [], status: 500 });
          });
    })
}
export {fetchGet}