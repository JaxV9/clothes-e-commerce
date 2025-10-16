import { Clothe } from '../../../models/models';

export const fakeClothes: Clothe[] = [
  {
    id: 1,
    name: 'White Borough',
    description:
      'Inspired by the urban energy of New York, White Borough is a sleek white sneaker that blends streetwear with city-chic elegance. Its streamlined silhouette and medium profile make it perfect for a look that is both casual and sophisticated—ideal for strolling through bustling avenues or exploring trendy neighborhoods.',
    price: 140.0,
    images: [
      {
        image:
          'https://abpydbcfmhdslktmddht.supabase.co/storage/v1/object/public/clothes/clothe_1/sneakers1.png',
      },
      {
        image:
          'https://abpydbcfmhdslktmddht.supabase.co/storage/v1/object/public/clothes/clothe_1/sneakers1PNJ1.png',
      },
      {
        image:
          'https://abpydbcfmhdslktmddht.supabase.co/storage/v1/object/public/clothes/clothe_1/sneakers1PNJ2.png',
      },
    ],
  },
  {
    id: 2,
    name: 'SoHo Glow',
    description:
      'SoHo Glow is a chic white sweater that captures the effortless elegance of New York streets. With a medium fit that flatters without restricting, it’s perfect for layering or wearing on its own. Soft, versatile, and stylish, it transitions seamlessly from a casual coffee run to an evening stroll in the city.',
    price: 80.0,
    images: [
      {
        image:
          'https://abpydbcfmhdslktmddht.supabase.co/storage/v1/object/public/clothes/clothe_2/clothe2.webp',
      },
      {
        image:
          'https://abpydbcfmhdslktmddht.supabase.co/storage/v1/object/public/clothes/clothe_2/clothe2PNJ1.webp',
      },
      {
        image:
          'https://abpydbcfmhdslktmddht.supabase.co/storage/v1/object/public/clothes/clothe_2/clothe2PNJ2.webp',
      },
    ],
  },
];
