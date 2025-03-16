/**
 * @copyright 2025 s4metet
 * @license Apache-2.0
 */

import { ButtonPrimary } from "./Button";

const sitemap = [
  {
    label: 'Ana Sayfa',
    href: '#home'
  },
  {
    label: 'Hakkımda',
    href: '#about'
  },
  {
    label: 'Projelerim',
    href: '#work'
  },
  {
    label: 'Bana Ulaşın',
    href: '#contact'
  }
];

const socials = [
  {
    label: 'GitHub',
    href: 'https://www.github.com/s4metet'
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/sameterenterzi'
  },
  {
    label: 'Twitter X',
    href: 'https://x.com/s4metet'
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/sameterenterzi'
  }
];


const Footer = () => {
  return (
    <footer className="section">
      <div className="container">

        <div className="lg:grid lg:grid-cols-2">

          <div className="mb-10">
            <h2 className="headline-1 mb-8 lg:max-w-[12ch] reveal-up">
              Bir proje fikriniz mi var?
            </h2>

            <ButtonPrimary
              href="mailto:s4metet@gmail.com"
              label="Bana Ulaşın"
              icon="chevron_right"
              classes="reveal-up"
            />
          </div>

          <div className="grid grid-cols-2 gap-4 lg:pl-20">

            <div>
              <p className="mb-2 reveal-up">Site Map</p>

              <ul>
                {sitemap.map(({ label, href }, key) => (
                  <li key={key}>
                    <a
                      href={href}
                      className="block text-sm text-zinc-400 py-1 transition-colors hover:text-zinc-200 reveal-up"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="mb-2 reveal-up">Sosyal Medya</p>

              <ul>
                {socials.map(({ label, href }, key) => (
                  <li key={key}>
                    <a
                      href={href}
                      target="_blank"
                      className="block text-sm text-zinc-400 py-1 transition-colors hover:text-zinc-200 reveal-up"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

          </div>

        </div>

        <div className="flex items-center justify-between pt-10 mb-8">
          <a
            href="/"
            className="logo reveal-up"
          >
            <img
              src="/images/favicon.png"
              width={40}
              height={40}
              alt="Logo"
            />
          </a>

          <p className="text-zinc-500 text-sm reveal-up">
            &copy; 2025 <span className="text-zinc-200">S4metET</span>
          </p>
        </div>

      </div>
    </footer>
  )
}

export default Footer