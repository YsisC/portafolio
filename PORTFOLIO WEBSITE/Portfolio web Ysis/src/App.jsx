import Header from "./components/Header/Header.jsx";
import Hero from './components/Hero/Hero.jsx'
import css from './style/app.module.scss'
const App = () => {
 
  return <div className={`bg-primary ${css.container}`} >
<Header/>
<Hero/>
  </div>
};

export default App;