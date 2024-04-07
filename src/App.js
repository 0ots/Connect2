import Home from './pages/Home/Home'
import RegisterAcount from './pages/RegisterAcount/RegisterAcount'
import ResetPassword from './pages/ResetPassword/ResetPassword'
import Main from './pages/Main/Main'
import LinkSended from './pages/LinkSended/LinkSended'
import AccountCreated from './pages/AccountCreated/AccountCreated'
import Development from './pages/Development/Development'

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
              <Route path='/accountcreated' element={<AccountCreated/>}/>
              <Route path='/development' element={<Development/>}/>
          </Routes>
      </BrowserRouter>
  );
}

export default App;