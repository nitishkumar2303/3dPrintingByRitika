import React, { useState } from 'react';
import { ArrowUpRight, Download, Menu, MessageCircle, X } from 'lucide-react';
import { STUDIO_INFO } from '../data/studioData.js';
import { buildWhatsAppUrl } from '../utils/whatsapp.js';

export const Navbar = ({ onSelectOrderSection }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const generalWhatsAppUrl = buildWhatsAppUrl(
    'Hi Ritika, I visited the 3D PRINTING BY RITIKA website and would like to enquire about placing a personalised order.'
  );

  const navLinks = [
    { label: 'Collection', href: '#products' },
    { label: 'Custom Studio', href: '#custom-studio' },
    { label: 'Order Desk', href: '#order' },
    { label: 'Policies & FAQ', href: '#policies' },
  ];

  return (
    <header className="sticky top-0 z-40 bg-[#F6F3EC]/95 backdrop-blur-md border-b border-[#DFD9CE]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-8">
        {/* Zone 1: Brand Lockup */}
        <a
          href="#top"
          className="flex items-center gap-3.5 shrink-0 group focus:outline-none"
          aria-label="3D Printing By Ritika Home"
        >
          <div className="w-11 h-11 overflow-hidden border border-[#191715]/20 bg-[#FDFBF7] shrink-0">
            <img
              src={STUDIO_INFO.logoUrl}
              alt="3D Printing By Ritika logo"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="flex flex-col">
            <span className="font-mono-tech text-xs sm:text-sm font-semibold tracking-[0.14em] text-[#191715] uppercase whitespace-nowrap">
              {STUDIO_INFO.brandName}
            </span>
            <span className="text-xs text-[#57524C] tracking-wide whitespace-nowrap">
              {STUDIO_INFO.tagline} · Shamli, UP
            </span>
          </div>
        </a>

        {/* Zone 2: Primary Nav Links (Desktop) */}
        <nav className="hidden md:flex items-center gap-8" aria-label="Main Navigation">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-[#57524C] hover:text-[#191715] transition-colors whitespace-nowrap shrink-0 py-1 border-b border-transparent hover:border-[#C8553D]"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: Single Primary Action Cluster */}
        <div className="hidden md:flex items-center gap-3 shrink-0">
          <a
            href={generalWhatsAppUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2.5 bg-[#1B4D3E] hover:bg-[#143B2F] text-[#FDFBF7] text-xs font-mono-tech uppercase tracking-[0.12em] transition-colors whitespace-nowrap shrink-0"
          >
            <MessageCircle className="w-3.5 h-3.5" />
            <span>WhatsApp Studio</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Mobile Menu Trigger */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen((prev) => !prev)}
          className="md:hidden p-2.5 text-[#191715] border border-[#DFD9CE] bg-[#FDFBF7] hover:bg-[#EFEAE1] transition-colors"
          aria-expanded={mobileMenuOpen}
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-[#DFD9CE] bg-[#FDFBF7] px-4 pt-4 pb-6 space-y-4">
          <nav className="flex flex-col divide-y divide-[#DFD9CE]">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="py-3 text-base font-medium text-[#191715] hover:text-[#C8553D] flex items-center justify-between"
              >
                <span>{link.label}</span>
                <ArrowUpRight className="w-4 h-4 text-[#857E75]" />
              </a>
            ))}
          </nav>
          <div className="pt-2 flex flex-col sm:flex-row gap-3">
            <a
              href="#order"
              onClick={() => {
                setMobileMenuOpen(false);
                if (onSelectOrderSection) onSelectOrderSection();
              }}
              className="w-full py-3 px-4 bg-[#191715] text-[#FDFBF7] text-center text-xs font-mono-tech uppercase tracking-[0.14em]"
            >
              Configure Order Form
            </a>
            <a
              href={generalWhatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 px-4 bg-[#1B4D3E] text-[#FDFBF7] text-center text-xs font-mono-tech uppercase tracking-[0.14em] flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Chat on WhatsApp ({STUDIO_INFO.phoneDisplay})</span>
            </a>
            <a
              href={STUDIO_INFO.projectZipUrl}
              download="3d-printing-by-ritika-react-js.zip"
              className="w-full py-3 px-4 border border-[#DFD9CE] bg-[#F6F3EC] text-[#191715] text-center text-xs font-mono-tech uppercase tracking-[0.14em] flex items-center justify-center gap-2"
            >
              <Download className="w-4 h-4 text-[#C8553D]" />
              <span>Download Full Project (.ZIP)</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
