import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import OrganizacionEventosBogota from './pages/OrganizacionEventosBogota';
import EventosCorporativosBogota from './pages/EventosCorporativosBogota';
import EventosSocialesCulturalesBogota from './pages/EventosSocialesCulturalesBogota';
import BrandingActivacionesMarcaBogota from './pages/BrandingActivacionesMarcaBogota';
import OrganizacionBodasQuinceanosBogota from './pages/OrganizacionBodasQuinceanosBogota';
import ServiciosParaEventosBogota from './pages/ServiciosParaEventosBogota';
import AlquilerMobiliarioBogota from './pages/AlquilerMobiliarioBogota';
import AlquilerSonidoLucesBogota from './pages/AlquilerSonidoLucesBogota';
import CateringRefrigeriosBogota from './pages/CateringRefrigeriosBogota';
import CoffeeBreakBogota from './pages/CoffeeBreakBogota';
import LogisticaProduccionEventosBogota from './pages/LogisticaProduccionEventosBogota';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="organizacion-de-eventos-bogota" element={<OrganizacionEventosBogota />} />
        <Route path="eventos-corporativos-bogota" element={<EventosCorporativosBogota />} />
        <Route
          path="eventos-sociales-y-culturales-bogota"
          element={<EventosSocialesCulturalesBogota />}
        />
        <Route
          path="branding-y-activaciones-de-marca-bogota"
          element={<BrandingActivacionesMarcaBogota />}
        />
        <Route
          path="organizacion-de-bodas-y-quince-anos-bogota"
          element={<OrganizacionBodasQuinceanosBogota />}
        />
        <Route path="servicios-para-eventos-bogota" element={<ServiciosParaEventosBogota />} />
        <Route
          path="alquiler-de-mobiliario-para-eventos-bogota"
          element={<AlquilerMobiliarioBogota />}
        />
        <Route
          path="alquiler-de-sonido-y-luces-para-eventos-bogota"
          element={<AlquilerSonidoLucesBogota />}
        />
        <Route
          path="catering-y-refrigerios-para-eventos-bogota"
          element={<CateringRefrigeriosBogota />}
        />
        <Route path="coffee-break-para-eventos-bogota" element={<CoffeeBreakBogota />} />
        <Route
          path="logistica-y-produccion-de-eventos-bogota"
          element={<LogisticaProduccionEventosBogota />}
        />
      </Route>
    </Routes>
  );
}

export default App;
