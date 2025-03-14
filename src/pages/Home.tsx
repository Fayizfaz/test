import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, Star, Tag } from 'lucide-react';
import { products } from '../data/products';
import ProductCard from '../components/ProductCard';

const heroImages = [
  {
    url: 'https://i.pinimg.com/736x/c6/9d/6b/c69d6bee94bd9c4707d2c335ef1d183d.jpg',
    title: 'Discover Your Signature Scent',
    subtitle: 'Explore our collection of luxury fragrances crafted with the finest ingredients.'
  },
  {
    src: "/read-e-catalog", // Ensure this image exists in the correct directory
    title: 'Luxury in Every Drop',
    subtitle: 'Experience the art of perfumery with our exclusive collections.'
  },
  {
    url: 'https://i.pinimg.com/736x/f4/28/a8/f428a8f8fcda2f0f5247f43acf1dea16.jpg',
    title: 'Elegance Bottled',
    subtitle: 'Find your perfect fragrance from our curated selection.'
  }
];

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const featuredProducts = products.filter(product => product.featured);
  const newProducts = products.filter(product => product.isNew);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((current) => (current + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section with Slideshow */}
      <div className="relative w-full h-[200px] md:h-[300px] lg:h-[600px]">
        {heroImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div className="absolute inset-0">
              <img className="w-full h-full object-cover" src={image.src || image.url} alt={`Slide ${index + 1}`} />
              <div className="absolute inset-0 bg-black/30 mix-blend-multiply" />
            </div>
            <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
              <div className="max-w-3xl">
                <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
                  {image.title}
                </h1>
                <p className="mt-6 text-xl text-gray-100">{image.subtitle}</p>
                <div className="mt-10">
                  <Link to="/products" className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-black bg-white hover:bg-gray-50">
                    Shop Now
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Slide Indicators */}
        <div className="absolute bottom-8 left-0 right-0 flex justify-center space-x-2">
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentSlide ? 'bg-white' : 'bg-white/50'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* New Arrivals */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex items-center gap-2 mb-8">
          <Tag className="h-6 w-6 text-purple-600" />
          <h2 className="text-2xl font-bold text-gray-900">New Arrivals</h2>
        </div>
        <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
          {newProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Featured Products */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex items-center gap-2 mb-8">
          <Sparkles className="h-6 w-6 text-purple-600" />
          <h2 className="text-2xl font-bold text-gray-900">Featured Collections</h2>
        </div>
        <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* About Preview */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 mb-8">
            <Star className="h-6 w-6 text-purple-600" />
            <h2 className="text-2xl font-bold text-gray-900">About Liva</h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-gray-600">
                Liva Perfumes brings you exceptional fragrances that capture the essence of luxury and sophistication.
                Each scent is carefully crafted using the finest ingredients, creating unique and lasting impressions.
              </p>
              <div className="mt-8">
                <Link to="/about" className="text-purple-600 font-medium hover:text-purple-700">Learn more about us →</Link>
              </div>
            </div>
            <div className="relative h-96">
  <img 
    src={`${import.meta.env.BASE_URL}logo.png`} 
    alt="About Liva" 
    className="absolute inset-0 w-full h-full object-cover rounded-lg" 
  />
</div>

          </div>
        </div>
      </section>
    </div>
  );
}
