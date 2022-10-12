// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Link
// } from 'react-router-dom';
import Home from "./components/Home";


function App() {
  return (
    // <Router>
    // <div>
    //   <section>
    //     <img src="/public/img/chef.svg" alt=""/>
    //   </section>

    //   <section>
    //     <nav>
    //         <ul className='App'>
    //             <li>
    //             <Link to="/src/components/Home.js">Home</Link>
    //             </li>
    //         </ul>
    //     </nav>
    //     </section>
    //   </div>

    //   <Routes>
    //     <Route exact path='/' element={< Home />}></Route>
    //   </Routes>

    // </Router>
    
    <div>
      <section>
        <img src="./img/chef.svg" alt=""/>
      </section>
      <br />
      <section>
        <Home />
      </section>
    </div>
  );
}

export default App;
