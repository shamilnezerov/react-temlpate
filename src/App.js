import { BrowserRouter } from "react-router-dom";
import Layout from './components/Layout/Layout';
import Routing from './components/Layout/Routing';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <div className="App">
          <div className='container'>
          <Routing/>
          </div>
        </div>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
