import './App.css';
import './SCSS/main.scss'

import HeaderTextButton from './components/header-text-button/header-text-button.component.jsx'
import Header from './components/header/header.component.jsx';
import PlantView from './components/plant-view/plant-view.component.jsx';

function App() {
  return (
   <>
      <Header/>
      <PlantView
        name='fejka'
        price={19}
        descriptor='potted plant'
        // imageURL= {require('/src/images/1032-200x300.jpg')}
      />
   </>
  );
}

export default App;
