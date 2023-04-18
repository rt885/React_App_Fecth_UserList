class API {
  static call = (route, onSucces) => {
    const baseURL = 'https://dummyapi.io/data/v1'
    const appID = '643da7c9548cb650a5201ce6'

    fetch(`${baseURL}${route}`, {
      headers:{
        'app-id':appID
      }
    }).then(function(response) {
      if(response.ok){
        return response.json()
      } else {
        throw new Error('Error en conversion de JSON')
      }
    }).then(function(jsonResponse) {
      console.log('Respuesta recibida...')
      onSucces(jsonResponse)
    })
  }
}

export default API;