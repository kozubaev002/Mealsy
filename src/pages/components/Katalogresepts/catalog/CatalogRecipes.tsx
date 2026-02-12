import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import ruskaya from '../../image/image 44.png';
import aziatskaya from '../../image/Rectangle 13 (1).png';
import britanskaya from '../../image/Rectangle 14 (1).png';
import china from '../../image/image 44 (1).png';
import fransyskaya from '../../image/image 44 (2).png';
import germanskaya from '../../image/image 44 (3).png';
import grecheskaya from '../../image/image 44 (4).png';
import indiyskaya from '../../image/image 44 (5).png';
import italyanskaya from '../../image/image 44 (6).png';
import ispanskaya from '../../image/image 44 (7).png';
import japonskaya from '../../image/Mask group (18).png';
import meksikanskaya from '../../image/image 44 (9).png';
import turkiya from '../../image/image 44 (8).png';
import { Filtered } from '../filtered/Filtered'

interface Cuisine {
  name: string;
  img: string;
}

export function CatalogRecipes() {
  const scrollRef = useRef<HTMLDivElement>(null); 

  const cuisines: Cuisine[] = [
    { name: 'Русская кухня', img: ruskaya },
    { name: 'Азиатская кухня', img: aziatskaya },
    { name: 'Британская кухня', img: britanskaya },
    { name: 'Китайская кухня', img: china },
    { name: 'Французская кухня', img: fransyskaya },
    { name: 'Немецкая кухня', img: germanskaya },
    { name: 'Греческая кухня', img: grecheskaya },
    { name: 'Индийская кухня', img: indiyskaya },
    { name: 'Итальянская кухня', img: italyanskaya },
    { name: 'Испанская кухня', img: ispanskaya },
    { name: 'Японская кухня', img: japonskaya },
    { name: 'Мексиканская кухня', img: meksikanskaya },
    { name: 'Турецкая кухня', img: turkiya },
  ];

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { clientWidth } = scrollRef.current;
      const scrollAmount = direction === 'left' ? -clientWidth / 2 : clientWidth / 2;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section className="max-w-7xl mx-auto px-4 py-8 font-sans select-none">
      <nav className="text-sm mb-6 flex gap-1 items-center text-[#B2C2AD]">
        <span>Главная</span>
        <span>/</span>
        <span className="text-[#333333] font-medium">Каталог рецептов</span>
      </nav>

      <div className="mb-8">
        <h2 className="text-3xl font-bold text-[#333333] mb-4">Каталог рецептов</h2>
        <div className="flex gap-4">
          <button 
            type="button"
            onClick={() => scroll('left')}
            className="text-[#C5E1A5] hover:text-[#6ABF69] transition-colors active:scale-90"
          >
            <ChevronLeft size={36} strokeWidth={1.5} />
          </button>
          <button 
            type="button"
            onClick={() => scroll('right')}
            className="text-[#6ABF69] hover:opacity-70 transition-colors active:scale-90"
          >
            <ChevronRight size={36} strokeWidth={1.5} />
          </button>
        </div>
      </div>

      <div className="relative">
        <div 
          ref={scrollRef}
          className="flex overflow-x-auto gap-4 pb-4 scrollbar-hide snap-x scroll-smooth"
        >
          {cuisines.map((item, index) => (
            <div 
              key={index} 
              className="flex-none w-[140px] md:w-[160px] snap-start group cursor-pointer"
            >
              <div className="aspect-square overflow-hidden rounded-2xl mb-3">
                <img 
                  src={item.img} 
                  alt={item.name} 
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <p className="text-center text-sm font-medium text-[#333333] leading-tight">
                {item.name.split(' ').map((word, i) => (
                  <span key={i} className="block">{word}</span>
                ))}
              </p>
            </div>
          ))}
        </div>
        <div>
          <Filtered />
        </div>
      </div>

      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
    
  );
}