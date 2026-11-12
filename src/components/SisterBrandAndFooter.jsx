import React from 'react';
import { ArrowUpRight, Download, Instagram, MessageCircle, Phone } from 'lucide-react';
import { STUDIO_INFO } from '../data/studioData.js';
import { buildWhatsAppUrl } from '../utils/whatsapp.js';

export const SisterBrandAndFooter = () => {
  const finalCtaWhatsAppUrl = buildWhatsAppUrl(
    'Hi Ritika, I have a question about your 3D printed products.'
  );

  const floatingWhatsAppUrl = buildWhatsAppUrl(
    'Hi Ritika, I visited your website and want to place an order.'
  );

  return (
    <>
      {/* Sister Business Spotlight: Sweet Cravings by Ritika */}
      <section className="py-16 lg:py-24 bg-[#F6F3EC] border-b border-[#DFD9CE]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#FDFBF7] border border-[#DFD9CE] p-6 sm:p-10 lg:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              <div className="lg:col-span-6 space-y-5">
                <div className="font-mono-tech text-xs uppercase tracking-[0.18em] text-[#C8553D]">
                  {STUDIO_INFO.sisterBusiness.eyebrow}
                </div>

                <h2 className="font-serif-display text-3xl sm:text-5xl text-[#191715] font-medium leading-[1.08]">
                  {STUDIO_INFO.sisterBusiness.heading}
                </h2>

                <p className="text-base sm:text-lg text-[#57524C] leading-relaxed">
                  <strong className="text-[#191715] font-semibold">
                    {STUDIO_INFO.sisterBusiness.name}
                  </strong>{' '}
                  — handcrafted cakes and sweet creations. Explore the profile and follow along
                  on Instagram.
                </p>

                <div className="pt-2">
                  <a
                    href={STUDIO_INFO.sisterBusiness.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2.5 px-6 py-3.5 bg-[#191715] hover:bg-[#312D2A] text-[#FDFBF7] font-mono-tech text-xs uppercase tracking-[0.14em] transition-colors"
                  >
                    <Instagram className="w-4 h-4 text-[#C8553D]" />
                    <span>INSTAGRAM · {STUDIO_INFO.sisterBusiness.instagramHandle}</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>
              </div>

              <div className="lg:col-span-6">
                <a
                  href={STUDIO_INFO.sisterBusiness.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visit Sweet Cravings by Ritika on Instagram"
                  className="block overflow-hidden border border-[#DFD9CE] bg-[#EFEAE1] group"
                >
                  <img
                    src={STUDIO_INFO.sisterBusiness.imageUrl}
                    alt="Sweet Cravings by Ritika Instagram profile screenshot"
                    className="w-full h-auto object-cover group-hover:scale-[1.02] transition-transform duration-500"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final Conversion Section before Footer */}
      <section className="bg-[#191715] text-[#FDFBF7] py-16 lg:py-24 border-b border-[#2E2A27]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-5">
              <div className="font-mono-tech text-xs uppercase tracking-[0.18em] text-[#C8553D]">
                LET&apos;S MAKE SOMETHING PERSONAL
              </div>

              <h2 className="font-serif-display text-4xl sm:text-6xl font-medium text-[#FDFBF7] leading-none">
                Say hello to Ritika.
              </h2>

              <div className="space-y-2 text-base sm:text-lg text-[#D0C9BE]">
                <p>
                  {STUDIO_INFO.founder} · {STUDIO_INFO.location} · Delivering across India
                </p>
                <p className="font-mono-tech text-sm sm:text-base text-[#FDFBF7] flex items-center gap-2">
                  <Phone className="w-4 h-4 text-[#C8553D]" />
                  <span>Call / WhatsApp: {STUDIO_INFO.phoneDisplay}</span>
                </p>
              </div>

              {/* Social Links */}
              <div className="pt-3 flex flex-wrap items-center gap-6 font-mono-tech text-xs uppercase tracking-[0.15em]">
                <a
                  href={STUDIO_INFO.socials.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#FDFBF7] hover:text-[#C8553D] transition-colors flex items-center gap-1"
                >
                  <span>INSTAGRAM</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
                <span className="text-[#4A443E]">/</span>
                <a
                  href={STUDIO_INFO.socials.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#D0C9BE] hover:text-[#FDFBF7] transition-colors"
                >
                  FACEBOOK
                </a>
                <span className="text-[#4A443E]">/</span>
                <a
                  href={STUDIO_INFO.socials.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#D0C9BE] hover:text-[#FDFBF7] transition-colors"
                >
                  YOUTUBE
                </a>
              </div>
            </div>

            <div className="lg:col-span-5 flex lg:justify-end">
              <div className="w-full lg:max-w-sm bg-[#23201D] border border-[#38332E] p-6 sm:p-8 space-y-5">
                <div className="font-mono-tech text-xs uppercase tracking-[0.14em] text-[#E2C2B3]">
                  DIRECT WHATSAPP STUDIO DESK
                </div>
                <p className="text-sm text-[#D0C9BE] leading-relaxed">
                  Ready to personalise a gift, check colour options, or enquire about a bulk order?
                  Start a direct WhatsApp chat with Ritika.
                </p>
                <a
                  href={finalCtaWhatsAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-4 px-6 bg-[#1B4D3E] hover:bg-[#236350] text-[#FDFBF7] font-mono-tech text-xs sm:text-sm uppercase tracking-[0.14em] transition-colors flex items-center justify-center gap-2.5"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>CHAT ON WHATSAPP ↗</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Architectural Footer + GitHub / Source Download Link */}
      <footer className="bg-[#12100E] text-[#A0988E] py-8 border-t border-[#23201D]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-mono-tech">
          <span>
            © 2026 {STUDIO_INFO.brandName} · {STUDIO_INFO.founder}
          </span>
          <span>{STUDIO_INFO.tagline} · Shamli, India</span>
          <div className="flex flex-wrap items-center gap-4">
            <a href="#policies" className="hover:text-[#FDFBF7] transition-colors">
              Policies
            </a>
            <span>·</span>
            <a href="#faq" className="hover:text-[#FDFBF7] transition-colors">
              FAQs
            </a>
            <span>·</span>
            <a href="#order" className="hover:text-[#FDFBF7] transition-colors">
              Order Form
            </a>
            <span>·</span>
            <a
              href={STUDIO_INFO.projectZipUrl}
              download="3d-printing-by-ritika-react-js.zip"
              className="inline-flex items-center gap-1.5 text-[#E2C2B3] hover:text-[#FDFBF7] underline transition-colors"
            >
              <Download className="w-3.5 h-3.5 text-[#C8553D]" />
              <span>Download React JS Code (.ZIP)</span>
            </a>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Concierge Button */}
      <a
        href={floatingWhatsAppUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Order on WhatsApp"
        className="fixed right-3 bottom-3 z-50 inline-flex items-center gap-2 px-4 py-2.5 bg-[#1B4D3E] hover:bg-[#13382D] text-[#FDFBF7] border border-[#FDFBF7]/25 shadow-[0_10px_24px_rgba(0,0,0,0.25)] font-mono-tech text-[11px] uppercase tracking-[0.14em] transition-transform hover:-translate-y-0.5"
      >
        <MessageCircle className="w-3.5 h-3.5 text-[#25D366]" />
        <span>WhatsApp</span>
      </a>
    </>
  );
};
