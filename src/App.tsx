/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './components/layout/Layout';
import { Home } from './pages/Home';
import { Shop } from './pages/Shop';
import { Product } from './pages/Product';
import { About } from './pages/About';
import { Evidence } from './pages/Evidence';
import { StoreLocator } from './pages/StoreLocator';
import { Blog } from './pages/Blog';
import { Testimonials } from './pages/Testimonials';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="tienda" element={<Shop />} />
          <Route path="producto/:slug" element={<Product />} />
          <Route path="quienes-somos" element={<About />} />
          <Route path="evidencia-cientifica" element={<Evidence />} />
          <Route path="donde-estamos" element={<StoreLocator />} />
          <Route path="blog" element={<Blog />} />
          <Route path="testimonios" element={<Testimonials />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
