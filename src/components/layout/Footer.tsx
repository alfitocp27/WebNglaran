import { Mail, Phone, Play } from 'lucide-react'
import { contactInfo } from '@/src/data/contact'

export default function Footer() {
  return (
    <footer
      id="kontak"
      aria-label="Kontak dan informasi"
      className="bg-zinc-900 dark:bg-[#0a0a0b] pt-24 lg:pt-32 pb-8 px-6 lg:px-12 xl:px-32 relative flex flex-col mt-auto"
    >
      <div className="max-w-7xl mx-auto w-full">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-16 lg:gap-24 mb-16 lg:mb-24">
          <div className="lg:w-3/5">
            <h2 className="font-serif font-bold text-6xl md:text-8xl lg:text-[100px] leading-none tracking-tighter text-white mb-8">
              Mari
              <br />
              Terhubung.
            </h2>
            <p className="text-zinc-400 text-sm md:text-base max-w-sm leading-relaxed font-light">
              Kunjungi Balai Padukuhan Nglaran atau hubungi kami secara digital. Kami selalu
              terbuka untuk kolaborasi dan silaturahmi.
            </p>
          </div>

          <div className="lg:w-2/5 grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-8 pt-4">
            <div>
              <h4 className="text-xs uppercase tracking-widest font-bold text-zinc-600 mb-6 border-b border-zinc-800 pb-2">
                Kantor Padukuhan
              </h4>
              <ul className="space-y-3 text-zinc-300 text-sm">
                {contactInfo.address.map((line) => (
                  <li key={line}>{line}</li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-xs uppercase tracking-widest font-bold text-zinc-600 mb-6 border-b border-zinc-800 pb-2">
                Kontak & Media
              </h4>
              <ul className="space-y-4 text-zinc-300 text-sm">
                <li>
                  <a
                    href={`mailto:${contactInfo.email}`}
                    className="hover:text-white transition-colors font-medium flex items-center gap-2 py-2 min-h-[44px]"
                  >
                    <Mail className="w-4 h-4" aria-hidden="true" />
                    {contactInfo.email}
                  </a>
                </li>
                <li>
                  <a
                    href={`tel:${contactInfo.phone}`}
                    className="hover:text-white transition-colors flex items-center gap-2 py-2 min-h-[44px]"
                  >
                    <Phone className="w-4 h-4" aria-hidden="true" />
                    {contactInfo.phone}
                  </a>
                </li>
                <li className="pt-2 flex flex-col gap-4">
                  <a
                    href={contactInfo.social.instagram}
                    className="flex items-center gap-2 hover:text-white transition-colors group text-zinc-500 text-xs font-bold uppercase tracking-widest"
                  >
                    <svg className="w-4 h-4 text-zinc-500 group-hover:text-white transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                    </svg>
                    Instagram
                  </a>
                  <a
                    href={contactInfo.social.youtube}
                    className="flex items-center gap-2 hover:text-white transition-colors group text-zinc-500 text-xs font-bold uppercase tracking-widest"
                  >
                    <Play className="w-4 h-4 text-zinc-500 group-hover:text-white transition-colors" aria-hidden="true" />
                    YouTube
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center text-zinc-500 text-xs tracking-widest uppercase font-bold border-t border-zinc-800 pt-8 mt-12">
          <p>&copy; 2026 Padukuhan Nglaran. Hak Cipta Dilindungi.</p>
        </div>
      </div>
    </footer>
  )
}
