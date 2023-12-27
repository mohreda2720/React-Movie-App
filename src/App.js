import './App.css';
import Login from './Components/login/login'
import Signup from './Components/signup/signup'
import NavBar from './Components/navbar/navbar'
import Todo from './Components/todo/todo'
import Movie from './Components/movie/movie'
import Favourites from './Components/favourites/favourites'
import DetailsOfMovies from './Components/details/details';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
    <NavBar/>
    <Routes>
      <Route path='/' element={<Movie/>}/>
      <Route path='/details/:id' element={<DetailsOfMovies />} />
        <Route path='/login' element={<Login/>}/>
        <Route path='/sign' element={<Signup/>}/>
        <Route path='/todo' element={<Todo/>}/>
        <Route path='/movie' element={<Movie/>}/>
        <Route path='/favourite' element={<Favourites/>}/>
      </Routes>
    {/* <Login/> */}
    {/* <Signup/> */}
    </>
  );
}

export default App;
