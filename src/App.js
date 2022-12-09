import './App.css';
import Home from './components/Home'
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from './components/About';

// import DragDrop from "./components/DragDrop";



function App() {
  return (
    <DndProvider backend={HTML5Backend}>
      <BrowserRouter>
      <Routes>
        <Route path="/About" element={<About />}></Route>
        <Route path="/" element={<Home/>}></Route>
      </Routes>
      {/* <Header/>
    <Activities/>
    <Footer/>
    */}
    </BrowserRouter>
    </DndProvider>
  )
}

export default App;
