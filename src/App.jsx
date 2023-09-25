import Header from "./components/Header/Header.jsx";
import About from './components/About/About.jsx'
import Works from './components/Works/Works.jsx'
import css from './style/app.module.scss'
import Hero from "./components/Hero/Heros.jsx";
import Portfolio from "./components/Portfolio/Portfolio.jsx";
import Skills from "./components/Skills/Skills.jsx";
import ContacMe from "./components/ContactMe/ContacMe.jsx";
import Footer from "./components/Footer/Footer.jsx";

const App = () => {
 
  return <div className={`bg-primary ${css.container}`} >
<Header/>
<Hero/>
<About/>
<Skills/>
<Works/>
<Portfolio/>
<ContacMe/>
<Footer/>
  </div>
};

export default App;