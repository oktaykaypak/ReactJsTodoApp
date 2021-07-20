import "./assets/App.css";
import Todocomp from './components/todoComp.js';

function App() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <h1 className="header text-left text-light py-5">React Todo App</h1>
        </div>
      </div>
     <Todocomp />  
    </div>
  );
}

export default App;
