import { useEffect } from "react";
import ScrollReveal from "scrollreveal";

const socialLinks = [
  {
    href: "https://github.com/S4metET",
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2C6.48603 2 2 6.48604 2 12C2 17.514 6.48603 22 12 22C17.514 22 22 17.514 22 12C22 6.48604 17.514 2 12 2Z" fill="currentColor" />
    </svg>,
    alt: "GitHub",
  },
  {
    href: "https://www.linkedin.com/in/sameterenterzi/",
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M5.75 3C4.24011 3 3 4.24011 3 5.75V18.25C3 19.7599 4.24011 21 5.75 21H18.25C19.7599 21 21 19.7599 21 18.25V5.75C21 4.24011 19.7599 3 18.25 3H5.75Z" fill="currentColor" />
    </svg>,
    alt: "LinkedIn",
  },
];

const Contact = () => {
  useEffect(() => {
    ScrollReveal().reveal(".reveal-up", {
      duration: 800,
      origin: "left",
      distance: "50px",
      easing: "ease-in-out",
      reset: false,
    });
  }, []);

  return (
    <section id="contact" className="section">
      <div className="container lg:grid lg:grid-cols-2 lg:items-stretch">
        <div className="mb-12 lg:mb-0 lg:flex lg:flex-col">
          <h2 className="headline-2 lg:max-w-[12ch] reveal-up">Bana Ulaşın!</h2>

          <p className="text-zinc-400 mt-3 mb-8 max-w-[50ch] lg:max-w-[30ch] reveal-up">
            Benimle iletişime geçin ve projenizin ihtiyaçlarını konuşarak birlikte muazzam bir şey yaratmaya başlayalım!
          </p>

          <div className="flex items-center gap-2 mt-auto">
            {socialLinks.map(({ href, icon }, key) => (
              <a
                key={key}
                href={href}
                target="_blank"
                className="w-12 h-12 grid place-items-center ring-inset ring-2 ring-zinc-50/5 rounded-lg transition-[background-color,color] hover:bg-zinc-50 hover:text-zinc-950 active:bg-zinc-50/80 reveal-up"
              >
                {icon}
              </a>
            ))}
          </div>
        </div>

        <form action="https://getform.io/f/anlqklra" method="POST" className="xl:pl-10 2xl:pl-20">
          <div className="md:grid md:items-center md:grid-cols-2 md:gap-2">
            <div className="mb-4">
              <label htmlFor="name" className="label reveal-up">
                Adınız Soyadınız
              </label>
              <input type="text" name="name" id="name" autoComplete="name" required placeholder="Samet Eren Terzi" className="text-field reveal-up" />
            </div>

            <div className="mb-4">
              <label htmlFor="email" className="label reveal-up">
                E-Posta
              </label>
              <input type="email" name="email" id="email" autoComplete="email" required placeholder="kullanici@example.com" className="text-field reveal-up" />
            </div>
          </div>

          <div className="mb-4">
            <label htmlFor="message" className="label reveal-up">
              Mesaj
            </label>
            <textarea name="message" id="message" placeholder="Merhaba Samet!" required className="text-field resize-y min-h-32 max-h-80 reveal-up"></textarea>
          </div>

          <button type="submit" className="btn btn-primary [&]:max-w-full w-full justify-center reveal-up">
            Gönder
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;