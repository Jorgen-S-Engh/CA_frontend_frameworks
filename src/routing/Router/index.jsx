import React from 'react'
import { Routes, Route} from 'react-router-dom';
import ProductPage from '../../pages/ProductPage';
import Layout from '../../components/Layout';
import HomePage from '../../pages/Homepage';
import ContactPage from '../../pages/ContactPage';



function Router() {
  return (
    <div>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="contactPage" element={<ContactPage/>} />
        <Route path="/:id" element={<ProductPage />} />
        <Route path="*" element={<div>Page not found</div>} />
      </Route>
    </Routes>
  </div>
  )
}

export default Router