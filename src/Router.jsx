import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import ProjectProcess from '../pages/ProjectProcess';
import ProjectPlan from '../pages/ProjectPlan';

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project/process" element={<ProjectProcess />} />
        <Route path="/project/plan" element={<ProjectPlan />} />
      </Routes>
    </BrowserRouter>
  );
}
