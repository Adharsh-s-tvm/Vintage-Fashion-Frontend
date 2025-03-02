import { BrowserRouter, Route, Routes } from "react-router"
import AdminLogin from "./pages/admin/AdminLogin"
import UserSignUp from "./pages/main/UserSignUp"
import UserLogin from "./pages/main/userLogin"
import AdminPage from "./pages/admin/AdminPage"
import Home from "./pages/main/Home"
import { TransitionGroup, CSSTransition } from 'react-transition-group';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route
          path="*"
          element={
            <TransitionGroup>
              <CSSTransition
                key={location.key}
                classNames="slide"
                timeout={500}
              >
                <Routes>
                  <Route path="/login" element={<UserLogin />} />
                  <Route path="/signup" element={<UserSignUp />} />
                </Routes>
              </CSSTransition>
            </TransitionGroup>
          }
        />
        <Route path="/admin" element={<AdminPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
