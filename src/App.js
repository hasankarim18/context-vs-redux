import 'bootstrap/dist/css/bootstrap.min.css'
import { useState } from 'react';
import './App.css';
import Cons from './component/Cons';
import Pros from './component/Pros';
import ProsCons from './component/ProsCons';
import DataContext from './context/DataContext';

function App() {

  const [data, setData] = useState({ pros: 0, cons: 0 })

  const { pros = 0, cons = 0 } = data || {}

  return (
    <div className="App">
      <div className="container">
        <div>
          <h2>Pros and Cons </h2>
        </div>
        <div>
          <h1>..Title..</h1>
          <h3>Props: {pros}</h3>
          <h3>Cons: {cons}</h3>
        </div>
        <DataContext.Provider value={data} >
          <hr />
          <ProsCons />
          <hr />
          <Pros />
          <hr />
          <Cons />
          <hr />
        </DataContext.Provider>

        <div>
          <button
            onClick={() => setData((data) => ({ ...data, pros: data.pros + 1 }))}
            className="btn btn-success me-3">Increment Pros</button>
          <button
            onClick={() => setData((data) => ({ ...data, cons: data.cons + 1 }))}
            className="btn btn-danger">Increment Cons</button>

        </div>
      </div>


    </div>
  );
}

export default App;
