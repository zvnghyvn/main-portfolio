import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '@pages/Home';
import ProjectProcess from '@pages/ProjectProcess';

export default function Router() {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project/process/:id" element={<ProjectProcess />} />
      </Routes>
  )
}
