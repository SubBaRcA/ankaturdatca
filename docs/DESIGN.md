# Anka Tur Datça — Web Sitesi Tasarım Dokümanı

**Tarih:** 2026-08-06
**Durum:** Onay bekliyor
**Teslim:** Müşteri işi. Site tamamen Anka Tur markalı, kendi başına duran bir paket olarak teslim edilir (geliştirici/ajans izi yok).

---

## 1. Konumlandırma (en kritik bölüm)

Datça'daki üç doğrudan rakip (datcatekneturlari / Zagor / Ukiyo) **40–50 kişilik kalabalık teknelerle** aynı koylara gidiyor. Anka Tur'un teknesi **maksimum 8 kişi**. Genelde karışık grup değil, **arkadaş ve aile grupları** geliyor — bu yüzden rota ve program **gerçekten esnek**.

**Ana mesaj:** *"Datça'nın saklı koyları. 50 kişiyle değil — sadece sizinle. Maksimum 8 kişilik özel tekne turu."*

Tüm site bu farkın üzerine kurulur: mahremiyet, esneklik, butik/özel deneyim.

## 2. Rakip analizi (özet)

| | Rakipler | Anka Tur (biz) |
|---|---|---|
| Kapasite | 40–50 kişi | **max 8 kişi** |
| Grup | karışık/kalabalık | arkadaş & aile, size özel |
| Program | yarı sabit | esnek, o güne göre |
| Fiyat | gizli ("iletişim") | gizli ("iletişim") — aynı |
| Dil | çoğu TR | TR |

## 3. Kapsam & teknik kararlar

- **Kapsam:** Çok sayfalı tanıtım sitesi
- **Dil:** Sadece Türkçe
- **Teknik:** Astro (statik) — paylaşımlı header/footer, otomatik görsel optimizasyonu, yüksek Lighthouse skoru
- **Yayın:** Vercel (DNS GoDaddy'de; sonradan Vercel'e yönlendirilecek)
- **İletişim:** Rezervasyon formu (ana yol) + WhatsApp & telefon butonu (ek)
- **Proje yeri:** `/Users/baris/ankatur-site/`

## 4. Site yapısı (sayfalar)

1. **Ana Sayfa** — hero (büyük görsel) + "max 8 kişi" kozu + tur özeti + koy önizleme + galeri önizleme + rezervasyon CTA
2. **Turlar** — Günlük Koy Turu · (varsa) Uzun Tur · Özel Grup / Tekne Kiralama; kalkış/dönüş, neler dahil
3. **Rotalar / Koylar** — Zagor mantığında ama **özgün** metin: koylar, neden rota sabit yazılmaz, esneklik = bizim gücümüz. SEO değeri yüksek.
4. **Teknemiz** — teknenin yıldız olduğu sayfa; 8 kişi kapasite, konfor, güvenlik, Şahin Kaptan
5. **Galeri** — 17 fotoğrafın optimize (WebP) ızgarası + lightbox
6. **İletişim / Rezervasyon** — form + konum (Datça Yat Limanı) + WhatsApp/telefon/e-posta/Instagram

Paylaşımlı: `Layout.astro` (SEO meta, nav, footer, WhatsApp float), bileşenler: Hero, TurKarti, KoySection, Galeri, RezervasyonForm.

## 5. Görsel yön

- **Palet (logodan):** turkuaz/teal + mercan/turuncu vurgu + kum/krem nötr. Rakiplerin jenerik mavi-beyazından ayrışır.
- **His:** ferah, bol beyaz alan, büyük fotoğraflar, modern editoryal tipografi. Ukiyo'nun "dalgalı beyaz ayraç" klişesi kullanılmaz.
- **Tipografi:** Türkçe karakter desteği tam, modern sans + başlık için sıcak bir display yazı tipi.
- **Hız:** görseller WebP + lazy-load → rakiplerden hem daha güzel hem daha hızlı.
- **Logo:** eldeki logo düşük çözünürlüklü (~5KB); go-live öncesi yüksek çözünürlüklü (tercihen SVG/PNG) logo gerekir.

## 6. Gerçek içerik (müşteriden alınan)

- **Marka:** ANKA TUR DATÇA
- **Telefon / WhatsApp:** +90 554 258 03 16
- **Kalkış:** Datça Yat Limanı · Kalkış 10:30 · Dönüş 17:30 · (10:30 Kumluk Plajı kalkış, İnceburun hattı)
- **Öğle yemeği:** balık/köfte, makarna, salata + çeşitli ikramlar
- **Koylar (rota sabit değil):** İnceburun, Kuntakinte, Armutlu Su, Akvaryum, Çeti Suyu, Kargı, İncirli İn
- **Fiyat:** gösterilmez → "fiyat/müsaitlik için iletişim"
- **Kapasite:** max 8 kişi; arkadaş & aile; esnek program
- **E-posta (form buraya düşer):** hello@ankaturdatca.com
- **Sezon:** yaz sezonu boyunca açık
- **Instagram:** https://www.instagram.com/ankaturdatca/
- **Kaptan:** Şahin Kaptan — çocukluğundan beri denizde (detay sonra)

## 7. Rezervasyon formu mekanizması

Statik site + Vercel için backend'siz **Web3Forms** (ücretsiz, spam korumalı). Form submission'ları **hello@ankaturdatca.com**'a e-posta olarak düşer.
- Alanlar: Ad Soyad, Telefon, E-posta (ops.), Tarih, Kişi sayısı (1–8), Tur tipi, Notlar.
- Gerekli: hello@ankaturdatca.com ile bir Web3Forms access key üretilmesi (hızlı; go-live öncesi).
- Yedek: her durumda `mailto:` ve WhatsApp bağlantısı da sunulur.

## 8. Açık kalan / go-live öncesi doldurulacaklar (placeholder olarak işaretlenecek)

- Yüksek çözünürlüklü logo (SVG/PNG)
- Web3Forms access key
- Şahin Kaptan hikâye detayı, kuruluş yılı, misafir sayısı/yorumlar (varsa)
- Facebook linki (yalnızca Instagram verildi)
- Fiyat politikası netse "kişi başı / özel tur" ifadesi

**Kural:** Placeholder'lar göze batan `[KÖŞELİ PARANTEZ]` biçiminde olur; placeholder'lı hiçbir şey yayına çıkmaz.

## 9. Telif notu

Zagor'un koy metni **birebir kopyalanmaz**. Aynı bilgi mantığı (koylar, rota neden sabit değil, rota + rezervasyon birlikte) Anka Tur'un özgün sesiyle ve "max 8 = daha esnek" vurgusuyla yeniden yazılır. Koy adları coğrafi yer adı olduğu için serbesttir.
