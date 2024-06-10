import Home from './Pages/Home/Home'
import RegisterAcount from './Pages/RegisterAcount/RegisterAcount'
import ResetPassword from './Pages/ResetPassword/ResetPassword'
import Main from './Pages/Main/Main'
import LinkSended from './Pages/LinkSended/LinkSended'
import AccountCreated from './Pages/AccountCreated/AccountCreated'
import MyProfile from './Pages/MyProfile/MyProfile'
import Connections from './Pages/Connections/Connections'
import Setts from './Pages/Setts/Setts'
//teste

import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/register' element={<RegisterAcount />} />
                <Route path='/resetpassword' element={<ResetPassword />} />
                <Route path='/main' element={<Main />} />
                <Route path='/linksended' element={<LinkSended />} />
                <Route path='/accountcreated' element={<AccountCreated />} />
                <Route path='/myprofile' element={<MyProfile />} />
                <Route path='/connections' element={<Connections />} />
                <Route path='/setts' element={<Setts />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;