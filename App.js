
import ProductList from './ProductsList';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ProductList />} />
      </Routes>
    </Router>
  );
}

export default App;