import { LandingPage }  from './component/Landing';
import { NewsLetter } from './component/NewsLetter';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";



function App() {

  return (
    <BrowserRouter>
      <Routes>
          <Route
              path="/"
              element={<LandingPage />}
          />
          <Route
              path="/news"
              element={<NewsLetter />}
          />
      </Routes>
    </BrowserRouter>
  )
}

export default App
