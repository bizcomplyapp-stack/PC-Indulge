const services = [
  { num: "01", title: "Office Meetings", price: "From R1,500", meta: "Labour", image: "/brand/office-meetings.jpg", text: "Perfect for small team meetings, executive lunches and office gatherings." },
  { num: "02", title: "Intimate Home Events", price: "From R1,800", meta: "Labour · up to 10 guests", image: "/brand/home-events.jpg", text: "For birthdays, family celebrations, small gatherings and special occasions." },
  { num: "03", title: "Intimate Dinner Party", price: "From R2,000", meta: "Labour · up to 12 guests", image: "/brand/dinner-party.jpg", text: "A private dining experience, prepared by a professional chef in the comfort of your home." },
  { num: "04", title: "Proposal & Special Occasion", price: "From R2,500", meta: "Labour", image: "/brand/special-occasion.jpg", text: "For proposals, anniversaries, romantic dinners and milestone celebrations." },
];

export default function Home() {
  const whatsapp = "https://wa.me/27827835552?text=Hello%20Chef%20Sindi%2C%20I%27d%20like%20to%20enquire%20about%20a%20private%20chef%20experience.";
  return (
    <main>
      <header className="nav-shell">
        <a className="brand logo-image" href="#home" aria-label="PC Indulge home"><img src="/brand/pc-indulge-logo.png" alt="PC Indulge — Nourish & Taste" /></a>
        <input type="checkbox" id="menu-toggle" className="menu-toggle" aria-label="Toggle navigation" />
        <label htmlFor="menu-toggle" className="menu-button"><i></i><i></i></label>
        <nav>
          <a href="#about">About</a><a href="#services">Services</a><a href="#process">How it works</a><a href="#contact">Contact</a>
          <a className="nav-cta" href={whatsapp} target="_blank" rel="noreferrer">Book a table</a>
        </nav>
      </header>

      <section className="hero" id="home">
        <div className="hero-image" role="img" aria-label="Private chef plating a fine dining meal" />
        <div className="hero-shade" />
        <div className="hero-content">
          <img className="hero-logo" src="/brand/pc-indulge-logo.png" alt="PC Indulge — Nourish & Taste" />
          <p className="eyebrow">Private chef experiences</p>
          <h1>Your table.<br/><em>Beautifully</em> indulged.</h1>
          <p className="hero-copy">Bespoke dining, prepared with care and served in the comfort of your chosen space.</p>
          <div className="hero-actions"><a className="button gold" href={whatsapp} target="_blank" rel="noreferrer">Plan your experience <span>↗</span></a><a className="text-link" href="#services">Explore services ↓</a></div>
        </div>
        <div className="hero-note"><span>Chef-led</span><span>Personal</span><span>Unforgettable</span></div>
      </section>

      <section className="about section" id="about">
        <div className="section-label">01 — Our story</div>
        <div className="about-copy"><p className="script">More than a meal</p><h2>We create moments that <em>linger.</em></h2><p>PC Indulge brings restaurant-quality dining into your home, office or special setting. Led by Chef Sindi Shozi, every experience is considered from the first conversation to the final plate—personal, generous and quietly luxurious.</p><div className="signature">Sindi <span>Chef &amp; Founder</span></div></div>
        <div className="about-photo"><img src="/brand/booking-terms.jpg" alt="PC Indulge private chef booking terms"/><div className="photo-caption">Personal menus<br/>Thoughtful service</div></div>
      </section>

      <section className="services section" id="services">
        <div className="section-top"><div><p className="script light">Made for your moment</p><h2>Signature <em>experiences</em></h2></div><p>Choose your occasion. We’ll shape the menu and service around the atmosphere you want to create.</p></div>
        <div className="service-slideshow">{services.map((s) => <article className="service-slide" key={s.num}><img src={s.image} alt=""/><div><span>{s.num}</span><h3>{s.title}</h3><p>{s.text}</p><strong>{s.price} <small>{s.meta}</small></strong></div></article>)}</div>
        <div className="service-note"><span>Good to know</span><p>Food is purchased by the client. Transport is charged separately.</p></div>
      </section>

      <section className="process section" id="process">
        <div className="process-photo"><img src="https://fra1.digitaloceanspaces.com/chefspace/media/cache/41/ac/41acf9d16b57486f4f17f990bc378297.jpg" alt="Elegant private dining place setting"/><div className="seal"><b>PC</b><span>Made with care</span></div></div>
        <div className="process-copy"><div className="section-label">02 — How it works</div><p className="script">Simple by design</p><h2>From your idea<br/>to the <em>table.</em></h2>
          <ol><li><span>01</span><div><h3>Share your occasion</h3><p>Tell us your date, guest count, location and what you’re celebrating.</p></div></li><li><span>02</span><div><h3>Curate the details</h3><p>We align on the menu, dietary needs and the feeling you want to create.</p></div></li><li><span>03</span><div><h3>Confirm your booking</h3><p>A 50% deposit secures your date. Then you can simply look forward to it.</p></div></li><li><span>04</span><div><h3>Indulge</h3><p>Chef Sindi brings your private dining experience to life.</p></div></li></ol>
        </div>
      </section>

      <section className="why section">
        <div className="section-label">03 — The PC Indulge touch</div><div className="why-intro"><p className="script">Why choose us</p><h2>Luxury that feels<br/><em>effortless.</em></h2></div>
        <div className="why-grid"><div><span>✦</span><h3>Personal by nature</h3><p>Your occasion, preferences and guests guide every detail.</p></div><div><span>◌</span><h3>Crafted with care</h3><p>Considered menus and elegant presentation, made just for you.</p></div><div><span>◇</span><h3>Beautifully at ease</h3><p>Warm, attentive service that lets you be fully present.</p></div></div>
      </section>

      <section className="terms section" id="terms">
        <div><div className="section-label">04 — Booking terms</div><p className="script">The finer details</p><h2>Clear, considered<br/>&amp; <em>simple.</em></h2></div>
        <div className="terms-list"><div><span>Secure your date</span><p>A 50% deposit is required to confirm and secure your booking.</p></div><div><span>Final payment</span><p>The outstanding balance is payable before the event or service begins.</p></div><div><span>Additional charges</span><p>Additional guests, chef or service staff, extended hours, transport, and special equipment or tableware may incur extra charges.</p></div><div><span>Ingredients</span><p>Food is purchased by the client, allowing every menu to be fresh, flexible and transparent.</p></div></div>
      </section>

      <section className="contact" id="contact"><div className="contact-inner"><p className="script light">Let’s make it memorable</p><h2>Ready to indulge?</h2><p>Tell Chef Sindi about your occasion and let’s create something beautiful for your table.</p><a className="button gold" href={whatsapp} target="_blank" rel="noreferrer">Chat on WhatsApp <span>↗</span></a><div className="contact-person"><small>Your private chef</small><strong>Chef Sindi Shozi</strong><a href="tel:+27827835552">082 783 5552</a></div></div></section>

      <footer><a className="brand footer-brand logo-image" href="#home"><img src="/brand/pc-indulge-logo.png" alt="PC Indulge — Nourish & Taste" /></a><div className="footer-links"><a href="#about">About</a><a href="#services">Services</a><a href="#process">How it works</a><a href="#terms">Terms</a></div><p>Private chef experiences crafted with care.</p><small>© 2026 PC Indulge. All rights reserved.</small></footer>
      <a className="floating-wa" href={whatsapp} target="_blank" rel="noreferrer" aria-label="Chat with Chef Sindi on WhatsApp">WA</a>
    </main>
  );
}
