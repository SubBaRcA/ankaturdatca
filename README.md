# Anka Tur Datça

Datça özel tekne turu tanıtım sitesi. Astro ile statik, Türkçe, 6 sayfalı.

## Geliştirme

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # dist/ üretir
npm run preview  # build çıktısını önizle
```

## Yapı

- `src/data/site.ts` — TÜM içerik/iletişim/tur/koy bilgisi burada (tek kaynak). Telefon, e-posta, saatler değişince sadece burayı düzenleyin.
- `src/data/images.ts` — fotoğraflar (astro:assets ile otomatik WebP).
- `src/layouts/Layout.astro` — SEO meta, header, footer, WhatsApp butonu.
- `src/components/` — Hero, PageHero, TurKarti, Galeri, RezervasyonForm, CTABand.
- `src/pages/` — index, turlar, rotalar, teknemiz, galeri, iletisim, tesekkurler.

## Yayına çıkış (Vercel)

1. Depoyu bir git remote'a push edin (veya `vercel` CLI ile deploy).
2. Vercel projesi framework: **Astro** (otomatik algılar). Build: `npm run build`, çıktı: `dist`.
3. GoDaddy DNS'i Vercel'e yönlendirin (A/CNAME) ve `www.ankaturdatca.com` alan adını bağlayın.

## ⚠️ Yayın öncesi tamamlanacaklar (placeholder'lar)

| Konu | Nerede | Ne yapılacak |
|------|--------|--------------|
| Rezervasyon formu key | `src/data/site.ts` → `web3formsKey` | web3forms.com'da **hello@ankaturdatca.com** ile ücretsiz "Access Key" alın, `YOUR_WEB3FORMS_ACCESS_KEY` yerine yazın. Form submission'ları o e-postaya düşer. |
| Yüksek çözünürlüklü logo | `src/assets/brand/logo-lowres.jpg` (şu an 150×150) | Tercihen SVG veya en az 512px PNG logo ile değiştirin. |
| Kaptan hikâyesi | `src/pages/teknemiz.astro` | Şahin Kaptan için ek detay/anekdot (müşteri "sonra eklenecek" dedi). |
| Site alan adı doğrulaması | `astro.config.mjs` → `SITE` | Yayın alan adını (www var/yok) teyit edin; sitemap ve canonical buna göre üretilir. |
| Facebook (opsiyonel) | `src/data/site.ts` | Sadece Instagram verildi; Facebook varsa eklenebilir. |

## Notlar

- Fiyat bilinçli olarak gösterilmez ("fiyat/müsaitlik için iletişim"), rakiplerle aynı yaklaşım.
- Ana konumlandırma: **maksimum 8 kişi = özel, esnek, kalabalıksız**.
- İçerikte em/tire (—, –) kullanılmaz (marka kuralı).
