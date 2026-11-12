import React, { useState } from 'react';
import { ArrowDownRight, ArrowUpRight, Layers, MapPin, MessageCircle, PackageCheck } from 'lucide-react';
import { CUSTOM_COMMISSION_STEPS, STUDIO_INFO } from '../data/studioData.js';
import { buildWhatsAppUrl } from '../utils/whatsapp.js';

export const CustomAndStory = ({ onSelectCustomInOrderForm }) => {
  const [customConcept, setCustomConcept] = useState('');

  const defaultCustomText =
    'Hi Ritika, I have a custom 3D printing requirement and would like to discuss design and pricing.';

  const dynamicCustomWhatsAppUrl = buildWhatsAppUrl(
    customConcept.trim()
      ? `Hi Ritika, I have a custom 3D printing requirement: "${customConcept.trim()}". I would like to discuss design possibilities, pricing and timeline.`
      : defaultCustomText
  );

  return (
    <section id="custom-studio" className="border-b border-[#DFD9CE]">
      {/* Part 1: Dark Architectural Bespoke Commission Block */}
      <div className="bg-[#191715] text-[#FDFBF7] py-16 lg:py-24 border-b border-[#2E2A27]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Column: Custom Order Pitch & Interactive Prompt */}
            <div className="lg:col-span-6 space-y-6">
              <div className="font-mono-tech text-xs uppercase tracking-[0.18em] text-[#C8553D]">
                CUSTOMISATION · BESPOKE COMMISSIONS
              </div>

              <h2 className="font-serif-display text-3xl sm:text-5xl font-medium leading-[1.08] text-[#FDFBF7]">
                Have your own idea?{' '}
                <span className="italic font-normal text-[#E2C2B3]">
                  Custom orders are welcome.
                </span>
              </h2>

              <p className="text-base text-[#D0C9BE] leading-relaxed">
                Looking for a different colour combination, name, message, size or a custom
                3D-printed gift concept? Share your requirement on WhatsApp and Ritika will
                confirm availability, timeline and pricing.
              </p>

              {/* Interactive Custom Concept Input */}
              <div className="bg-[#23201D] border border-[#38332E] p-5 space-y-4">
                <label
                  htmlFor="custom-idea-input"
                  className="block font-mono-tech text-xs uppercase tracking-[0.14em] text-[#E2C2B3]"
                >
                  DESCRIBE YOUR IDEA OR BULK REQUIREMENT (OPTIONAL)
                </label>
                <input
                  id="custom-idea-input"
                  type="text"
                  value={customConcept}
                  onChange={(e) => setCustomConcept(e.target.value)}
                  placeholder="e.g., 20 teacher appreciation desk stands with school logo & gift wrap..."
                  className="w-full bg-[#191715] border border-[#38332E] focus:border-[#C8553D] px-4 py-3 text-sm text-[#FDFBF7] placeholder-[#857E75] focus:outline-none"
                />

                <div className="flex flex-col sm:flex-row gap-3 pt-1">
                  <a
                    href={dynamicCustomWhatsAppUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#1B4D3E] hover:bg-[#236350] text-[#FDFBF7] font-mono-tech text-xs uppercase tracking-[0.14em] transition-colors"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Discuss Custom Order on WhatsApp</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </a>

                  <a
                    href="#order"
                    onClick={() => onSelectCustomInOrderForm('custom', customConcept.trim())}
                    className="inline-flex items-center justify-center gap-2 px-5 py-3.5 border border-[#4A443E] hover:border-[#FDFBF7] text-[#FDFBF7] font-mono-tech text-xs uppercase tracking-[0.14em] transition-colors"
                  >
                    <span>Use Order Form</span>
                    <ArrowDownRight className="w-4 h-4 text-[#C8553D]" />
                  </a>
                </div>
              </div>
            </div>

            {/* Right Column: 3-Step Commission Process */}
            <div className="lg:col-span-6 space-y-6">
              <div className="font-mono-tech text-xs uppercase tracking-[0.16em] text-[#857E75] border-b border-[#2E2A27] pb-3">
                HOW BESPOKE &amp; CUSTOM ORDERS WORK (01 — 03)
              </div>

              <div className="grid grid-cols-1 gap-4">
                {CUSTOM_COMMISSION_STEPS.map((item) => (
                  <div
                    key={item.step}
                    className="bg-[#23201D] border border-[#38332E] p-6 flex items-start gap-5"
                  >
                    <span className="font-mono-tech text-2xl sm:text-3xl font-semibold text-[#C8553D] shrink-0">
                      {item.step}
                    </span>
                    <div className="space-y-1.5">
                      <h3 className="font-serif-display text-2xl font-medium text-[#FDFBF7]">
                        {item.title}
                      </h3>
                      <p className="text-sm sm:text-base text-[#D0C9BE] leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Bulk & Gift Packaging Callout */}
              <div className="border border-[#38332E] bg-[#1F1C19] p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="space-y-1">
                  <div className="font-mono-tech text-xs uppercase tracking-[0.14em] text-[#E2C2B3]">
                    CORPORATE, RETURN GIFTS &amp; BULK ORDERS
                  </div>
                  <p className="text-xs sm:text-sm text-[#D0C9BE]">
                    Minimum order quantity is <strong className="text-[#FDFBF7]">15 pieces</strong>.
                    Gift packaging is available for bulk orders on request at an additional charge.
                  </p>
                </div>
                <a
                  href="#order"
                  onClick={() =>
                    onSelectCustomInOrderForm(
                      'custom',
                      'Bulk order enquiry (15+ pieces)'
                    )
                  }
                  className="shrink-0 font-mono-tech text-xs uppercase tracking-[0.14em] text-[#C8553D] hover:underline"
                >
                  Select Bulk Option ↓
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Part 2: About the Brand & Founder Story (Warm Daylight Surface) */}
      <div id="about" className="bg-[#FDFBF7] py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Brand Emblem & Studio Provenance Card */}
            <div className="lg:col-span-5">
              <div className="bg-[#F6F3EC] border border-[#DFD9CE] p-6 sm:p-8 space-y-6">
                <div className="flex items-center justify-between border-b border-[#DFD9CE] pb-4 font-mono-tech text-xs text-[#57524C]">
                  <span>STUDIO PROVENANCE</span>
                  <span>EST. {STUDIO_INFO.established.toUpperCase()}</span>
                </div>

                <div className="aspect-square max-w-[260px] mx-auto overflow-hidden border border-[#191715]/15 bg-[#FDFBF7] p-3">
                  <img
                    src={STUDIO_INFO.logoUrl}
                    alt="3D Printing By Ritika circular logo"
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4 pt-2 border-t border-[#DFD9CE] text-xs">
                  <div>
                    <div className="font-mono-tech text-[#857E75] uppercase">FOUNDER</div>
                    <div className="font-semibold text-[#191715] mt-0.5">{STUDIO_INFO.founder}</div>
                  </div>
                  <div>
                    <div className="font-mono-tech text-[#857E75] uppercase">ORIGIN</div>
                    <div className="font-semibold text-[#191715] mt-0.5">{STUDIO_INFO.location}</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Editorial Brand Narrative */}
            <div className="lg:col-span-7 space-y-6">
              <div className="font-mono-tech text-xs uppercase tracking-[0.18em] text-[#C8553D]">
                ABOUT THE BRAND · FOUNDED BY {STUDIO_INFO.founder.toUpperCase()}
              </div>

              <h2 className="font-serif-display text-3xl sm:text-5xl text-[#191715] font-medium leading-[1.08]">
                Personal gifts with a thoughtful, modern touch.
              </h2>

              <div className="space-y-4 text-base sm:text-lg text-[#57524C] leading-relaxed">
                <p>
                  Founded by <strong className="text-[#191715] font-semibold">Ritika Goel</strong> in{' '}
                  <strong className="text-[#191715] font-semibold">October 2026</strong> and based in{' '}
                  <strong className="text-[#191715] font-semibold">Shamli, Uttar Pradesh</strong>,{' '}
                  <strong className="text-[#191715] font-semibold">3D PRINTING BY RITIKA</strong>{' '}
                  creates customised 3D-printed desk accessories and gift items designed around
                  names, initials, colours and personal messages.
                </p>
                <p>
                  Every piece is prepared after order confirmation and shipped across India via
                  DTDC, with local pickup also available in Shamli.
                </p>
              </div>

              {/* 3 Craft Pillars */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-[#DFD9CE]">
                <div className="bg-[#F6F3EC] border border-[#DFD9CE] p-4 space-y-1.5">
                  <Layers className="w-4 h-4 text-[#C8553D]" />
                  <div className="font-mono-tech text-xs font-semibold uppercase text-[#191715]">
                    Individually Printed
                  </div>
                  <p className="text-xs text-[#57524C] leading-relaxed">
                    Every piece is made to order around your exact spelling, initial and colour palette.
                  </p>
                </div>

                <div className="bg-[#F6F3EC] border border-[#DFD9CE] p-4 space-y-1.5">
                  <PackageCheck className="w-4 h-4 text-[#C8553D]" />
                  <div className="font-mono-tech text-xs font-semibold uppercase text-[#191715]">
                    Verified Dispatch
                  </div>
                  <p className="text-xs text-[#57524C] leading-relaxed">
                    6–7 days studio preparation followed by tracked Pan-India courier delivery via DTDC.
                  </p>
                </div>

                <div className="bg-[#F6F3EC] border border-[#DFD9CE] p-4 space-y-1.5">
                  <MapPin className="w-4 h-4 text-[#C8553D]" />
                  <div className="font-mono-tech text-xs font-semibold uppercase text-[#191715]">
                    Shamli Studio Pickup
                  </div>
                  <p className="text-xs text-[#57524C] leading-relaxed">
                    Local customers in Shamli, Uttar Pradesh can arrange direct studio pickup via WhatsApp.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
