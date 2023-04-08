import React, {useState} from 'react';
import axios from 'axios';


const Joke = () => {

  // State to store jokes retrieved from the API
  const [jokes, setJokes] = useState([]);

  // Variable which website URL address or link of an API
  const apiLink = "https://icanhazdadjoke.com/"

  // Functions to fetch data from the api via HTTP get request
  // We use async function declaration and the await keyword to enable and ensure the fetchData method will run asynchronously 
  const fetchData = async () => {
    const response = await axios.get(`${apiLink}`, { headers: { Accept: "application/json" } });
    
    // Create a shallow copy of the array of jokes
    const tempJokesList = [...jokes];

    // Add the joke retrieved from API response and add it to the temporary Jokes list.
    tempJokesList.push(response.data.joke);

    // Update the jokes state variable and set the updated temporary jokes list as the new jokes state
    setJokes(tempJokesList);
  }
  
  return (
    <div>
      <h1>Jokes:</h1>
      
      {/* Fetch data from Jokes API */}
      <button onClick={fetchData}>Retrieve Jokes</button>

      <div className="jokes-container">
        {/* Display jokes */}
        {jokes && jokes.map((j, index) => {
          return (
            <div className="joke" key={index}> {j} </div>
          )
        })}
      </div>
    </div>
  );
}

export default Joke;