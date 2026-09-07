import { Link, NavLink } from 'react-router-dom';
import SeoHead from '../components/SeoHead';
import './css/LandingPage.css';

function LandingPageLayout({
  title,
  description,
  path,
  schema,
  heroTitle,
  heroDescription,
  tabs = [],
  sections = [],
  children,
}) {
  let accentSectionIndex = 0;

  return (
    <>
      <SeoHead title={title} description={description} path={path} schema={schema} />
      <article className="landing-page">
        <header
          className="landing-hero"
          style={{
            backgroundImage:
              'linear-gradient(135deg, rgba(37, 34, 98, 0.95), rgba(37, 34, 98, 0.75)), url(./interface-images/us-info-image.webp)',
          }}
        >
          <h1>{heroTitle}</h1>
          <p>{heroDescription}</p>
        </header>

        {tabs.length > 0 && (
          <nav className="landing-tabs" aria-label="Navegación por categoría">
            {tabs.map((tab) => (
              <NavLink
                key={tab.path}
                to={tab.path}
                className={({ isActive }) =>
                  `landing-tabs__link${isActive ? ' landing-tabs__link--active' : ''}`
                }
              >
                {tab.label}
              </NavLink>
            ))}
          </nav>
        )}

        {children}

        {sections.map((section) => {
          const isAccent = Boolean(section.accent);
          const accentClasses = isAccent
            ? ` landing-content--accent${
                accentSectionIndex === 0 ? ' landing-content--accent-first' : ''
              }`
            : '';

          if (isAccent) {
            accentSectionIndex += 1;
          }

          return (
            <section
              key={section.title}
              id={section.id}
              className={`landing-content${accentClasses}`}
            >
              <h2 className={isAccent ? 'landing-title--accent' : undefined}>
                {section.title}
              </h2>
              {section.intro && <p className="landing-intro">{section.intro}</p>}
              <div className={`landing-grid${isAccent ? ' landing-grid--accent' : ''}`}>
                {section.items.map((item, index) => {
                  const Icon = item.icon;
                  const cardAccentClass = isAccent
                    ? ` landing-card--accent landing-card--accent-${
                        index % 2 === 0 ? 'green' : 'purple'
                      }`
                    : '';

                  return (
                    <article key={item.name} className={`landing-card${cardAccentClass}`}>
                      {Icon && (
                        <div className="landing-card__badge" aria-hidden="true">
                          <Icon className="landing-card__icon" />
                        </div>
                      )}
                      <h3>{item.name}</h3>
                      <p>{item.description}</p>
                    </article>
                  );
                })}
              </div>
            </section>
          );
        })}

        <section className="landing-cta">
          <h2>¿Listo para organizar tu evento en Bogotá?</h2>
          <p>
            Cuéntanos tu idea y diseñaremos una propuesta personalizada con presupuesto
            ajustado a tus necesidades.
          </p>
          <Link to="/#contact">Solicitar cotización</Link>
        </section>
      </article>
    </>
  );
}

export default LandingPageLayout;
