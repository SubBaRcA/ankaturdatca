// ============================================================
// ANKA TUR DATÇA · Merkezî içerik / yapılandırma
// Tüm telefon, e-posta, koy ve tur bilgisi TEK yerden yönetilir.
// ============================================================

export const site = {
  brand: 'Anka Tur Datça',
  brandShort: 'Anka Tur',
  tagline: 'Datça’nın saklı koyları. 50 kişiyle değil, sadece sizinle.',
  description:
    'Datça’da maksimum 8 kişilik özel tekne turu. Kalabalık yok; arkadaş ve aile gruplarına özel, esnek programlı günübirlik koy turları.',

  // İletişim
  phoneDisplay: '+90 554 258 03 16',
  phoneHref: 'tel:+905542580316',
  whatsapp: '905542580316',
  whatsappText:
    'Merhaba, Anka Tur Datça tekne turu için bilgi ve rezervasyon almak istiyorum.',
  email: 'hello@ankaturdatca.com',
  instagram: 'https://www.instagram.com/ankaturdatca/',
  instagramHandle: '@ankaturdatca',

  // Operasyon
  departurePoint: 'Datça Yat Limanı',
  departureNote: '10:30 Kumluk Plajı kalkış',
  timeDepart: '10:30',
  timeReturn: '17:30',
  season: 'Yaz sezonu boyunca',
  capacity: 8,
  captain: 'Şahin Kaptan',

  // Rezervasyon formu: Web3Forms (ücretsiz, backend’siz).
  // [DOLDURULACAK]: hello@ankaturdatca.com ile web3forms.com’dan ücretsiz key alınacak.
  web3formsKey: 'YOUR_WEB3FORMS_ACCESS_KEY',
} as const;

export const nav = [
  { label: 'Ana Sayfa', href: '/' },
  { label: 'Turlar', href: '/turlar' },
  { label: 'Rotalar & Koylar', href: '/rotalar' },
  { label: 'Teknemiz', href: '/teknemiz' },
  { label: 'Galeri', href: '/galeri' },
  { label: 'İletişim', href: '/iletisim' },
] as const;

// Menü: öğle yemeği ve ikramlar
export const menu = {
  lunch: 'Balık/köfte, makarna, salata',
  extras: 'Çeşitli ikramlar gün boyu',
};

// Turlar
export const tours = [
  {
    slug: 'gunluk-koy-turu',
    title: 'Günlük Koy Turu',
    summary:
      'Datça Yat Limanı’ndan kalkış, İnceburun hattındaki saklı koylara günübirlik özel tur. Öğle yemeği ve ikramlar dahil.',
    duration: '10:30 - 17:30',
    highlights: [
      'Maksimum 8 kişi, size özel tekne',
      'İnceburun hattı saklı koylar',
      'Öğle yemeği + gün boyu ikramlar dahil',
      'Yüzme ve fotoğraf molaları',
    ],
  },
  {
    slug: 'ozel-grup',
    title: 'Özel Grup & Aile',
    summary:
      'Arkadaş grubu, aile ya da özel gün için tamamen size ait bir gün. Rota ve program birlikte, o günkü keyfe göre şekillenir.',
    duration: 'Esnek (yarım / tam gün)',
    highlights: [
      'Sadece kendi grubunuz, karışık grup yok',
      'Rota ve saat esnek',
      'Kutlama / özel gün için ideal',
    ],
  },
  {
    slug: 'tekne-kiralama',
    title: 'Tekne Kiralama',
    summary:
      'Kendi planınızı yapın; teknemiz ve kaptanımız size eşlik etsin. Fiyat ve müsaitlik için iletişime geçin.',
    duration: 'Talebe göre',
    highlights: [
      'Kaptanlı kiralama',
      'İstediğiniz koylar, istediğiniz tempo',
      'Fiyat için iletişim',
    ],
  },
] as const;

// Koylar: rota sabit değildir, o günkü hava/deniz koşuluna göre seçilir.
// (Özgün metin; koy adları coğrafi yer adıdır.)
export const coves = [
  {
    name: 'İnceburun',
    text: 'Datça’nın en sakin, denizden bakınca bambaşka hissedilen ucu. Günün genellikle ilk molası burada verilir.',
  },
  {
    name: 'Kuntakinte',
    text: 'Kalabalıktan uzak durmak isteyenler için ideal; suyun berraklığıyla öne çıkan sessiz bir durak.',
  },
  {
    name: 'Armutlu Su',
    text: '“Cam gibi deniz” beklentisinin en iyi karşılandığı koylardan. Uygun koşullarda günün en akılda kalan durağı olur.',
  },
  {
    name: 'Akvaryum',
    text: 'Adı gibi berrak ve sığ; yüzmesi ve fotoğrafı keyifli, herkesin sevdiği bir koy.',
  },
  {
    name: 'Çeti Suyu',
    text: 'Serin ve doğal. Kısa bir dinlenme ve yüzme molası için tam yerinde bir durak.',
  },
  {
    name: 'Kargı',
    text: 'Datça’yı yalnızca sahilden görenler için bambaşka bir perspektif sunar.',
  },
  {
    name: 'İncirli İn',
    text: 'Denizden ulaşıldığında çok daha etkileyici olan, rota anlatımının favori duraklarından.',
  },
] as const;
