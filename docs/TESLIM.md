# Anka Tur Datça — Teslim Dokümanı

**Model:** Karma teslim
**Tarih:** 2026-08-06

| Varlık | Sahiplik / Yönetim | Nerede |
|--------|--------------------|--------|
| Domain `ankaturdatca.com` | **Müşteri** (kendi GoDaddy hesabı) | GoDaddy |
| E-posta `hello@ankaturdatca.com` | **Müşteri** (GoDaddy Conversations) | GoDaddy Conversations |
| Web sitesi (host + bakım) | **Baris (biz)** | Vercel (`ankatur-site`) |
| Kaynak kod | Baris (kopya müşteriye verilebilir) | `/Users/baris/ankatur-site` |
| Rezervasyon formu | Web3Forms → müşterinin kutusuna düşer | Web3Forms |

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

- **DNS kayıtları duruyor mu?**
  - `A` · `@` · `76.76.21.21`  (siteyi bizim Vercel'e yönlendirir)
  - `CNAME` · `www` · `cname.vercel-dns.com`
  - E-posta kayıtları (MX `secureserver.net`, bounces/dkim CNAME'leri) yerinde mi
- **Vercel:** `ankatur-site` projesinde domain hâlâ "Valid" mi (DNS aynı kaldığı için değişmez).
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

- **Vercel projesi** `ankatur-site` (host, SSL, deploy).
- **Kaynak kod** ve gelecekteki güncellemeler.
- Değişiklik / içerik güncelleme talepleri → bize.
- *(Ticari not: aylık/yıllık bakım-host ücreti burada konumlandırılabilir — karma modelin tekrarlayan gelir tarafı.)*

---

## 5. Teslim ÖNCESİ tamamlanacaklar (go-live)

Müşteriye çalışan bir ürün teslim etmek için önce:

1. **Apex DNS oturması:** `ankaturdatca.com` (www zaten Vercel'de) GoDaddy park'ından çıkıp Vercel'e dönmeli. Gerekirse A `@` kaydını sil + tekrar ekle.
2. **Web3Forms key:** `hello@ankaturdatca.com` ile web3forms.com'dan ücretsiz key al → `src/data/site.ts` → `web3formsKey`. Böylece rezervasyon talepleri müşterinin kutusuna düşer. Sonra `vercel --prod` ile yeniden deploy.
3. **Yüksek çözünürlüklü logo** (opsiyonel ama önerilir): mevcut 150×150 logo header'da bulanık.
4. Vercel'de birincil alan adı = `www.ankaturdatca.com`, apex → www yönlendirmesi.

---

## 6. Erişim / kimlik bilgileri (teslimde doldurulacak)

> Güvenlik: şifreleri bu dosyada saklama. Müşteriye ayrı, güvenli kanaldan ilet.

- GoDaddy (müşteri hesabı): `[MÜŞTERİ GODADDY E-POSTASI]`
- E-posta bildirim adresi (yeni): `[MÜŞTERİ E-POSTASI]`
- Web3Forms hesabı: `hello@ankaturdatca.com`
- Vercel projesi (bizde): `ankatur-site` (subbarca)
