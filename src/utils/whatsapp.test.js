import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import {
  calculateOrderSubtotal,
  validateOrderForm,
  buildOrderWhatsAppMessage,
  buildOrderWhatsAppUrl,
} from './whatsapp.js';

describe('WhatsApp Order & Pricing Logic (JS)', () => {
  it('calculates exact subtotals for standard catalog products', () => {
    const pencil = calculateOrderSubtotal('pencil', 2);
    assert.equal(pencil.unitPrice, 599);
    assert.equal(pencil.subtotal, 1198);
    assert.equal(pencil.formattedTotal, '₹1,198');
    assert.equal(pencil.isCustomQuote, false);

    const longStandBulk = calculateOrderSubtotal('long', 15);
    assert.equal(longStandBulk.unitPrice, 850);
    assert.equal(longStandBulk.subtotal, 12750);
    assert.equal(longStandBulk.formattedTotal, '₹12,750');
  });

  it('handles custom quote selection and empty selection', () => {
    const custom = calculateOrderSubtotal('custom', 5);
    assert.equal(custom.unitPrice, null);
    assert.equal(custom.subtotal, null);
    assert.equal(custom.formattedTotal, 'Quote on WhatsApp');
    assert.equal(custom.isCustomQuote, true);

    const empty = calculateOrderSubtotal('', 1);
    assert.equal(empty.subtotal, 0);
    assert.equal(empty.formattedTotal, '₹0');
  });

  it('clamps invalid quantities to 1 safely', () => {
    const neg = calculateOrderSubtotal('initial', -3);
    assert.equal(neg.subtotal, 649);

    const nanVal = calculateOrderSubtotal('plaque', Number.NaN);
    assert.equal(nanVal.subtotal, 849);
  });

  it('validates required customer fields and policy agreement', () => {
    const invalidForm = {
      product: '',
      quantity: 1,
      customerName: '',
      phone: '12345',
      colour: '',
      personalisation: '',
      message: '',
      address: '',
      delivery: 'DTDC courier',
      bulk: 'No',
      policyAgreed: false,
    };

    const result = validateOrderForm(invalidForm);
    assert.equal(result.valid, false);
    assert.ok(result.errors.product);
    assert.ok(result.errors.customerName);
    assert.ok(result.errors.phone);
    assert.ok(result.errors.address);
    assert.ok(result.errors.policyAgreed);

    const validForm = {
      product: 'plaque',
      quantity: 2,
      customerName: 'Aarav Sharma',
      phone: '9876543210',
      colour: 'Pastel Blue & White',
      personalisation: 'AARAV',
      message: 'Please make the base white',
      address: '14 Civil Lines, Shamli, UP 247776',
      delivery: 'Local pickup in Shamli',
      bulk: 'No',
      policyAgreed: true,
    };

    const validResult = validateOrderForm(validForm);
    assert.equal(validResult.valid, true);
    assert.equal(Object.keys(validResult.errors).length, 0);
  });

  it('formats complete pre-filled WhatsApp message and wa.me URL', () => {
    const sample = {
      product: 'initial',
      quantity: 3,
      customerName: 'Neha Verma',
      phone: '9557654150',
      colour: 'Lavender & Gold',
      personalisation: 'Initial N - Neha',
      message: 'Gift for colleague',
      address: '42 Golf Links, New Delhi 110003',
      delivery: 'DTDC courier',
      bulk: 'No',
      policyAgreed: true,
    };

    const msg = buildOrderWhatsAppMessage(sample);
    assert.ok(msg.includes('Product: Initial Letter Pen Stand'));
    assert.ok(msg.includes('Quantity: 3'));
    assert.ok(msg.includes('Unit price: ₹649'));
    assert.ok(msg.includes('Estimated product subtotal: ₹1,947'));
    assert.ok(msg.includes('Preferred colour(s): Lavender & Gold'));
    assert.ok(msg.includes('Name / initial / text: Initial N - Neha'));
    assert.ok(msg.includes('Delivery preference: DTDC courier'));

    const url = buildOrderWhatsAppUrl(sample);
    assert.ok(url.startsWith('https://wa.me/919557654150?text='));
  });
});
