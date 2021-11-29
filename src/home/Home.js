import { NavLink } from "react-router-dom";

function Home() {
    return (
      <div className="App">
        <div className="App-header">
          <p>
            Welcome on my first e-commerce website: 
          </p>
          <img className="logo-title" src="./logo-x-large.png" alt="logo-title"></img>
          <img className="App-logo" src="./logo512.png"  alt="logo" />
          <div className="App-link">
            <NavLink exact to ="Shop">
            Entrer sur le site
            </NavLink>
            </div>
        </div>
      </div>
    );
  }
  
  export default Home;