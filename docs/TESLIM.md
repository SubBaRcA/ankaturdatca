# Anka Tur Datça — Teslim Dokümanı

**Model:** Karma teslim
**Tarih:** 2026-08-06

| Varlık | Sahiplik / Yönetim | Nerede |
|--------|--------------------|--------|
| Domain `ankaturdatca.com` | **Müşteri** (kendi GoDaddy hesabı) | GoDaddy |
| E-posta `hello@ankaturdatca.com` | **Müşteri** (GoDaddy Conversations) | GoDaddy Conversations |
| Web sitesi (host + bakım) | **Baris (biz)** | GitHub Pages (repo `SubBaRcA/ankaturdatca`) |
| Kaynak kod | Baris (repo müşteriye verilebilir) | `/Users/baris/ankatur-site` + GitHub `SubBaRcA/ankaturdatca` |
| Rezervasyon formu | FormSubmit → `hello@ankaturdatca.com` kutusuna düşer | FormSubmit (key yok) |

Kısaca: **müşteri domain + e-postanın sahibi olur; site bizde barınır ve bizim tarafımızdan güncellenir.** Değişiklik talepleri bize gelir.

---

## 1. Domain devri (GoDaddy hesap-taşıma)

Müşterinin GoDaddy hesabı olduğu için en temiz yol **hesaptan-hesaba taşıma** (ICANN 60 gün transfer kilidine takılmaz; registrar değişmiyor).

**Gerekli:** Müşterinin GoDaddy hesabının **e-posta adresi veya müşteri numarası.**

**Adımlar (bizim GoDaddy hesabımızdan):**
1. GoDaddy → Domainlerim → `ankaturdatca.com` → **Alan Adı Ayarları**.
2. **"Alan adını başka bir hesaba taşı" / "Transfer to another GoDaddy account"** seçeneği.
3. Müşterinin GoDaddy hesap e-postasını gir, onayla.
4. Müşteri kendi GoDaddy hesabında gelen **kabul e-postasını** onaylar. Taşıma tamamlanır (genelde dakikalar).

**Not:** Taşımadan sonra DNS kayıtları çoğunlukla korunur ama **mutlaka doğrulanır** (aşağıdaki kontrol listesi).

---

## 2. Devir sonrası doğrulama (müşteri hesabında)

Domain taşındıktan sonra müşterinin GoDaddy hesabında şunları teyit et:

- **DNS kayıtları duruyor mu?** (siteyi GitHub Pages'e yönlendirir)
  - `A` · `@` · `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
  - `CNAME` · `www` · `subbarca.github.io`
  - E-posta kayıtları (MX `secureserver.net`, SPF/DMARC, bounces/dkim CNAME'leri) yerinde mi
- **GitHub Pages:** `SubBaRcA/ankaturdatca` reposunda custom domain `www.ankaturdatca.com` "verified" + HTTPS "Enforce" açık mı.
- **E-posta (Conversations):** `hello@ankaturdatca.com` müşterinin hesabında görünüyor mu; bildirim adresi **müşterinin e-postasına** çevrildi mi (şu an `barisesmer@hotmail.com`).

---

## 3. Müşteriye teslim edilenler

- **Domain sahipliği:** kendi GoDaddy hesabında `ankaturdatca.com`.
- **E-posta kutusu:** `hello@ankaturdatca.com` (GoDaddy Conversations, ücretsiz).
  - Kullanım: GoDaddy uygulaması (telefon) veya `conversations.godaddy.com` (tarayıcı).
  - Sol menü **Konuşmalar → Gelen Kutusu**. ("E-posta" sekmesi ücretli üründür, o değil.)
  - Ayda 30 mesaja kadar gönderim ücretsiz; yeni mesaj bildirimi kayıtlı e-postaya düşer.
- **Web sitesi:** `https://www.ankaturdatca.com` — bizde barınır, güncellemeler bize iletilir.
- **(Opsiyonel iyi niyet):** kaynak kodun bir kopyası (zip veya GitHub) — kilitlenme endişesi olmasın diye.

---

## 4. Bizde kalan (yönetim)

- **GitHub Pages** hosting: repo `SubBaRcA/ankaturdatca` (host, SSL, deploy). Güncelleme = `main`'e push → GitHub Actions otomatik yayınlar. Ücretsiz.
- **Kaynak kod** ve gelecekteki güncellemeler.
- Değişiklik / içerik güncelleme talepleri → bize.
- *(Ticari not: aylık/yıllık bakım ücreti burada konumlandırılabilir — karma modelin tekrarlayan gelir tarafı. Not: GitHub Pages'in ticari kullanımı resmi olarak "küçük site" toleransındadır; trafik büyürse Cloudflare Pages'e taşımak resmi ücretsiz-ticari seçenektir.)*

---

## 5. Teslim ÖNCESİ tamamlanacaklar (go-live)

Durum:

1. ✅ **Hosting:** GitHub Pages'e taşındı (Vercel Hobby ticari kullanımı bloke ediyordu). DNS GitHub'a çevrildi (A x4 + CNAME www).
2. ⏳ **HTTPS:** GitHub Let's Encrypt sertifikasını üretiyor; hazır olunca "Enforce HTTPS" açılır.
3. ⏳ **Form aktivasyonu:** İlk gönderimde FormSubmit `hello@`'a "Activate Form" maili yollar; Şahin bir kez tıklar → form canlı.
4. ⬜ **Yüksek çözünürlüklü logo** (opsiyonel): mevcut 150×150 logo header'da bulanık; Şahin gönderince güncellenir.
5. ⬜ **Şahin Kaptan metni** (opsiyonel): teknemiz sayfası için kısa bio.

---

## 6. Erişim / kimlik bilgileri (teslimde doldurulacak)

> Güvenlik: şifreleri bu dosyada saklama. Müşteriye ayrı, güvenli kanaldan ilet.

- GoDaddy (müşteri hesabı): `sahinyilmaz.ankatur@gmail.com`
- E-posta bildirim adresi: `[MÜŞTERİ E-POSTASI — teslimde teyit]`
- Rezervasyon formu: FormSubmit → `hello@ankaturdatca.com` (key yok)
- Hosting (bizde): GitHub Pages, repo `SubBaRcA/ankaturdatca` (subbarca)
