const brands = ['Nébula', 'Vórtex', 'Solstice', 'Orbital', 'Ignis', 'Cintra', 'Meridian', 'Prisma'];

export default function LogosStrip() {
  const loop = [...brands, ...brands];

  return (
    <section className="logos">
      <p className="logos__label">Empresas que confiam na Aurora para crescer online</p>
      <div className="logos__track-wrap">
        <div className="logos__track">
          {loop.map((b, i) => (
            <span key={`${b}-${i}`} className="logos__item">
              {b}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
