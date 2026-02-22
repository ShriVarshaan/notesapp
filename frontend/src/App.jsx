import {Route, Routes} from "react-router"
import HomePage from "./pages/notes/HomePage.jsx"
import NoteDetailPage from "./pages/notes/NoteDetailPage.jsx"
import CreatePage from "./pages/notes/CreatePage.jsx"
import LoginPage from "./pages/login/LoginPage.jsx"
import toast from "react-hot-toast"

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/create" element={<CreatePage />}></Route>
        <Route path="/note/:id" element={<NoteDetailPage />}></Route>
        <Route path="/login" element={<LoginPage />}></Route>
      </Routes>
    </div>
  )
}

export default App