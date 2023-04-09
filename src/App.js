import './App.css';
import Joke from './components/Joke/Joke';

function App() {
  return (
    <>
    <div className="App">
        <header className="app-header">
          <div>
            Welcome to the Dad Zone!!! 
          </div>
          <div>
           (❍ᴥ❍ʋ)
          </div>
      </header>
      <main className="app-main"> 
        <Joke />
      </main>       
      <footer className="app-footer">
          &#169; Big Poppa Inc., 2023.
      </footer>
    </div>
    </>
  );
}

export default App;
