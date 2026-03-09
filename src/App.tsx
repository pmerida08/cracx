/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "./components/layout/Layout";
import { AccountLayout } from "./components/account/AccountLayout";
import { Home } from "./pages/Home";
import { Shop } from "./pages/Shop";
import { Product } from "./pages/Product";
import { About } from "./pages/About";
import { Evidence } from "./pages/Evidence";
import { StoreLocator } from "./pages/StoreLocator";
import { Blog } from "./pages/Blog";
import { Testimonials } from "./pages/Testimonials";
import { Dashboard } from "./pages/account/Dashboard";
import { Orders } from "./pages/account/Orders";
import { Downloads } from "./pages/account/Downloads";
import { Addresses } from "./pages/account/Addresses";
import { PaymentMethods } from "./pages/account/PaymentMethods";
import { AccountDetails } from "./pages/account/AccountDetails";

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

          {/* Mi Cuenta - nested routes */}
          <Route path="mi-cuenta" element={<AccountLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="pedidos" element={<Orders />} />
            <Route path="descargas" element={<Downloads />} />
            <Route path="direcciones" element={<Addresses />} />
            <Route path="metodos-pago" element={<PaymentMethods />} />
            <Route path="detalles" element={<AccountDetails />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
