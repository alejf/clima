const express =require('express');
const app = express();
const port = process.env.PORT || 80;
const axios = require('axios');
app.set('view engine', 'hbs');


//contenido estatico
app.use(express.static(__dirname + '/public'));

app.get('',(req,res)=>{ 
    res.render('index',{
        titulo:'El clima en tu ciudad'
        
    });
});
 


app.get('/buscar', (req, res) => {
    const query = req.query;
    const params = {
        access_key: 'a8ac3532ddc268953db438f0c0727847',
        query: req.query
      }

    /////
    axios.get('http://api.weatherstack.com/current', {params})
    .then(response => {
      const apiResponse = response.data;
    // let lugar = apiResponse.location.name;
     res.render ('home',{
      lugar: apiResponse.location.name,
      pais : apiResponse.location.country,
      temperatura: apiResponse.current.temperature,
      humedad: apiResponse.current.humidity,
      imagen: apiResponse.current.weather_icons[0],

  
     });


      console.log (apiResponse);
      console.log(`Current temperature in ${apiResponse.location.name} is ${apiResponse.current.temperature}℃`);
    }).catch(error => {
      console.log(error);
    });




    /////

})


    


app.listen(port);