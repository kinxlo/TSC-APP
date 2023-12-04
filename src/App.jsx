import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/css/bootstrap.min.css";
import FindTalent from "./pages/FindTalent/FindTalent";
import JobPosting from "./pages/JobPosting/JobPosting";

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/findtalent" element={<FindTalent />} />
          <Route path="/jobposting" element={<JobPosting />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
