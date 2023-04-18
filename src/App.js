import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import UserListView from './pages/UserListView';
import ProfileView from './pages/ProfileView';

function App() {
  return (
    <div>
      <BrowserRouter >
        <Routes>
          <Route path='/profile/:id' element={<ProfileView />}></Route>
          <Route path='/home' element={<UserListView />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
