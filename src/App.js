import Router from "./Router"
import { BrowserRouter } from 'react-router-dom';
import {ProviderRotas} from "./routerProvider"

function App() {
  return (
      <div className="App">
        <BrowserRouter>
        <ProviderRotas>
           <Router />
        </ProviderRotas>
        </BrowserRouter>
      </div>
  );
}

export default App;
