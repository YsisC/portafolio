import Header from "./components/Header/Header.jsx";
import Hero from './components/Hero/Hero.jsx'
import About from './components/About/About.jsx'
import Works from './components/Works/Works.jsx'
import css from './style/app.module.scss'
const App = () => {
 
  return <div className={`bg-primary ${css.container}`} >
<Header/>
<Hero/>
<About/>
<Works/>
  </div>
};

export default App;