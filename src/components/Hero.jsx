import React, { useState } from 'react';
import { ArrowDownRight, ArrowUpRight, MessageCircle } from 'lucide-react';
import { PRODUCTS, STUDIO_INFO } from '../data/studioData.js';
import { buildWhatsAppUrl } from '../utils/whatsapp.js';

export const Hero = ({ onQuickConfigureProduct }) => {
  const [activeProduct, setActiveProduct] = useState(PRODUCTS[0]);

  const heroWhatsAppUrl = buildWhatsAppUrl(
    'Hi Ritika, I would like to place an order with 3D PRINTING BY RITIKA.'
  );

  const activeProductWhatsAppUrl = buildWhatsAppUrl(activeProduct.whatsappPresetText);

  return (
    <section
      id="top"
      className="relative border-b border-[#DFD9CE] bg-architectural-grid overflow-hidden"
    >
      {/* Top Studio Metadata Bar — Zero-Pill Unboxed Kicker */}
      <div className="border-b border-[#DFD9CE] bg-[#EFEAE1]/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2.5 flex flex-wrap items-center justify-between gap-4 text-xs font-mono-tech text-[#57524C]">
          <div className="flex items-center gap-2 sm:gap-3 flex-wrap">
            <span className="uppercase tracking-[0.14em] text-[#191715] font-semibold">
              MADE TO ORDER
            </span>
            <span aria-hidden="true">·</span>
            <span>CUSTOM 3D PRINTED GIFTS</span>
            <span aria-hidden="true" className="hidden sm:inline">
              ·
            </span>
            <span className="hidden sm:inline">PAN-INDIA DELIVERY VIA DTDC</span>
          </div>
          <div className="flex items-center gap-3">
            <span>FOUNDER: {STUDIO_INFO.founder.toUpperCase()}</span>
            <span aria-hidden="true">/</span>
            <a
              href={heroWhatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#1B4D3E] font-semibold hover:underline"
            >
              WA: {STUDIO_INFO.phoneDisplay} ↗
            </a>
          </div>
        </div>
      </div>

      {/* Main Split Editorial Stage */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          {/* Left Column: Editorial Statement & Primary Conversion */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="font-mono-tech text-xs uppercase tracking-[0.18em] text-[#C8553D]">
                STUDIO ATELIER · SHAMLI, UTTAR PRADESH · EST. {STUDIO_INFO.established.toUpperCase()}
              </div>

              <h1 className="font-serif-display text-4xl sm:text-6xl lg:text-[4.1rem] leading-[1.04] tracking-tight text-[#191715] font-medium">
                Gifts made{' '}
                <span className="italic font-normal text-[#C8553D]">just for you</span>,
                sculpted layer by layer.
              </h1>

              <p className="text-base sm:text-lg text-[#57524C] leading-relaxed max-w-2xl">
                Personalised 3D-printed desk stands, name plaques and thoughtful keepsakes
                crafted to order by <strong className="text-[#191715] font-semibold">Ritika Goel</strong> in
                Shamli, Uttar Pradesh — customised with your chosen colours, initials, names
                and messages, and delivered across India.
              </p>
            </div>

            {/* Dual Primary CTA Block */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-1">
              <a
                href={heroWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 px-7 py-3.5 bg-[#1B4D3E] hover:bg-[#13382D] text-[#FDFBF7] text-xs sm:text-sm font-mono-tech uppercase tracking-[0.14em] transition-all shadow-sm"
              >
                <MessageCircle className="w-4 h-4 shrink-0" />
                <span>Order on WhatsApp</span>
                <ArrowUpRight className="w-4 h-4 shrink-0" />
              </a>

              <a
                href="#order"
                onClick={() => onQuickConfigureProduct(activeProduct.id)}
                className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 bg-[#FDFBF7] hover:bg-[#EFEAE1] text-[#191715] border border-[#191715] text-xs sm:text-sm font-mono-tech uppercase tracking-[0.14em] transition-colors"
              >
                <span>Build Custom Order</span>
                <ArrowDownRight className="w-4 h-4 shrink-0 text-[#C8553D]" />
              </a>
            </div>

            {/* Architectural Studio Credentials Ledger */}
            <div className="grid grid-cols-2 sm:grid-cols-4 border-t border-b border-[#DFD9CE] py-4 gap-5 bg-[#FDFBF7]/60 px-4">
              <div>
                <div className="font-mono-tech text-xs text-[#857E75] uppercase tracking-wider">
                  CATALOGUE RANGE
                </div>
                <div className="font-mono-tech text-lg sm:text-xl font-semibold text-[#191715] mt-1">
                  ₹499 – ₹750
                </div>
                <div className="text-xs text-[#57524C] mt-0.5">+ Custom quotes</div>
              </div>

              <div className="border-l border-[#DFD9CE] pl-4">
                <div className="font-mono-tech text-xs text-[#857E75] uppercase tracking-wider">
                  STUDIO PREP
                </div>
                <div className="font-mono-tech text-lg sm:text-xl font-semibold text-[#191715] mt-1">
                  6–7 Days
                </div>
                <div className="text-xs text-[#57524C] mt-0.5">Crafted to order</div>
              </div>

              <div className="sm:border-l border-[#DFD9CE] sm:pl-4">
                <div className="font-mono-tech text-xs text-[#857E75] uppercase tracking-wider">
                  DISPATCH
                </div>
                <div className="font-mono-tech text-lg sm:text-xl font-semibold text-[#191715] mt-1">
                  Pan India
                </div>
                <div className="text-xs text-[#57524C] mt-0.5">DTDC · 3–4 days transit</div>
              </div>

              <div className="border-l border-[#DFD9CE] pl-4">
                <div className="font-mono-tech text-xs text-[#857E75] uppercase tracking-wider">
                  BULK ORDERS
                </div>
                <div className="font-mono-tech text-lg sm:text-xl font-semibold text-[#191715] mt-1">
                  15+ Pieces
                </div>
                <div className="text-xs text-[#57524C] mt-0.5">Optional gift wrap</div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Specimen Showcase */}
          <div className="lg:col-span-5 bg-[#FDFBF7] border border-[#191715]/15 p-4 sm:p-6 shadow-[0_16px_40px_-15px_rgba(25,23,21,0.08)]">
            {/* Top Specimen Header */}
            <div className="flex items-center justify-between pb-3 mb-4 border-b border-[#DFD9CE]">
              <div className="flex items-center gap-2 font-mono-tech text-xs uppercase tracking-[0.14em] text-[#57524C]">
                <span className="text-[#C8553D] font-semibold">{activeProduct.catalogCode}</span>
                <span>/</span>
                <span>{activeProduct.category}</span>
              </div>
              <span className="font-mono-tech text-base font-semibold text-[#191715]">
                {activeProduct.formattedPrice}
              </span>
            </div>

            {/* Active Product Image Frame */}
            <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#EFEAE1] border border-[#DFD9CE]">
              <img
                src={activeProduct.image}
                alt={activeProduct.name}
                className="w-full h-full object-cover transition-all duration-500"
              />
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-[#191715]/85 via-[#191715]/45 to-transparent p-4 flex items-end justify-between text-[#FDFBF7]">
                <div>
                  <p className="font-mono-tech text-[11px] uppercase tracking-[0.14em] text-[#EFEAE1]/90">
                    {activeProduct.shortTag}
                  </p>
                  <h2 className="font-serif-display text-2xl font-medium leading-tight">
                    {activeProduct.name}
                  </h2>
                </div>
                <span className="font-mono-tech text-sm bg-[#FDFBF7] text-[#191715] px-2.5 py-1 font-semibold">
                  {activeProduct.formattedPrice}
                </span>
              </div>
            </div>

            {/* Active Specimen Details & Direct Action */}
            <div className="mt-4 space-y-4">
              <p className="text-sm text-[#57524C] leading-relaxed">
                {activeProduct.description}
              </p>

              <div className="grid grid-cols-2 gap-2.5">
                <a
                  href="#order"
                  onClick={() => onQuickConfigureProduct(activeProduct.id)}
                  className="py-2.5 px-3 bg-[#191715] hover:bg-[#312E2B] text-[#FDFBF7] text-center font-mono-tech text-xs uppercase tracking-[0.12em] transition-colors"
                >
                  Select in Order Form
                </a>
                <a
                  href={activeProductWhatsAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-2.5 px-3 bg-[#1B4D3E] hover:bg-[#13382D] text-[#FDFBF7] text-center font-mono-tech text-xs uppercase tracking-[0.12em] transition-colors flex items-center justify-center gap-1.5"
                >
                  <span>Enquire on WA</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>

              {/* Interactive 4-Object Switcher Strip */}
              <div className="pt-3 border-t border-[#DFD9CE]">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-mono-tech text-[11px] uppercase tracking-[0.14em] text-[#857E75]">
                    INSPECT SIGNATURE COLLECTION (04)
                  </span>
                  <a
                    href="#products"
                    className="font-mono-tech text-[11px] uppercase tracking-[0.12em] text-[#C8553D] hover:underline"
                  >
                    View Full Grid ↓
                  </a>
                </div>
                <div className="grid grid-cols-4 gap-2">
                  {PRODUCTS.map((item) => {
                    const isSelected = item.id === activeProduct.id;
                    return (
                      <button
                        key={item.id}
                        type="button"
                        onClick={() => setActiveProduct(item)}
                        className={`group text-left border p-1 transition-all ${
                          isSelected
                            ? 'border-[#C8553D] bg-[#EFEAE1]'
                            : 'border-[#DFD9CE] bg-[#FDFBF7] hover:border-[#857E75]'
                        }`}
                      >
                        <div className="aspect-square overflow-hidden bg-[#EFEAE1]">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                          />
                        </div>
                        <div className="mt-1 flex items-center justify-between font-mono-tech text-[10px]">
                          <span className={isSelected ? 'text-[#C8553D] font-semibold' : 'text-[#57524C]'}>
                            {item.catalogCode.replace('OBJ—', '#')}
                          </span>
                          <span className="text-[#191715] font-medium">{item.formattedPrice}</span>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
