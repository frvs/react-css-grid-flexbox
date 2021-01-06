import Header from './components/Header';
import './App.css';

function App() {
  return (
    <div className="App">
      
      <header className='header'>
        <a href="#">Logo</a>
        <nav>
          <ul className='menu'>
            <li><a href="#">Home</a></li>
            <li><a href="#">Contact</a></li>
            <li><a href="#">About</a></li>
          </ul>
        </nav>
      </header>

      <h1>Section Flexbox</h1>
      <section className='flex'>
        <div>
          <img src="https://picsum.photos/500"></img>
          <p>Legenda</p>
        </div>
        <div>
          <img src="https://picsum.photos/500"></img>
          <p>Legenda</p>
        </div><div>
          <img src="https://picsum.photos/500"></img>
          <p>Legenda</p>
        </div><div>
          <img src="https://picsum.photos/500"></img>
          <p>Legenda</p>
        </div><div>
          <img src="https://picsum.photos/500"></img>
          <p>Legenda</p>
        </div><div>
          <img src="https://picsum.photos/500"></img>
          <p>Legenda</p>
        </div>
      </section>

      <h1>Section CSS Grid 1</h1>
      <section class='grid1'>
        <div>
          <img src="https://picsum.photos/500"></img>
          <p>Legenda</p>
        </div>
        <div>
          <img src="https://picsum.photos/500"></img>
          <p>Legenda</p>
        </div>
        <div>
          <img src="https://picsum.photos/500"></img>
          <p>Legenda</p>
        </div>
        <div>
          <img src="https://picsum.photos/500"></img>
          <p>Legenda</p>
        </div>
        <div>
          <img src="https://picsum.photos/500"></img>
          <p>Legenda</p>
        </div>
        <div>
          <img src="https://picsum.photos/500"></img>
          <p>Legenda</p>
        </div>
        <div>
          <img src="https://picsum.photos/500"></img>
          <p>Legenda</p>
        </div>
        <div>
          <img src="https://picsum.photos/500"></img>
          <p>Legenda</p>
        </div>
        <div>
          <img src="https://picsum.photos/500"></img>
          <p>Legenda</p>
        </div>
        <div className='anuncio'>
          <img src="https://picsum.photos/500"></img>
          <p>Anuncio</p>
        </div>
      </section>

      <h1>Section CSS Grid 2</h1>
      <section className='grid2'>
        <div className='video'>
          <img src="https://picsum.photos/500"></img>
          <p>Legenda</p>
        </div>
        <div className='sidebar'>
          <div>
            <img src="https://picsum.photos/500"></img>
            <p>Legenda</p>
          </div>
          <div>
            <img src="https://picsum.photos/500"></img>
            <p>Legenda</p>
          </div>
          <div>
            <img src="https://picsum.photos/500"></img>
            <p>Legenda</p>
          </div>
          <div>
            <img src="https://picsum.photos/500"></img>
            <p>Legenda</p>
          </div>
          <div>
            <img src="https://picsum.photos/500"></img>
            <p>Legenda</p>
          </div>
        </div>
      </section>

      <h1>Section CSS Grid 3</h1>

      <section className='grid3'>
        <div className='grid3-item'>
          <img src="https://picsum.photos/1200"></img>
            <p>Legenda</p>
          </div>
          <div className='grid3-item'>
            <img src="https://picsum.photos/1200"></img>
            <p>Legenda</p>
          </div>
          <div className='grid3-item'>
            <img src="https://picsum.photos/1200"></img>
            <p>Legenda</p>
          </div>
      </section>
    </div>
  );
}

export default App;
