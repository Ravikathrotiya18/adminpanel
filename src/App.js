/* eslint-disable no-unused-vars */
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import SimpleTable from './pages/SimpleTable';
import GeneralForm from './pages/GeneralForm';
import Login from './pages/Login'
import Protected from './pages/Protected';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path='/Home' element={
          <Protected>
            <Home />
          </Protected>
        } />
        <Route path='/tables/simpletable' element={
          <Protected>
            <SimpleTable />
          </Protected>} />
        <Route path='/forms/generalform' element={
          <Protected>
            <GeneralForm />
          </Protected>} />
      </Routes>
    </div>
  );
}

export default App;
