import Login from './component/Login';
import EmptyPage from './component/EmptyPage';
import SignUp from './component/SignUp';
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/login' element={<Login/>} />
      <Route path='/forgot' element={<Login/>} />
      <Route path='/signup' element={<SignUp/>} />
      <Route path='*' element={<EmptyPage/>} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
