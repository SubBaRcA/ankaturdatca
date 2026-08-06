import type { ImageMetadata } from 'astro';

// Tüm fotoğraflar astro:assets ile derleme sırasında WebP'ye optimize edilir.
const files = import.meta.glob<ImageMetadata>('../assets/photos/*.{jpg,jpeg,webp}', {
  eager: true,
  import: 'default',
});

function byId(id: string): ImageMetadata {
  const key = Object.keys(files).find((k) => k.includes(id));
  if (!key) throw new Error(`Fotoğraf bulunamadı: ${id}`);
  return files[key];
}

// İçerikte kullanılan adlandırılmış seçimler
export const img = {
  heroHome: byId('636759846'), // kayalık + turkuaz
  coveLadder: byId('499788017'), // merdiven + berrak su
  waterClear: byId('497910266'), // cam gibi deniz
  boatDeck: byId('522659483'), // tekne güvertesi
  covePebbles: byId('752268577'), // çakıl taşlı koy
  tall: byId('501334393'), // en yüksek çözünürlük
  reflection: byId('499888788'),
  green: byId('503310487'),
};

// Galeri: tüm fotoğraflar
const alts = [
  'Datça tekne turunda berrak turkuaz koy',
  'Anka Tur Datça özel tekne turu',
  'Datça saklı koyda cam gibi deniz',
  'Tekneden Datça koyu manzarası',
  'Datça yüzme molası, berrak su',
  'Datça yarımadası kayalık koy',
  'Özel tekne turunda Datça denizi',
  'Datça koyları tekne turu',
];

export const gallery = Object.keys(files)
  .sort()
  .map((k, i) => ({ src: files[k], alt: alts[i % alts.length] }));
