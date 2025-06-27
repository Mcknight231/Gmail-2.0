import './styles/App.css';
import Header from './components/Header';
import SideBar from './components/SideBar';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import EmailList from './components/EmailList';
import Mail from './components/Mail';

function App() {

  return (
    <Router>
      <div className="App">
        <Header />

        <div className="app-body">
          <SideBar />

          <Routes>
            <Route path='/mail' element={<Mail />} />
            <Route path='/' element={<EmailList />} />
          </Routes>
        </div>
      </div>
    </Router>
  )
}

export default App
