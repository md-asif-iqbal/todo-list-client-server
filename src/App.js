import logo from './logo.svg';
import './App.css';
import Home from './Pages/Home';
import Navbar from './Pages/NavBar';
import { Route, Routes } from 'react-router-dom';
import Login from './Pages/Login';
import SignUp from './Pages/SignUp';
import TodoForm from './Pages/TodoForm';

import TodoListMain from './Pages/TodoListMain';
import RequireAuth from './Pages/RequireAuth';
import Footer from './Pages/Footer';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/todolist' element={
          <RequireAuth>
            <TodoListMain></TodoListMain>
          </RequireAuth>
          
        }></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<SignUp></SignUp>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
