import React from 'react'
import DisplayCard from '../custom/displayCard'

const productDataset = [
  {
    itemName: 'Bold Chain Necklace',
    itemDetails: 'Gold-plated, statement piece perfect for everyday glam.',
    price: 24.99,
    percentage: 15,
  },
  {
    itemName: 'Retro Cat Eye Sunglasses',
    itemDetails: 'Chic and vintage-inspired with UV400 protection.',
    price: 19.5,
    percentage: 20,
  },
  {
    itemName: 'Stackable Rings Set',
    itemDetails: 'Set of 5 minimalist rings in gold and silver tones.',
    price: 14.0,
    percentage: 10,
  },
  {
    itemName: 'Layered Anklet Trio',
    itemDetails: 'Three-in-one beach-style anklets with pearl detail.',
    price: 12.75,
    percentage: 25,
  },
  {
    itemName: 'Oversized Tinted Shades',
    itemDetails: 'Trendy shades with bold frames for standout looks.',
    price: 29.99,
    percentage: 30,
  },
  {
    itemName: 'Pearl Stud Earrings',
    itemDetails: 'Elegant faux pearl earrings for both casual and formal wear.',
    price: 9.99,
    percentage: 5,
  },
  {
    itemName: 'Leather Bracelet Duo',
    itemDetails: 'Unisex black and brown wrap bracelets with metallic charms.',
    price: 17.25,
    percentage: 18,
  },
  {
    itemName: 'Rhinestone Hair Clips',
    itemDetails: 'Set of 4 shimmering clips to glam up your hairstyle.',
    price: 8.5,
    percentage: 10,
  },
  {
    itemName: 'Sleek Aviator Glasses',
    itemDetails: 'Classic aviator frames for timeless street style.',
    price: 21.0,
    percentage: 12,
  },
  {
    itemName: 'Boho Choker Set',
    itemDetails: '3-piece choker collection with velvet and lace designs.',
    price: 16.99,
    percentage: 22,
  },
]

const ArrivalsSection = () => {
  return (
    <section className="px-4 py-10 sm:px-6 lg:px-12 xl:px-20">
      <div className="text-center mb-10">
        <h1 className="text-3xl sm:text-4xl font-bold text-neutral-800 dark:text-white">
          ✨ New Arrivals
        </h1>
        <p className="text-neutral-500 dark:text-neutral-300 mt-2 text-sm sm:text-base">
          Discover our latest accessories to elevate your everyday style.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
        {productDataset.map((product, index) => (
          <DisplayCard
            key={index}
            itemName={product.itemName}
            itemDetails={product.itemDetails}
            price={product.price}
            percentage={product.percentage}
          />
        ))}
      </div>
    </section>
  )
}

export default ArrivalsSection
