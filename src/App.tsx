import React from 'react';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import Test from './pages/Test';
import Home from './pages/Home/Home';
import SignIn from './pages/Auth/SignIn';
import SignUp from './pages/Auth/SignUp';
import Profile from './pages/Profile/Profile';
import ProfileEdit from './pages/ProfileEdit/ProfileEdit';
import Yunha from './pages/Yunha';
import Sihun from './pages/Sihun';
import Header from './components/common/Header/Header';
import Main from './components/layout/Main/Main';
import Detail from 'pages/Group/Detail';
import Footer from 'components/common/Footer/Footer';
import Create from 'pages/Create/Create';
import MyGroup from 'pages/MyGroup/MyGroup';
import { useGetProfileQuery } from 'store/hooks/user.hooks';
import SignUpSuccess from 'pages/Auth/SignUpSuccess';
import CreateSuccess from 'pages/Create/CreateSuccess';

function App() {

  const { data, error, isLoading, isFetching, isSuccess } = useGetProfileQuery();
  const { pathname } = useLocation();
  const navigate = useNavigate();

  React.useEffect(() => {
    // console.log(data, error, isLoading, isFetching, isSuccess);
  }, [data, error, isLoading, isFetching, isSuccess]);

  React.useEffect(() => {
    if (error && (
      pathname === '/create'
      || pathname === '/mygroup'
      || pathname === '/profile'
      || pathname === '/profile/edit')) {
      navigate('/');
    }
    // console.log(isSuccess);
    if (!isFetching && isSuccess && (pathname === '/signin' || pathname === '/signup')) {
      navigate('/');
    }
  }, [error, isFetching, isSuccess, pathname]);

  return (
    <>
      <Header isFetching={isFetching} isLoggedIn={isSuccess} userData={data?.data?.foundUser} />
      <Main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signup/success" element={<SignUpSuccess />} />
          <Route path="/detail/:id" element={<Detail />} />
          <Route path="/create" element={<Create />} />
          <Route path="/create/success" element={<CreateSuccess />} />
          <Route path="/profile" element={<Profile userData={data?.data?.foundUser} />} />
          <Route path="/profile/edit" element={<ProfileEdit userData={data?.data?.foundUser} />} />
          <Route path="/mygroup" element={<MyGroup />} />
          <Route path="/test" element={<Test />} />
          <Route path="/yunha" element={<Yunha />} />
          <Route path="/sihun" element={<Sihun />} />
        </Routes>
      </Main>
      <Footer />
    </>
  );
}

export default App;
