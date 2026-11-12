import React, { useState } from 'react';
import {
  AlertCircle,
  ArrowUpRight,
  CheckCircle2,
  Copy,
  MessageCircle,
  Minus,
  Plus,
  ShieldCheck,
} from 'lucide-react';
import { PRODUCTS, STUDIO_INFO } from '../data/studioData.js';
import {
  buildOrderWhatsAppMessage,
  buildOrderWhatsAppUrl,
  calculateOrderSubtotal,
  validateOrderForm,
} from '../utils/whatsapp.js';

export const WhatsAppOrderBuilder = ({ formState, onChangeFormState }) => {
  const [errors, setErrors] = useState({});
  const [submittedReadyUrl, setSubmittedReadyUrl] = useState(null);
  const [copiedMessage, setCopiedMessage] = useState(false);

  const subtotalInfo = calculateOrderSubtotal(formState.product, formState.quantity);
  const selectedCatalogProduct = PRODUCTS.find((p) => p.id === formState.product);
  const generatedMessage = buildOrderWhatsAppMessage(formState);
  const generatedWhatsAppUrl = buildOrderWhatsAppUrl(formState);

  const updateField = (key, value) => {
    onChangeFormState((prev) => ({
      ...prev,
      [key]: value,
    }));
    if (errors[key]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[key];
        return next;
      });
    }
    setSubmittedReadyUrl(null);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validation = validateOrderForm(formState);
    if (!validation.valid) {
      setErrors(validation.errors);
      setSubmittedReadyUrl(null);
      return;
    }

    setErrors({});
    const url = buildOrderWhatsAppUrl(formState);
    setSubmittedReadyUrl(url);

    // Trigger anchor click safely without window.open or window.alert
    const tempLink = document.createElement('a');
    tempLink.href = url;
    tempLink.target = '_blank';
    tempLink.rel = 'noopener noreferrer';
    document.body.appendChild(tempLink);
    tempLink.click();
    document.body.removeChild(tempLink);
  };

  const handleCopyMessage = async () => {
    try {
      await navigator.clipboard.writeText(generatedMessage);
      setCopiedMessage(true);
      setTimeout(() => setCopiedMessage(false), 2500);
    } catch {
      setCopiedMessage(false);
    }
  };

  return (
    <section id="order" className="py-16 lg:py-24 border-b border-[#DFD9CE] bg-[#EFEAE1]/55">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-10 border-b border-[#DFD9CE] gap-6">
          <div className="space-y-3">
            <div className="font-mono-tech text-xs uppercase tracking-[0.18em] text-[#C8553D]">
              ORDER ON WHATSAPP · STUDIO SPECIFICATION DESK
            </div>
            <h2 className="font-serif-display text-3xl sm:text-5xl text-[#191715] font-medium tracking-tight">
              Send your order details.
            </h2>
          </div>
          <p className="text-sm sm:text-base text-[#57524C] max-w-md leading-relaxed">
            Fill in the details below. Your message will open in WhatsApp so you can send it
            directly to Ritika at <strong className="text-[#191715]">{STUDIO_INFO.phoneDisplay}</strong>.
          </p>
        </div>

        {/* Main Split Configurator */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Sticky Column: Live Studio Specification Docket */}
          <div className="lg:col-span-5 lg:sticky lg:top-28 space-y-6">
            <div className="bg-[#FDFBF7] border border-[#191715]/20 p-6 sm:p-7 shadow-[0_12px_32px_-12px_rgba(25,23,21,0.08)]">
              <div className="flex items-center justify-between border-b border-[#DFD9CE] pb-4">
                <div>
                  <span className="font-mono-tech text-xs uppercase tracking-[0.15em] text-[#C8553D] font-semibold">
                    LIVE ORDER DOCKET
                  </span>
                  <p className="text-xs text-[#57524C] mt-0.5">
                    3D PRINTING BY RITIKA · Shamli, UP
                  </p>
                </div>
                <span className="font-mono-tech text-xs text-[#857E75]">
                  WA: {STUDIO_INFO.phoneDisplay}
                </span>
              </div>

              {/* Selected Product Preview */}
              <div className="py-5 border-b border-[#DFD9CE]">
                {selectedCatalogProduct ? (
                  <div className="flex items-center gap-4">
                    <div className="w-20 h-20 bg-[#EFEAE1] border border-[#DFD9CE] overflow-hidden shrink-0">
                      <img
                        src={selectedCatalogProduct.image}
                        alt={selectedCatalogProduct.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="space-y-1">
                      <div className="font-mono-tech text-[11px] text-[#C8553D] uppercase tracking-wider">
                        {selectedCatalogProduct.catalogCode} · {selectedCatalogProduct.category}
                      </div>
                      <h3 className="font-serif-display text-2xl font-medium text-[#191715] leading-tight">
                        {selectedCatalogProduct.name}
                      </h3>
                      <div className="font-mono-tech text-xs text-[#57524C]">
                        Unit Price: {selectedCatalogProduct.formattedPrice} × {formState.quantity}
                      </div>
                    </div>
                  </div>
                ) : formState.product === 'custom' ? (
                  <div className="bg-[#F6F3EC] border border-[#DFD9CE] p-4 space-y-1.5">
                    <div className="font-mono-tech text-xs text-[#C8553D] uppercase tracking-wider">
                      BESPOKE / CUSTOM REQUIREMENT
                    </div>
                    <h3 className="font-serif-display text-2xl font-medium text-[#191715]">
                      Other / Custom Requirement
                    </h3>
                    <p className="text-xs text-[#57524C]">
                      Pricing and timeline will be quoted directly by Ritika on WhatsApp based on
                      your specifications.
                    </p>
                  </div>
                ) : (
                  <div className="bg-[#F6F3EC] border border-dashed border-[#857E75]/50 p-4 text-xs text-[#57524C]">
                    No product selected yet. Choose one of the 4 signature desk items or select
                    &ldquo;Other / Custom requirement&rdquo; in the form.
                  </div>
                )}
              </div>

              {/* Live Personalisation Spec Sheet */}
              <dl className="py-4 border-b border-[#DFD9CE] space-y-2.5 text-xs">
                <div className="flex justify-between gap-4">
                  <dt className="font-mono-tech text-[#857E75] uppercase">NAME / INITIAL / TEXT</dt>
                  <dd className="font-medium text-[#191715] text-right">
                    {formState.personalisation.trim() || 'Not specified yet'}
                  </dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt className="font-mono-tech text-[#857E75] uppercase">PREFERRED COLOUR(S)</dt>
                  <dd className="font-medium text-[#191715] text-right">
                    {formState.colour.trim() || 'Not specified yet'}
                  </dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt className="font-mono-tech text-[#857E75] uppercase">DELIVERY MODE</dt>
                  <dd className="font-medium text-[#191715] text-right">{formState.delivery}</dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt className="font-mono-tech text-[#857E75] uppercase">BULK / PACKAGING</dt>
                  <dd className="font-medium text-[#191715] text-right">{formState.bulk}</dd>
                </div>
              </dl>

              {/* Estimated Subtotal Box */}
              <div className="pt-5 space-y-2">
                <div className="flex items-baseline justify-between">
                  <span className="font-mono-tech text-xs uppercase tracking-[0.14em] text-[#57524C]">
                    ESTIMATED PRODUCT SUBTOTAL
                  </span>
                  <span
                    id="total"
                    data-testid="order-subtotal"
                    className="font-mono-tech text-3xl font-semibold text-[#191715]"
                  >
                    {subtotalInfo.formattedTotal}
                  </span>
                </div>
                <p className="text-xs text-[#57524C] leading-relaxed">
                  Shipping charges are extra and depend on your delivery area and parcel size.
                  Ritika will confirm the final total on WhatsApp.
                </p>
              </div>

              {/* Important Verification Note */}
              <div className="mt-5 bg-[#F6F3EC] border border-[#DFD9CE] p-4 flex items-start gap-3">
                <ShieldCheck className="w-4 h-4 text-[#1B4D3E] shrink-0 mt-0.5" />
                <p className="text-xs text-[#57524C] leading-relaxed">
                  <strong className="text-[#191715]">100% advance payment is required.</strong> Your
                  order is confirmed only after payment is received and verified by Ritika.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Complete Order Form */}
          <div className="lg:col-span-7 bg-[#FDFBF7] border border-[#DFD9CE] p-6 sm:p-10">
            <form id="orderForm" onSubmit={handleSubmit} noValidate className="space-y-6">
              {/* Quick Visual Product Selector Pills/Tiles */}
              <div className="space-y-3">
                <label
                  htmlFor="product"
                  className="block font-mono-tech text-xs uppercase tracking-[0.14em] text-[#191715] font-semibold"
                >
                  1. SELECT PRODUCT *
                </label>

                <select
                  id="product"
                  name="product"
                  value={formState.product}
                  onChange={(e) => updateField('product', e.target.value)}
                  required
                  className="w-full bg-[#F6F3EC] border border-[#DFD9CE] focus:border-[#191715] px-4 py-3.5 text-sm text-[#191715] font-medium focus:outline-none"
                >
                  <option value="">Choose a product</option>
                  <option value="pencil">Pencil-Shaped Pen Holder — ₹499</option>
                  <option value="initial">Initial Letter Pen Stand — ₹549</option>
                  <option value="plaque">2-in-1 Name Desk Plaque — ₹749</option>
                  <option value="long">Personalised Long Pen Stand — ₹750</option>
                  <option value="custom">Other / Custom requirement (quote needed)</option>
                </select>

                {/* Quick Tap Selector Strip */}
                <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 pt-1">
                  {[
                    { id: 'pencil', price: '₹499', shortLabel: 'Pencil Holder' },
                    { id: 'initial', price: '₹549', shortLabel: 'Initial Stand' },
                    { id: 'plaque', price: '₹749', shortLabel: 'Name Plaque' },
                    { id: 'long', price: '₹750', shortLabel: 'Long Stand' },
                  ].map((item) => (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => updateField('product', item.id)}
                      className={`p-2.5 text-left border text-xs transition-colors ${
                        formState.product === item.id
                          ? 'border-[#C8553D] bg-[#EFEAE1] text-[#191715] font-semibold'
                          : 'border-[#DFD9CE] bg-[#F6F3EC] text-[#57524C] hover:border-[#857E75]'
                      }`}
                    >
                      <div className="font-mono-tech text-[10px] text-[#C8553D]">
                        {item.price}
                      </div>
                      <div className="truncate mt-0.5">{item.shortLabel}</div>
                    </button>
                  ))}
                  <button
                    type="button"
                    onClick={() => updateField('product', 'custom')}
                    className={`p-2.5 text-left border text-xs transition-colors ${
                      formState.product === 'custom'
                        ? 'border-[#C8553D] bg-[#EFEAE1] text-[#191715] font-semibold'
                        : 'border-[#DFD9CE] bg-[#F6F3EC] text-[#57524C] hover:border-[#857E75]'
                    }`}
                  >
                    <div className="font-mono-tech text-[10px] text-[#C8553D]">QUOTE</div>
                    <div className="truncate mt-0.5">Custom Idea</div>
                  </button>
                </div>

                {errors.product && (
                  <p className="text-xs text-[#B91C1C] flex items-center gap-1.5 mt-1">
                    <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                    <span>{errors.product}</span>
                  </p>
                )}
              </div>

              {/* Row: Quantity & Customer Name */}
              <div className="grid grid-cols-1 sm:grid-cols-12 gap-5">
                <div className="sm:col-span-4 space-y-2">
                  <label
                    htmlFor="quantity"
                    className="block font-mono-tech text-xs uppercase tracking-[0.14em] text-[#191715] font-semibold"
                  >
                    2. QUANTITY *
                  </label>
                  <div className="flex items-center border border-[#DFD9CE] bg-[#F6F3EC]">
                    <button
                      type="button"
                      onClick={() =>
                        updateField('quantity', Math.max(1, (formState.quantity || 1) - 1))
                      }
                      className="p-3.5 text-[#191715] hover:bg-[#EFEAE1] transition-colors"
                      aria-label="Decrease quantity"
                    >
                      <Minus className="w-3.5 h-3.5" />
                    </button>
                    <input
                      id="quantity"
                      name="quantity"
                      type="number"
                      min={1}
                      value={formState.quantity}
                      onChange={(e) =>
                        updateField('quantity', Math.max(1, parseInt(e.target.value || '1', 10)))
                      }
                      required
                      className="w-full bg-transparent text-center font-mono-tech text-sm font-semibold text-[#191715] focus:outline-none"
                    />
                    <button
                      type="button"
                      onClick={() => updateField('quantity', (formState.quantity || 1) + 1)}
                      className="p-3.5 text-[#191715] hover:bg-[#EFEAE1] transition-colors"
                      aria-label="Increase quantity"
                    >
                      <Plus className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

                <div className="sm:col-span-8 space-y-2">
                  <label
                    htmlFor="customer"
                    className="block font-mono-tech text-xs uppercase tracking-[0.14em] text-[#191715] font-semibold"
                  >
                    3. YOUR NAME *
                  </label>
                  <input
                    id="customer"
                    name="customer"
                    type="text"
                    value={formState.customerName}
                    onChange={(e) => updateField('customerName', e.target.value)}
                    placeholder="Enter your full name"
                    required
                    className="w-full bg-[#F6F3EC] border border-[#DFD9CE] focus:border-[#191715] px-4 py-3.5 text-sm text-[#191715] placeholder-[#857E75] focus:outline-none"
                  />
                  {errors.customerName && (
                    <p className="text-xs text-[#B91C1C] flex items-center gap-1.5">
                      <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                      <span>{errors.customerName}</span>
                    </p>
                  )}
                </div>
              </div>

              {/* Row: WhatsApp Number & Preferred Colour(s) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <label
                    htmlFor="phone"
                    className="block font-mono-tech text-xs uppercase tracking-[0.14em] text-[#191715] font-semibold"
                  >
                    4. WHATSAPP NUMBER *
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formState.phone}
                    onChange={(e) => updateField('phone', e.target.value)}
                    placeholder="10-digit mobile number"
                    required
                    className="w-full bg-[#F6F3EC] border border-[#DFD9CE] focus:border-[#191715] px-4 py-3.5 text-sm text-[#191715] placeholder-[#857E75] focus:outline-none font-mono-tech"
                  />
                  {errors.phone && (
                    <p className="text-xs text-[#B91C1C] flex items-center gap-1.5">
                      <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                      <span>{errors.phone}</span>
                    </p>
                  )}
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="colour"
                    className="block font-mono-tech text-xs uppercase tracking-[0.14em] text-[#191715] font-semibold"
                  >
                    5. PREFERRED COLOUR(S)
                  </label>
                  <input
                    id="colour"
                    name="colour"
                    type="text"
                    value={formState.colour}
                    onChange={(e) => updateField('colour', e.target.value)}
                    placeholder="Example: Blue, yellow, pastel pink"
                    className="w-full bg-[#F6F3EC] border border-[#DFD9CE] focus:border-[#191715] px-4 py-3.5 text-sm text-[#191715] placeholder-[#857E75] focus:outline-none"
                  />
                </div>
              </div>

              {/* Row: Name / Initial / Text */}
              <div className="space-y-2">
                <label
                  htmlFor="personalisation"
                  className="block font-mono-tech text-xs uppercase tracking-[0.14em] text-[#191715] font-semibold"
                >
                  6. NAME / INITIAL / TEXT TO PRINT
                </label>
                <input
                  id="personalisation"
                  name="personalisation"
                  type="text"
                  value={formState.personalisation}
                  onChange={(e) => updateField('personalisation', e.target.value)}
                  placeholder="Write the exact spelling to be printed"
                  className="w-full bg-[#F6F3EC] border border-[#DFD9CE] focus:border-[#191715] px-4 py-3.5 text-sm text-[#191715] placeholder-[#857E75] focus:outline-none"
                />
              </div>

              {/* Row: Additional Message / Customisation Details */}
              <div className="space-y-2">
                <label
                  htmlFor="message"
                  className="block font-mono-tech text-xs uppercase tracking-[0.14em] text-[#191715] font-semibold"
                >
                  7. ADDITIONAL MESSAGE / CUSTOMISATION DETAILS
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={3}
                  value={formState.message}
                  onChange={(e) => updateField('message', e.target.value)}
                  placeholder="Write base message, design notes, size request or special instructions"
                  className="w-full bg-[#F6F3EC] border border-[#DFD9CE] focus:border-[#191715] px-4 py-3 text-sm text-[#191715] placeholder-[#857E75] focus:outline-none"
                />
              </div>

              {/* Row: Complete Delivery Address */}
              <div className="space-y-2">
                <label
                  htmlFor="address"
                  className="block font-mono-tech text-xs uppercase tracking-[0.14em] text-[#191715] font-semibold"
                >
                  8. COMPLETE DELIVERY ADDRESS *
                </label>
                <textarea
                  id="address"
                  name="address"
                  rows={3}
                  value={formState.address}
                  onChange={(e) => updateField('address', e.target.value)}
                  placeholder="House/flat no., street, area, city, state and PIN code"
                  required
                  className="w-full bg-[#F6F3EC] border border-[#DFD9CE] focus:border-[#191715] px-4 py-3 text-sm text-[#191715] placeholder-[#857E75] focus:outline-none"
                />
                {errors.address && (
                  <p className="text-xs text-[#B91C1C] flex items-center gap-1.5">
                    <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                    <span>{errors.address}</span>
                  </p>
                )}
              </div>

              {/* Row: Delivery Preference & Bulk / Gift Packaging */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <label
                    htmlFor="delivery"
                    className="block font-mono-tech text-xs uppercase tracking-[0.14em] text-[#191715] font-semibold"
                  >
                    9. DELIVERY PREFERENCE
                  </label>
                  <select
                    id="delivery"
                    name="delivery"
                    value={formState.delivery}
                    onChange={(e) => updateField('delivery', e.target.value)}
                    className="w-full bg-[#F6F3EC] border border-[#DFD9CE] focus:border-[#191715] px-4 py-3.5 text-sm text-[#191715] focus:outline-none"
                  >
                    <option value="DTDC courier">DTDC courier</option>
                    <option value="Local pickup in Shamli">Local pickup in Shamli</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="bulk"
                    className="block font-mono-tech text-xs uppercase tracking-[0.14em] text-[#191715] font-semibold"
                  >
                    10. BULK ORDER / GIFT PACKAGING
                  </label>
                  <select
                    id="bulk"
                    name="bulk"
                    value={formState.bulk}
                    onChange={(e) => updateField('bulk', e.target.value)}
                    className="w-full bg-[#F6F3EC] border border-[#DFD9CE] focus:border-[#191715] px-4 py-3.5 text-sm text-[#191715] focus:outline-none"
                  >
                    <option value="No">No</option>
                    <option value="Bulk order (15 pieces or more)">
                      Bulk order (15 pieces or more)
                    </option>
                    <option value="Gift packaging enquiry for bulk order">
                      Gift packaging enquiry for bulk order
                    </option>
                  </select>
                </div>
              </div>

              {/* Mandatory Store Policy Acknowledgement */}
              <div className="pt-2">
                <label
                  htmlFor="policyCheck"
                  className="flex items-start gap-3 p-4 bg-[#F6F3EC] border border-[#DFD9CE] cursor-pointer select-none"
                >
                  <input
                    id="policyCheck"
                    name="policyCheck"
                    type="checkbox"
                    checked={formState.policyAgreed}
                    onChange={(e) => updateField('policyAgreed', e.target.checked)}
                    required
                    className="mt-1 w-4 h-4 accent-[#1B4D3E] shrink-0"
                  />
                  <span className="text-xs sm:text-sm text-[#57524C] leading-relaxed">
                    I understand that <strong className="text-[#191715]">100% advance payment</strong>{' '}
                    is required, order confirmation happens only after payment verification, shipping
                    charges are extra based on area, preparation takes{' '}
                    <strong className="text-[#191715]">6–7 days</strong>, and customised orders
                    cannot be cancelled, returned or refunded.
                  </span>
                </label>
                {errors.policyAgreed && (
                  <p className="text-xs text-[#B91C1C] flex items-center gap-1.5 mt-2">
                    <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                    <span>{errors.policyAgreed}</span>
                  </p>
                )}
              </div>

              {/* Submit Button */}
              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <button
                  type="submit"
                  className="w-full py-4 px-6 bg-[#1B4D3E] hover:bg-[#13382D] text-[#FDFBF7] font-mono-tech text-xs sm:text-sm uppercase tracking-[0.15em] transition-colors flex items-center justify-center gap-2.5 cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Send Order on WhatsApp ↗</span>
                </button>
              </div>

              {/* Post-Submit Confirmation & Direct Link Fallback */}
              {submittedReadyUrl && (
                <div
                  role="status"
                  className="p-5 bg-[#1B4D3E]/10 border border-[#1B4D3E] space-y-3"
                >
                  <div className="flex items-center justify-between gap-2">
                    <div className="flex items-center gap-2 text-[#1B4D3E] font-mono-tech text-xs uppercase tracking-wider font-semibold">
                      <CheckCircle2 className="w-4 h-4 shrink-0" />
                      <span>Order Docket Ready for WhatsApp</span>
                    </div>
                    <button
                      type="button"
                      onClick={handleCopyMessage}
                      className="inline-flex items-center gap-1.5 text-xs font-mono-tech text-[#191715] hover:text-[#C8553D] underline"
                    >
                      <Copy className="w-3.5 h-3.5" />
                      <span>{copiedMessage ? 'Copied!' : 'Copy Order Text'}</span>
                    </button>
                  </div>
                  <p className="text-xs text-[#57524C]">
                    If WhatsApp did not open automatically in a new tab, click the direct button
                    below to launch your pre-filled chat with Ritika ({STUDIO_INFO.phoneDisplay}):
                  </p>
                  <a
                    href={generatedWhatsAppUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#1B4D3E] text-[#FDFBF7] font-mono-tech text-xs uppercase tracking-[0.14em]"
                  >
                    <span>Open Pre-Filled WhatsApp Chat</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
