import logo from './logo.svg';
import './App.css';
import  Nav from "./component/nav";
import  About from "./component/about";
import  Skills from "./component/skills";
import  Portflio from "./component/portfilio";
import  Fotter from "./component/footer";
function App() {
  return (
    <div className="App">
      <Nav />
      <About />
      <Skills />
      <Portflio />
      <Fotter />
     
    </div>
  );
}
export default App;
