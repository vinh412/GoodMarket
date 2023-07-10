import {
  Route,
  BrowserRouter,
  Routes
} from "react-router-dom";
import SignUp from './pages/sign/SignUp';
import LogIn from './pages/sign/LogIn';
import Home from './pages/home/Home';

function App() {
  return (
    <div>
      <BrowserRouter>

        <Routes>
          <Route path="/*" element={<Home />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<LogIn />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
