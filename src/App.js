import './App.css';
import  {Nazwa}  from './nazwa';
import  {Artykul}  from './artykul';
import {CookiesComponent} from './cookies';
import { CookiesProvider } from 'react-cookie';

function App() {
  return (
    <div className="App">
      <Nazwa />
      <Artykul />
      <CookiesProvider>
      <CookiesComponent />
      </CookiesProvider>
    </div>
  );
}

export default App;
