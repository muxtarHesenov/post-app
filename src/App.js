import React from 'react';
import {Routes, Route, Navigate} from 'react-router-dom'
import LoginPage from './pages/LoginPage';
import PostsPage from './pages/PostsPage'
import PostPage from './pages/PostPage';
import RegistrationPage from './pages/RegistrationPage';



function App() {
  
  return (
    <>
      <Routes>
        <Route path='/' element={ <Navigate to='/login' /> } />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/posts' element={<PostsPage />} />
        <Route path='/registration' element={<RegistrationPage /> } />
        <Route path='/posts/:postId' element={<PostPage />} />
      </Routes>
    </>
  );
}

export default App;
