import { Routes, Route } from 'react-router-dom'
import Home from '@pages/Home'
import ProjectProcess from '@pages/ProjectProcess'
import ScrollToTop from '@components/ScrollToTop'

export default function Router() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project/process/:id" element={<ProjectProcess />} />
      </Routes>
    </>
  )
}
