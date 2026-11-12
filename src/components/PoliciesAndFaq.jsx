import React, { useState } from 'react';
import { ArrowUpRight, ChevronDown, MessageCircle } from 'lucide-react';
import { FAQS, POLICIES } from '../data/studioData.js';
import { buildWhatsAppUrl } from '../utils/whatsapp.js';

const FAQ_CATEGORIES = [
  'All',
  'Ordering & Payment',
  'Delivery & Pickup',
  'Custom & Bulk',
  'Policies',
];

export const PoliciesAndFaq = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [openFaqId, setOpenFaqId] = useState(FAQS[0].id);

  const filteredFaqs =
    selectedCategory === 'All'
      ? FAQS
      : FAQS.filter((item) => item.category === selectedCategory);

  const policyQuestionWhatsAppUrl = buildWhatsAppUrl(
    'Hi Ritika, I have a question regarding store policies / ordering with 3D PRINTING BY RITIKA.'
  );

  return (
    <div className="bg-[#F6F3EC]">
      {/* Part 1: Store Policies (All 6 Preserved Pillars) */}
      <section id="policies" className="py-16 lg:py-24 border-b border-[#DFD9CE]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between pb-10 border-b border-[#DFD9CE] gap-6">
            <div className="space-y-3">
              <div className="font-mono-tech text-xs uppercase tracking-[0.18em] text-[#C8553D]">
                PLEASE READ BEFORE ORDERING · TERMS 01—06
              </div>
              <h2 className="font-serif-display text-3xl sm:text-5xl text-[#191715] font-medium tracking-tight">
                Clear store policies.
              </h2>
            </div>
            <p className="text-sm sm:text-base text-[#57524C] max-w-md leading-relaxed">
              Because every item is made to order, these terms apply to all purchases.
            </p>
          </div>

          {/* 6 Architectural Policy Cards */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {POLICIES.map((policy) => (
              <article
                key={policy.id}
                className="bg-[#FDFBF7] border border-[#DFD9CE] p-6 sm:p-7 flex flex-col justify-between space-y-5"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between border-b border-[#EFEAE1] pb-3 font-mono-tech text-xs">
                    <span className="text-[#C8553D] font-semibold">POLICY {policy.index}</span>
                    <span className="text-[#857E75] truncate max-w-[200px]">{policy.summary}</span>
                  </div>

                  <h3 className="font-serif-display text-2xl font-medium text-[#191715]">
                    {policy.title}
                  </h3>

                  <p className="text-sm text-[#57524C] leading-relaxed">{policy.body}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Part 2: 10 Frequently Asked Questions */}
      <section id="faq" className="py-16 lg:py-24 border-b border-[#DFD9CE] bg-[#FDFBF7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Column: Heading, Category Filter & Direct WhatsApp Help */}
            <div className="lg:col-span-5 space-y-6">
              <div className="space-y-3">
                <div className="font-mono-tech text-xs uppercase tracking-[0.18em] text-[#C8553D]">
                  QUICK ANSWERS · KNOWLEDGE BASE
                </div>
                <h2 className="font-serif-display text-3xl sm:text-5xl text-[#191715] font-medium tracking-tight">
                  Frequently asked questions.
                </h2>
                <p className="text-sm sm:text-base text-[#57524C] leading-relaxed">
                  Useful information before you place an order.
                </p>
              </div>

              {/* Category Filter Buttons */}
              <div className="flex flex-wrap gap-2 pt-2">
                {FAQ_CATEGORIES.map((category) => {
                  const active = selectedCategory === category;
                  return (
                    <button
                      key={category}
                      type="button"
                      onClick={() => setSelectedCategory(category)}
                      className={`px-3.5 py-2 font-mono-tech text-xs uppercase tracking-[0.12em] border transition-colors ${
                        active
                          ? 'bg-[#191715] text-[#FDFBF7] border-[#191715]'
                          : 'bg-[#F6F3EC] text-[#57524C] border-[#DFD9CE] hover:border-[#191715]'
                      }`}
                    >
                      {category}
                    </button>
                  );
                })}
              </div>

              {/* Still Have Questions Box */}
              <div className="bg-[#F6F3EC] border border-[#DFD9CE] p-6 space-y-4">
                <div className="font-mono-tech text-xs uppercase tracking-[0.14em] text-[#191715] font-semibold">
                  NEED DIRECT ASSISTANCE?
                </div>
                <p className="text-xs sm:text-sm text-[#57524C] leading-relaxed">
                  Unsure about colours, urgent local pickup in Shamli, or bulk gift packaging?
                  Message Ritika directly on WhatsApp.
                </p>
                <a
                  href={policyQuestionWhatsAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 bg-[#1B4D3E] hover:bg-[#13382D] text-[#FDFBF7] font-mono-tech text-xs uppercase tracking-[0.13em] transition-colors"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>Ask Ritika on WhatsApp</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Right Column: Interactive Accordion List */}
            <div className="lg:col-span-7 divide-y divide-[#DFD9CE] border-t border-b border-[#DFD9CE]">
              {filteredFaqs.map((faq, idx) => {
                const isOpen = openFaqId === faq.id;
                return (
                  <div key={faq.id} className="py-5">
                    <button
                      type="button"
                      onClick={() => setOpenFaqId(isOpen ? '' : faq.id)}
                      className="w-full flex items-start justify-between gap-4 text-left group"
                      aria-expanded={isOpen}
                    >
                      <div className="flex items-baseline gap-4">
                        <span className="font-mono-tech text-xs text-[#C8553D] shrink-0">
                          {String(idx + 1).padStart(2, '0')}
                        </span>
                        <div>
                          <h3 className="font-serif-display text-xl sm:text-2xl font-medium text-[#191715] group-hover:text-[#C8553D] transition-colors">
                            {faq.question}
                          </h3>
                          <span className="font-mono-tech text-[10px] uppercase tracking-[0.14em] text-[#857E75]">
                            {faq.category}
                          </span>
                        </div>
                      </div>
                      <ChevronDown
                        className={`w-5 h-5 text-[#57524C] shrink-0 mt-1 transition-transform duration-200 ${
                          isOpen ? 'rotate-180 text-[#C8553D]' : ''
                        }`}
                      />
                    </button>

                    {isOpen && (
                      <div className="mt-3 pl-8 pr-4 text-sm sm:text-base text-[#57524C] leading-relaxed">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
