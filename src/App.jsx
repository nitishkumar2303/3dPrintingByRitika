/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar.jsx';
import { Hero } from './components/Hero.jsx';
import { ProductCollection } from './components/ProductCollection.jsx';
import { CustomAndStory } from './components/CustomAndStory.jsx';
import { WhatsAppOrderBuilder } from './components/WhatsAppOrderBuilder.jsx';
import { PoliciesAndFaq } from './components/PoliciesAndFaq.jsx';
import { SisterBrandAndFooter } from './components/SisterBrandAndFooter.jsx';

export default function App() {
  const [formState, setFormState] = useState({
    product: 'pencil',
    quantity: 1,
    customerName: '',
    phone: '',
    colour: '',
    personalisation: '',
    message: '',
    address: '',
    delivery: 'DTDC courier',
    bulk: 'No',
    policyAgreed: false,
  });

  const handleSelectProductForOrder = (productId, customNote) => {
    setFormState((prev) => ({
      ...prev,
      product: productId,
      message: customNote ? customNote : prev.message,
    }));
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F6F3EC] text-[#191715]">
      <Navbar onSelectOrderSection={() => {}} />

      <main className="flex-1">
        <Hero onQuickConfigureProduct={handleSelectProductForOrder} />

        <ProductCollection
          selectedProductId={formState.product}
          onSelectProductForOrder={handleSelectProductForOrder}
        />

        <CustomAndStory onSelectCustomInOrderForm={handleSelectProductForOrder} />

        <WhatsAppOrderBuilder
          formState={formState}
          onChangeFormState={setFormState}
        />

        <PoliciesAndFaq />
      </main>

      <SisterBrandAndFooter />
    </div>
  );
}
