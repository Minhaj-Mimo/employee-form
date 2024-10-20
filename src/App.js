import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Pages from './pages';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Pages />} />
    </Routes>
  );
}

export default App;
