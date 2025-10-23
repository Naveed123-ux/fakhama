export const localImages = [
  '/images/WhatsApp Image 2025-10-22 at 7.36.03 PM.jpeg',
  '/images/WhatsApp Image 2025-10-22 at 7.36.04 PM (1).jpeg',
  '/images/WhatsApp Image 2025-10-22 at 7.36.04 PM.jpeg',
  '/images/WhatsApp Image 2025-10-22 at 7.36.05 PM.jpeg',
  '/images/WhatsApp Image 2025-10-22 at 7.36.07 PM.jpeg',
  '/images/WhatsApp Image 2025-10-22 at 7.36.08 PM (1).jpeg',
  '/images/WhatsApp Image 2025-10-22 at 7.36.08 PM (2).jpeg',
  '/images/WhatsApp Image 2025-10-22 at 7.36.08 PM.jpeg',
  '/images/WhatsApp Image 2025-10-22 at 7.36.09 PM (1).jpeg',
  '/images/WhatsApp Image 2025-10-22 at 7.36.09 PM (2).jpeg',
  '/images/WhatsApp Image 2025-10-22 at 7.36.09 PM (3).jpeg',
  '/images/WhatsApp Image 2025-10-22 at 7.36.09 PM.jpeg',
  '/images/WhatsApp Image 2025-10-22 at 7.36.10 PM.jpeg',
  '/images/WhatsApp Image 2025-10-22 at 7.36.11 PM (1).jpeg',
  '/images/WhatsApp Image 2025-10-22 at 7.36.11 PM.jpeg',
  '/images/WhatsApp Image 2025-10-22 at 7.36.12 PM.jpeg',
  '/images/WhatsApp Image 2025-10-22 at 7.36.13 PM (1).jpeg',
  '/images/WhatsApp Image 2025-10-22 at 7.36.13 PM.jpeg',
  '/images/WhatsApp Image 2025-10-22 at 7.36.14 PM.jpeg',
  '/images/WhatsApp Image 2025-10-22 at 7.36.15 PM (1).jpeg',
  '/images/WhatsApp Image 2025-10-22 at 7.36.15 PM.jpeg',
  '/images/WhatsApp Image 2025-10-22 at 7.36.16 PM (1).jpeg',
  '/images/WhatsApp Image 2025-10-22 at 7.36.16 PM.jpeg',
  '/images/WhatsApp Image 2025-10-22 at 7.36.17 PM.jpeg',
  '/images/WhatsApp Image 2025-10-22 at 7.36.19 PM (1).jpeg',
  '/images/WhatsApp Image 2025-10-22 at 7.36.19 PM.jpeg',
  '/images/WhatsApp Image 2025-10-22 at 7.36.20 PM (1).jpeg',
  '/images/WhatsApp Image 2025-10-22 at 7.36.20 PM.jpeg',
  '/images/WhatsApp Image 2025-10-22 at 7.36.22 PM (1).jpeg',
  '/images/WhatsApp Image 2025-10-22 at 7.36.22 PM.jpeg',
  '/images/WhatsApp Image 2025-10-22 at 7.36.28 PM.jpeg',
  '/images/WhatsApp Image 2025-10-22 at 7.36.30 PM (1).jpeg',
  '/images/WhatsApp Image 2025-10-22 at 7.36.30 PM.jpeg',
  '/images/WhatsApp Image 2025-10-22 at 7.36.31 PM (1).jpeg',
  '/images/WhatsApp Image 2025-10-22 at 7.36.31 PM (2).jpeg',
  '/images/WhatsApp Image 2025-10-22 at 7.36.31 PM.jpeg',
  '/images/WhatsApp Image 2025-10-22 at 7.36.32 PM (1).jpeg',
  '/images/WhatsApp Image 2025-10-22 at 7.36.32 PM (2).jpeg',
  '/images/WhatsApp Image 2025-10-22 at 7.36.32 PM.jpeg',
  '/images/WhatsApp Image 2025-10-22 at 7.36.33 PM (1).jpeg',
  '/images/WhatsApp Image 2025-10-22 at 7.36.33 PM (2).jpeg',
  '/images/WhatsApp Image 2025-10-22 at 7.36.33 PM.jpeg',
  '/images/WhatsApp Image 2025-10-22 at 7.36.34 PM (1).jpeg',
  '/images/WhatsApp Image 2025-10-22 at 7.36.34 PM (2).jpeg',
  '/images/WhatsApp Image 2025-10-22 at 7.36.34 PM.jpeg',
  '/images/WhatsApp Image 2025-10-22 at 7.36.35 PM (1).jpeg',
  '/images/WhatsApp Image 2025-10-22 at 7.36.35 PM (2).jpeg',
  '/images/WhatsApp Image 2025-10-22 at 7.36.35 PM.jpeg',
  '/images/WhatsApp Image 2025-10-22 at 7.36.36 PM (1).jpeg',
  '/images/WhatsApp Image 2025-10-22 at 7.36.36 PM (2).jpeg',
  '/images/WhatsApp Image 2025-10-22 at 7.36.36 PM.jpeg',
  '/images/WhatsApp Image 2025-10-22 at 7.36.37 PM (1).jpeg',
  '/images/WhatsApp Image 2025-10-22 at 7.36.37 PM (2).jpeg',
  '/images/WhatsApp Image 2025-10-22 at 7.36.37 PM.jpeg',
  '/images/WhatsApp Image 2025-10-22 at 7.36.38 PM (1).jpeg',
  '/images/WhatsApp Image 2025-10-22 at 7.36.38 PM (2).jpeg',
  '/images/WhatsApp Image 2025-10-22 at 7.36.38 PM.jpeg',
  '/images/WhatsApp Image 2025-10-22 at 7.36.39 PM (1).jpeg',
  '/images/WhatsApp Image 2025-10-22 at 7.36.39 PM (2).jpeg',
  '/images/WhatsApp Image 2025-10-22 at 7.36.39 PM.jpeg',
];

export const getImage = (index: number): string => {
  return localImages[index % localImages.length];
};

export const getImages = (count: number, startIndex = 0): string[] => {
  const images: string[] = [];
  for (let i = 0; i < count; i++) {
    images.push(getImage(startIndex + i));
  }
  return images;
};
