import React from 'react';
import { ArrowDownRight, ArrowUpRight, MessageCircle, SlidersHorizontal } from 'lucide-react';
import { PRODUCTS } from '../data/studioData.js';
import { buildWhatsAppUrl } from '../utils/whatsapp.js';

export const ProductCollection = ({ selectedProductId, onSelectProductForOrder }) => {
  return (
    <section id="products" className="py-16 lg:py-24 border-b border-[#DFD9CE] bg-[#F6F3EC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-10 border-b border-[#DFD9CE] gap-6">
          <div className="space-y-3">
            <div className="font-mono-tech text-xs uppercase tracking-[0.18em] text-[#C8553D]">
              PRODUCT COLLECTION · ARCHIVE 01—04
            </div>
            <h2 className="font-serif-display text-3xl sm:text-5xl text-[#191715] font-medium tracking-tight">
              Personalised desk &amp; gift essentials.
            </h2>
          </div>
          <p className="text-sm sm:text-base text-[#57524C] max-w-md leading-relaxed">
            Every piece is 3D-printed to order. Choose a design below to configure your
            colours and personalisation, or enquire directly on WhatsApp.
          </p>
        </div>

        {/* 2x2 Architectural Gallery Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {PRODUCTS.map((product) => {
            const whatsappUrl = buildWhatsAppUrl(product.whatsappPresetText);
            const isCurrentlyConfigured = selectedProductId === product.id;

            return (
              <article
                key={product.id}
                className={`group flex flex-col justify-between bg-[#FDFBF7] border transition-all duration-300 ${
                  isCurrentlyConfigured
                    ? 'border-[#C8553D] shadow-[0_14px_34px_-12px_rgba(200,85,61,0.16)]'
                    : 'border-[#DFD9CE] hover:border-[#191715]/40 hover:-translate-y-0.5 shadow-[0_8px_24px_-12px_rgba(25,23,21,0.06)]'
                }`}
              >
                <div>
                  {/* Card Top Metadata Strip (Unboxed Typography) */}
                  <div className="px-5 py-3.5 border-b border-[#DFD9CE] flex items-center justify-between text-xs font-mono-tech">
                    <div className="flex items-center gap-2 text-[#57524C] uppercase tracking-[0.12em]">
                      <span className="text-[#C8553D] font-semibold">{product.catalogCode}</span>
                      <span>·</span>
                      <span>{product.category}</span>
                    </div>
                    <span className="text-[#857E75] uppercase tracking-wider">
                      {product.shortTag}
                    </span>
                  </div>

                  {/* Product Photography Frame (4:3 Uniform Aspect Ratio) */}
                  <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#EFEAE1] border-b border-[#DFD9CE]">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500"
                    />
                    {isCurrentlyConfigured && (
                      <div className="absolute top-3 right-3 bg-[#C8553D] text-[#FDFBF7] px-3 py-1 font-mono-tech text-[11px] uppercase tracking-[0.12em]">
                        Selected in Order Form
                      </div>
                    )}
                  </div>

                  {/* Product Title, Price & Description */}
                  <div className="p-6 sm:p-7 space-y-4">
                    <div className="flex items-baseline justify-between gap-4">
                      <h3 className="font-serif-display text-2xl sm:text-3xl font-medium text-[#191715] leading-snug">
                        {product.name}
                      </h3>
                      <span className="font-mono-tech text-2xl font-semibold text-[#191715] shrink-0">
                        {product.formattedPrice}
                      </span>
                    </div>

                    <p className="text-sm sm:text-base text-[#57524C] leading-relaxed">
                      {product.description}
                    </p>

                    <div className="pt-2 border-t border-[#EFEAE1] flex items-start gap-2.5 text-xs text-[#57524C]">
                      <SlidersHorizontal className="w-4 h-4 text-[#C8553D] shrink-0 mt-0.5" />
                      <span>{product.customisationNotes}</span>
                    </div>
                  </div>
                </div>

                {/* Action Bar */}
                <div className="px-6 pb-6 sm:px-7 sm:pb-7 pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <a
                    href="#order"
                    onClick={() => onSelectProductForOrder(product.id)}
                    className="inline-flex items-center justify-center gap-2 py-3.5 px-4 bg-[#191715] hover:bg-[#2F2B28] text-[#FDFBF7] font-mono-tech text-xs uppercase tracking-[0.13em] transition-colors"
                  >
                    <span>Configure &amp; Order</span>
                    <ArrowDownRight className="w-3.5 h-3.5 text-[#C8553D]" />
                  </a>

                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 py-3.5 px-4 bg-[#1B4D3E] hover:bg-[#13382D] text-[#FDFBF7] font-mono-tech text-xs uppercase tracking-[0.13em] transition-colors"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>Order on WhatsApp</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};
