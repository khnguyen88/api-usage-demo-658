import React, {useState} from 'react';
import axios from 'axios';


const Joke = () => {

  // State to store jokes retrieved from the API
  const [joke, setJokes] = useState([]);

  // Variable which website URL address or link of an API
  const apiLink = "https://icanhazdadjoke.com/"

  // Functions to fetch data from the api via HTTP get request
  const fetchData = async () => {
    const response = await axios.get(`${apiLink}`, { headers: { Accept: "application/json" } });
    console.log(response.data);
    console.log(response.data.joke);
  }
  
  fetchData();
  
  return (
    <div>
      <h1>Jokes:</h1>
    </div>
  );
}

export default Joke;