import Home from './Pages/Home/HomePage'
import RegisterAcount from './Pages/RegisterAcount/RegisterAcountPage'
import ResetPassword from './Pages/ResetPassword/ResetPasswordPage'
import Main from './Pages/Main/MainPage'
import LinkSended from './Pages/LinkSended/LinkSendedPage'
import AccountCreated from '../src/Pages/AccountCreated/AccountCreated'
import MyProfile from './Pages/MyProfile/MyProfilePage'
import Connections from './Pages/Connections/ConnectionsPage'
import Setts from './Pages/Setts/SettsPage'
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