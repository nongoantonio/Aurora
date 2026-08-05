import { buildWhatsAppLink } from '../config';

export default function WhatsAppButton() {
  const href = buildWhatsAppLink('Olá! Gostaria de saber mais sobre a Aurora Cloud.');

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-fab"
      aria-label="Falar connosco no WhatsApp"
    >
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
        <path
          d="M12 3.5a8.4 8.4 0 0 0-7.2 12.7L3.5 20.5l4.4-1.3A8.4 8.4 0 1 0 12 3.5Z"
          stroke="#fff"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        <path
          d="M9 8.6c.2-.5.4-.5.6-.5h.5c.15 0 .35 0 .5.4.2.5.6 1.6.7 1.7.1.15.15.3.05.5-.1.2-.15.3-.3.45-.15.15-.3.3-.4.4-.15.15-.3.3-.15.55.15.25.7 1.15 1.5 1.85 1 .9 1.85 1.2 2.1 1.35.25.15.4.1.55-.05.15-.15.6-.7.75-.95.15-.25.3-.2.5-.1.2.05 1.3.6 1.5.7.2.1.35.15.4.25.05.1.05.55-.15 1.1-.2.5-1.15 1-1.6 1.05-.4.05-.9.1-3-.8-2.55-1.1-4.15-3.6-4.3-3.8-.15-.2-1-1.3-1-2.5s.6-1.75.85-2Z"
          fill="#fff"
        />
      </svg>
      <span className="whatsapp-fab__pulse" />
    </a>
  );
}
