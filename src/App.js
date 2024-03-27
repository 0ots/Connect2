import Home from './pages/Home/Home'
import RegisterAcount from './pages/RegisterAcount/RegisterAcount'
import ResetPassword from './pages/ResetPassword/ResetPassword'

import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
      <BrowserRouter>
          <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path='/register' element={<RegisterAcount/>}/>
              <Route path='/resetpassword' element={<ResetPassword/>}/>
          </Routes>
      </BrowserRouter>
  );
}

export default App;