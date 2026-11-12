export const STUDIO_INFO = {
  brandName: '3D PRINTING BY RITIKA',
  tagline: 'Gifts Made Just for You',
  founder: 'Ritika Goel',
  established: 'October 2026',
  location: 'Shamli, Uttar Pradesh',
  country: 'India',
  deliveryScope: 'Free shipping across India via DTDC · Local pickup in Shamli',
  preparationTime: '6–7 days standard preparation',
  deliveryTransitTime: '3–4 days after dispatch via DTDC',
  bulkMoq: '15 pieces minimum order quantity',
  phoneDisplay: '+91 95576 54150',
  whatsappNumber: '919557654150',
  logoUrl: '/assets/extracted/brandLogo.jpg',
  projectZipUrl: '/3d-printing-by-ritika-react-js.zip',
  socials: {
    instagram: 'https://www.instagram.com/3dprintingbyritika/',
    instagramHandle: '@3dprintingbyritika',
    facebook: 'https://www.facebook.com/',
    youtube: 'https://www.youtube.com/',
  },
  sisterBusiness: {
    eyebrow: 'A LITTLE MORE FROM RITIKA',
    heading: 'Checkout our other business as well',
    name: 'Sweet Cravings by Ritika',
    description:
      'Sweet Cravings by Ritika — handcrafted cakes and sweet creations. Explore the profile and follow along on Instagram.',
    instagramUrl: 'https://www.instagram.com/sweetcravingsbyritika/',
    instagramHandle: '@sweetcravingsbyritika',
    imageUrl: '/assets/extracted/sweetCravingsProfile.jpg',
  },
};

export const PRODUCTS = [
  {
    id: 'pencil',
    catalogCode: 'OBJ—01',
    name: 'Pencil-Shaped Pen Holder',
    price: 599,
    formattedPrice: '₹599',
    category: 'Desk Organiser',
    shortTag: 'Colour + Name Personalised',
    description:
      'A playful pencil-shaped pen holder personalised with your choice of colour and text.',
    customisationNotes: 'Customise body colour and raised personal name or word on the front face.',
    dimensionsHint: 'Crafted to order · 6–7 days prep',
    image: '/assets/extracted/pencilHolder.jpg',
    whatsappPresetText:
      'Hi Ritika, I would like to enquire about the Pencil-Shaped Pen Holder (₹599).',
  },
  {
    id: 'initial',
    catalogCode: 'OBJ—02',
    name: 'Initial Letter Pen Stand',
    price: 649,
    formattedPrice: '₹649',
    category: 'Monogram Stand',
    shortTag: 'Alphabet + Name Detail',
    description:
      'A personalised alphabet-shaped desk stand with a name detail. A thoughtful gift for any desk.',
    customisationNotes: 'Choose any A–Z monogram silhouette paired with your custom name across the front.',
    dimensionsHint: 'Crafted to order · 6–7 days prep',
    image: '/assets/extracted/initialStand.jpg',
    whatsappPresetText:
      'Hi Ritika, I would like to enquire about the Initial Letter Pen Stand (₹649).',
  },
  {
    id: 'plaque',
    catalogCode: 'OBJ—03',
    name: '2-in-1 Name Desk Plaque',
    price: 849,
    formattedPrice: '₹849',
    category: 'Dual-Purpose Plaque',
    shortTag: 'Desk Display + Fridge Magnet',
    description:
      'A personalised name plaque for your desk that can also be used as a fridge magnet.',
    customisationNotes: 'Includes detachable desk stand base and magnetic backing for dual placement.',
    dimensionsHint: 'Crafted to order · 6–7 days prep',
    image: '/assets/extracted/namePlaque.jpg',
    whatsappPresetText:
      'Hi Ritika, I would like to enquire about the 2-in-1 Name Desk Plaque (₹849).',
  },
  {
    id: 'long',
    catalogCode: 'OBJ—04',
    name: 'Personalised Long Pen Stand',
    price: 850,
    formattedPrice: '₹850',
    category: 'Statement Desk Stand',
    shortTag: 'Name + Base Message',
    description:
      'A decorative long pen stand personalised with a name and an additional message on the base.',
    customisationNotes: 'Features multi-compartment utility, 3D lettering, and custom base inscription.',
    dimensionsHint: 'Crafted to order · 6–7 days prep',
    image: '/assets/extracted/longStand.jpg',
    whatsappPresetText:
      'Hi Ritika, I would like to enquire about the Personalised Long Pen Stand (₹850).',
  },
];

export const CUSTOM_COMMISSION_STEPS = [
  {
    step: '01',
    title: 'Share',
    description: 'Send your idea, reference photo or requirement on WhatsApp.',
  },
  {
    step: '02',
    title: 'Discuss',
    description: 'Confirm design possibilities, pricing, timeline and shipping.',
  },
  {
    step: '03',
    title: 'Create',
    description: 'Your order starts after 100% advance payment is verified.',
  },
];

export const POLICIES = [
  {
    id: 'payment',
    index: '01',
    title: 'Payment & confirmation',
    summary: '100% advance payment verified by Ritika',
    body: '100% advance payment is required. An order is confirmed only after payment has been received and verified by Ritika. Sending an order message on WhatsApp alone does not confirm the order.',
  },
  {
    id: 'preparation',
    index: '02',
    title: 'Preparation & delivery',
    summary: '6–7 days preparation · 3–4 days transit via DTDC',
    body: 'Standard preparation time is 6–7 days. Orders are shipped across India via DTDC and typically take 3–4 days to arrive after dispatch, depending on the destination.',
  },
  {
    id: 'shipping',
    index: '03',
    title: 'Shipping & pickup',
    summary: 'Free shipping across India · Shamli local pickup available',
    body: 'Free shipping is available across India via DTDC. Local pickup is available in Shamli by arrangement.',
  },
  {
    id: 'customisation',
    index: '04',
    title: 'Customisation & bulk orders',
    summary: 'MOQ 15 pieces for bulk · Optional bulk gift packaging',
    body: 'Colour, names, initials and messages can be customised where applicable. Different designs, sizes or special requirements must be discussed on WhatsApp. Bulk order minimum quantity is 15 pieces. Gift packaging is available for bulk orders on request at an additional charge.',
  },
  {
    id: 'urgent',
    index: '05',
    title: 'Urgent orders',
    summary: 'Standard lead times apply · Local Shamli enquiries by availability',
    body: 'Urgent orders are generally not accepted. Requests from Shamli may be discussed only if availability permits; please check on WhatsApp before placing a request.',
  },
  {
    id: 'returns',
    index: '06',
    title: 'Cancellation, returns & replacement',
    summary: 'No returns on custom items · Continuous unboxing video required for damage claims',
    body: 'As products are customised, cancellations, returns and refunds are not accepted under the stated store policy. Replacement requests are considered only with a proper, continuous unboxing video as proof. Contact Ritika promptly if an item arrives damaged or incorrect. This policy is subject to applicable consumer protection law.',
  },
];

export const FAQS = [
  {
    id: 'faq-1',
    category: 'Ordering & Payment',
    question: 'How do I place an order?',
    answer:
      'Select a product, fill in the order form and submit it. WhatsApp will open with your order details. Send the message to Ritika to continue.',
  },
  {
    id: 'faq-2',
    category: 'Ordering & Payment',
    question: 'When is my order confirmed?',
    answer:
      'Only after 100% advance payment has been received and verified by Ritika. Sending an enquiry on WhatsApp does not confirm an order.',
  },
  {
    id: 'faq-3',
    category: 'Delivery & Pickup',
    question: 'How long does an order take?',
    answer:
      'Preparation usually takes 6–7 days. Delivery generally takes another 3–4 days after dispatch, depending on your location and courier service.',
  },
  {
    id: 'faq-4',
    category: 'Delivery & Pickup',
    question: 'Do you deliver across India?',
    answer:
      'Yes. Free shipping is available across India through DTDC.',
  },
  {
    id: 'faq-5',
    category: 'Custom & Bulk',
    question: 'Can I customise a product?',
    answer:
      'Colour, names, initials and messages can be customised where applicable. For a different design, size or special requirement, contact Ritika on WhatsApp for discussion and a quote.',
  },
  {
    id: 'faq-6',
    category: 'Custom & Bulk',
    question: 'Do you accept bulk orders?',
    answer:
      'Yes. The minimum order quantity for bulk orders is 15 pieces. Gift packaging can be requested for bulk orders at an additional charge.',
  },
  {
    id: 'faq-7',
    category: 'Custom & Bulk',
    question: 'Can I request an urgent order?',
    answer:
      'Urgent orders are generally not accepted. Shamli local requests may be considered only subject to availability. Confirm on WhatsApp before ordering.',
  },
  {
    id: 'faq-8',
    category: 'Policies',
    question: 'Can I cancel, return or get a refund?',
    answer:
      "The store's stated policy does not accept cancellations, returns or refunds for customised products. This is subject to applicable consumer protection law. Contact Ritika if there is a problem with your order.",
  },
  {
    id: 'faq-9',
    category: 'Delivery & Pickup',
    question: 'How do I get my tracking details?',
    answer:
      'Ritika will share the DTDC tracking number after dispatch. You can contact her on WhatsApp for order updates.',
  },
  {
    id: 'faq-10',
    category: 'Delivery & Pickup',
    question: 'Is local pickup available?',
    answer:
      'Yes. Local pickup can be arranged in Shamli. Select local pickup in the order form and confirm the arrangement on WhatsApp.',
  },
];
