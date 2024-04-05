import Home from './pages/Home/Home'
import RegisterAcount from './pages/RegisterAcount/RegisterAcount'
import ResetPassword from './pages/ResetPassword/ResetPassword'
import Main from './pages/Main/Main'
import LinkSended from './pages/LinkSend/LinkSended'

import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
      <BrowserRouter>
          <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path='/register' element={<RegisterAcount/>}/>
              <Route path='/resetpassword' element={<ResetPassword/>}/>
              <Route path='/main' element={<Main/>}/>
              <Route path='/linksended' element={<LinkSended/>}/>
          </Routes>
      </BrowserRouter>
  );
}

export default App;