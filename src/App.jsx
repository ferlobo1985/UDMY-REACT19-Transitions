import { BrowserRouter, Route, Routes } from 'react-router';

// COMPONENTS
import Header from './components/header';
import CssTr from './components/CSStransition';
import Tgroup from './components/Tgroup';
import TransitionComp from './components/Transition';

const App = () => {
  return(
    <BrowserRouter>
      <Header/>
      <div className="container">
        <Routes>
          <Route path="/transition" element={<TransitionComp/>}></Route>
          <Route path="/csstransition" element={<CssTr/>}></Route>
          <Route path="/tgroup" element={<Tgroup/>}></Route>
          <Route path="/" element={
            <>
              HOME
            </>
          }></Route>
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App;