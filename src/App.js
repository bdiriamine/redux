import { Route, Routes } from 'react-router-dom';
import './App.css';
import AddTask from './components/AddTask';
import ListTask from './components/ListTask';
import Navbar from './components/Navbar';
import EditTask from './components/EditTask';



function App() {
  return (
    <div className="App">
        <Navbar />
      <Routes>
        <Route path={'/AddTask'} element={<AddTask />}/>
        <Route path={'/EditTask'} element={<EditTask />}/>
        <Route path={'/'} element={<ListTask />}/>
      </Routes>
   
    </div>
  );
}

export default App;
