import Header from "./components/Header/Header.jsx";
import Hero from './components/Hero/Hero.jsx'
import About from './components/About/About.jsx'
import Works from './components/Works/Works.jsx'
import css from './style/app.module.scss'
import Heros from "./components/Hero2/Heros.jsx";
import Portfolio from "./components/Portfolio/Portfolio.jsx";
import Skills from "./components/Skills/Skills.jsx";
const App = () => {
 
  return <div className={`bg-primary ${css.container}`} >
<Header/>
<Heros/>
{/* <Hero/> */}
<About/>
<Works/>
<Portfolio/>
<Skills/>
  </div>
};

export default App;