import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import Cons from './component/Cons';
import Pros from './component/Pros';
import ProsCons from './component/ProsCons';
import { useDispatch, useSelector } from 'react-redux'
import { incrementCons, incrementPros } from './features/prosConsSlice'


function App() {

  const pros = useSelector(state => state.proscons.pros)
  const cons = useSelector(state => state.proscons.cons)
  const dispatch = useDispatch()

  return (
    <div className="App">
      <div className="container">
        <div>
          <h2>Pros and Cons </h2>
        </div>
        <div>
          <h1>Pros Cons RTK toolkit</h1>
          <h3>Props: {pros}</h3>
          <h3>Cons: {cons}</h3>
        </div>
        <hr />
        <ProsCons />
        < hr />
        <Pros />
        <hr />
        <Cons />
        < hr />

        <div>
          <button
            onClick={() => dispatch(incrementPros())}
            className="btn btn-success me-3">
            Increment Pros
          </button>
          <button
            onClick={() => dispatch(incrementCons())}
            className="btn btn-danger">
            Increment Cons
          </button>

        </div>
      </div>


    </div>
  );
}

export default App;
