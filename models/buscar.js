const axios = require('axios');
const params = {
  access_key: 'a8ac3532ddc268953db438f0c0727847',
  query: 'New York'
}


class Busquedas{
    historial = ['Oaxaca','Tlaxcala', 'Madrid'];
    constructor(){
        //TODO :leer de localStorage

      //  this.busquedas = [];
    }


    async ciudad(lugar =''){
        console.log(lugar);

        // axios.get('https://api.weatherstack.com/current', {params})
        // .then(response => {
        //   const apiResponse = response.data;
        //   console.log(`Current temperature in ${apiResponse.location.name} is ${apiResponse.current.temperature}℃`);
        // }).catch(error => {
        //   console.log(error);
        // });  
        

    console.log(lugar);
    
    return [];;
    }


}

module.exports = {
    Busquedas
}



