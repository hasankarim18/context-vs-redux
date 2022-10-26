import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import Cons from './component/Cons';
import Pros from './component/Pros';
import ProsCons from './component/ProsCons';

function App() {
  return (
    <div className="App">
      <div className="container">
        <div>
          <h2>Pros and Cons </h2>
        </div>
        <div>
          <h1>..Title..</h1>
          <h3>Props: 0</h3>
          <h3>Cons: 0</h3>
        </div>

        <Pros />
        <Cons />
        <ProsCons />

        <div>
          <button className="btn btn-success me-3">Increment Pros</button>
          <button className="btn btn-danger">Increment Cons</button>

        </div>
      </div>


    </div>
  );
}

export default App;
