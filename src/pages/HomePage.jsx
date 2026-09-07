import { Suspense, lazy, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import SeoHead from '../components/SeoHead';
import Banner from '../components/Banner';
import UsInfo from '../components/UsInfo';
import HowWork from '../components/HowWork';
import { buildLocalBusinessSchema } from '../seo/siteConfig';

const WorkTeam = lazy(() => import('../components/WorkTeam'));
const Contact = lazy(() => import('../components/Contact'));

function HomePage() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const sectionId = location.hash.replace('#', '');
      const timer = setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 200);
      return () => clearTimeout(timer);
    }
  }, [location.hash]);

  return (
    <>
      <SeoHead
        title="Ideando Eventos y Marketing | Organización de Eventos en Bogotá"
        description="Agencia de organización de eventos en Bogotá. Planificamos y ejecutamos eventos corporativos, empresariales y sociales con sonido, mobiliario, catering y logística integral."
        path="/"
        schema={buildLocalBusinessSchema()}
      />
      <Banner />
      <UsInfo />
      <HowWork />
      <Suspense fallback={null}>
        <WorkTeam />
        <Contact />
      </Suspense>
    </>
  );
}

export default HomePage;
