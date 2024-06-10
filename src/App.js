import Home from '../src/Pages/Home/Home'
import RegisterAcount from '../src/Pages/RegisterAcount/RegisterAcount'
import ResetPassword from '../src/Pages/ResetPassword/ResetPassword'
import Main from '../src//Pages/Main/Main'
import LinkSended from '../src/Pages/LinkSended/LinkSended'
import AccountCreated from '../src/Pages/AccountCreated/AccountCreated'
import MyProfile from '../src/Pages/MyProfile/MyProfile'
import Connections from '../src/Pages/Connections/Connections'
import Setts from '../src/Pages/Setts/Setts'

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