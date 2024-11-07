const FOOTER_CONTENT = {
    sections: [
      {
        title: "SERVICIOS LEGALES",
        links: [
          { text: "Litigio Laboral", url: "#" },
          { text: "Consultoría en Derecho Laboral", url: "#" },
          { text: "Prevención de Conflictos", url: "#" },
          { text: "Asesoría en Normas Laborales", url: "#" },
        ],
      },
      {
        title: "RECURSOS",
        links: [
          { text: "Artículos Legales", url: "#" },
          { text: "Preguntas Frecuentes", url: "#" },
          { text: "Eventos y Conferencias", url: "#" },
        ],
      },
      {
        title: "CONTÁCTANOS",
        links: [
          { text: "Ubicación en Guatemala", url: "#" },
          { text: "Teléfono: +502 2332 6060", url: "tel:+50223326060" },
          { text: "Correo: info@caniz-avila.com", url: "mailto:info@caniz-avila.com" },
        ],
      },
    ],
    
    platformsText:
      "Síguenos en | Facebook | LinkedIn",
    copyrightText: "© 2024 Caniz, Ávila & Asociados. Todos los derechos reservados.",
  };
  
export const Footer = () => {
  return (
    <footer className="mt-20 text-neutral-400">
    <div className="max-w-7xl mx-auto px-4 border-t border-neutral-800">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-20">
            {
                FOOTER_CONTENT.sections.map((section, index) => (
                    <div key={index}>
                        <h3 className="text-neutral-700 font-medium mb-4">
                            {section.title}
                        </h3>
                        <ul className="space-y-2">
                            {
                                section.links.map((link, linkIndex) => (
                                    <li key={linkIndex}>
                                        <a href={link.url} className="hover:text-neutral-500">
                                            {link.text}
                                        </a>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                ))
            }
            <div className="flex justify-center items-center">
                <img src="/logo.png" alt="Logo de Caniz, Ávila & Asociados" className="w-36 h-36 object-contain" />
            </div>
        </div>
        <div className="my-12 border-t border-neutral-800 pt-8 text-center text-sm text-neutral-500">
            <div className="flex justify-between">
                <div className="text-xs text-neutral-600">
                    <p>{FOOTER_CONTENT.copyrightText}</p>
                </div>
                <div className="text-xs text-neutral-600">
                    <p>{FOOTER_CONTENT.platformsText}</p>
                </div>
            </div>
        </div>
    </div>
</footer>

  )
}
