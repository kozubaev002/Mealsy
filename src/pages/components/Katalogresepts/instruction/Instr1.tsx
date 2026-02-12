import React, { useState } from 'react';
// Импорты Шага 3
import img41_1 from '../../image/image 41.png';
import img41_2 from '../../image/image 41 (1).png';
import img41_3 from '../../image/image 41 (3).png';
import img41_4 from '../../image/image 41 (4).png';

// Импорты Шага 4
import img42_1 from '../../image/image 42.png';
import img42_2 from '../../image/image 42 (1).png';
import img42_3 from '../../image/image 42 (3).png';
import img42_4 from '../../image/image 42 (4).png';

// Импорты Шага 5
import img43_1 from '../../image/image 43.png';
import img43_2 from '../../image/image 43 (1).png';
import img43_3 from '../../image/image 43 (2).png';
import img43_4 from '../../image/image 43 (3).png';

// Интерфейсы для типизации
interface StepIngredient {
  amount?: string;
  name: string;
}

interface StepProps {
  number: string;
  images: string[];
  ingredients: StepIngredient[];
  tools: string;
  description: string;
}

// Универсальный компонент шага
const StepBlock: React.FC<StepProps> = ({ number, images, ingredients, tools, description }) => (
  <section className="mb-12">
    <h2 className="text-xl font-bold mb-4">Шаг {number}</h2>
    
    <div className="grid grid-cols-2 gap-2 mb-4">
      {images.map((src, idx) => (
        <img 
          key={idx} 
          src={src} 
          alt={`step-${number}-${idx}`} 
          className="rounded-lg w-full aspect-[350/212] object-cover bg-gray-50" 
        />
      ))}
    </div>

    <div className="grid grid-cols-2 gap-x-4 gap-y-1 mb-4 text-sm">
      {ingredients.map((item, idx) => (
        <p key={idx}>
          {item.amount && <strong className="mr-1">{item.amount}</strong>}
          <span className="text-gray-700">{item.name}</span>
        </p>
      ))}
    </div>

    <div className="flex items-center gap-2 mb-3 text-sm font-bold">
      <span role="img" aria-label="utensils">🍳</span>
      <span className="uppercase tracking-wide">{tools}</span>
    </div>

    <p className="text-gray-600 text-sm leading-relaxed">
      {description}
    </p>
  </section>
);

export function Instr1() {
  const [rating, setRating] = useState(0);

  return (
    <div className="max-w-2xl mx-auto p-4 bg-white font-sans text-[#333]">
      
      {/* Шаг 3/5 */}
      <StepBlock 
        number="3/5"
        images={[img41_1, img41_2, img41_3, img41_4]}
        ingredients={[
          { amount: "2 ст.л.", name: "сливочного масла" },
          { amount: "2 ст.л.", name: "муки" },
          { name: "Соль" }
        ]}
        tools="Ложка"
        description="Добавьте сливочное масло, мелко нарезанные лук и чеснок и обжаривайте 3 – 5 мин., пока они не станут мягкими и слегка подрумянятся. Добавьте грибы и хорошо посолите по вкусу. Увеличьте огонь до максимума и обжаривайте 8 мин., часто помешивая, пока они не начнут подрумяниваться. Затем добавьте муку и обжаривайте около 1 мин., постоянно помешивая."
      />

      {/* Шаг 4/5 */}
      <StepBlock 
        number="4/5"
        images={[img42_1, img42_2, img42_3, img42_4]}
        ingredients={[
          { amount: "1л.", name: "кипятка" },
          { amount: "300 гр.", name: "макарон" },
          { amount: "2 ст.л.", name: "Вустерского соуса" },
          { name: "Соль" },
          { amount: "1 ч.л.", name: "Горчицы" },
          { name: "Перец" }
        ]}
        tools="Разделочная доска - нож"
        description="Налейте кипяток, добавьте вустерский соус и горчицу. Доведите до кипения, хорошо помешивая, и добавьте макароны. Приправьте солью и перцем по вкусу. Снова доведите до кипения, затем накройте крышкой и уменьшите огонь до среднего. Дайте покипеть на медленном огне 7 – 8 мин., пока макароны не будут готовы."
      />

      {/* Шаг 5/5 */}
      <StepBlock 
        number="5/5"
        images={[img43_1, img43_2, img43_3, img43_4]}
        ingredients={[
          { amount: "150 гр.", name: "сметаны" },
          { name: "Соль" },
          { name: "Перец" }
        ]}
        tools="Фольга"
        description="Добавьте сметану и снова приправьте солью и перцем по вкусу, перемешайте до получения однородной массы. Добавьте говядину обратно в сковороду и доведите до кипения, пока говядина снова не прогреется. Подавайте сразу, при желании украсив зеленым луком. Наслаждайтесь!"
      />

      {/* Блок фидбека */}
      <div className="mt-12 py-8 border-t border-gray-100 flex flex-col items-center">
        <h3 className="font-bold text-lg mb-4">Вам понравился рецепт?</h3>
        
        <div className="flex gap-1 mb-8 text-3xl">
          {[1, 2, 3, 4, 5].map((star) => (
            <button
              key={star}
              onClick={() => setRating(star)}
              className={`transition-colors ${star <= rating ? 'text-yellow-400' : 'text-gray-200'}`}
            >
              ★
            </button>
          ))}
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4 w-full text-sm text-gray-500">
          <button className="flex items-center gap-2 hover:text-gray-800 transition-colors">
            <span className="text-xl">🔖</span> добавить в кулинарную книгу
          </button>
          
          <div className="flex items-center gap-3 ml-auto">
            <span>поделиться</span>
            <div className="flex gap-2">
              <div className="w-8 h-8 bg-[#4CAF50] rounded-lg flex items-center justify-center text-white font-bold cursor-pointer">vk</div>
              <div className="w-8 h-8 bg-[#FF9800] rounded-lg flex items-center justify-center text-white font-bold cursor-pointer">ok</div>
              <div className="w-8 h-8 bg-[#2196F3] rounded-lg flex items-center justify-center text-white font-bold cursor-pointer">tg</div>
              <div className="w-8 h-8 bg-[#8BC34A] rounded-lg flex items-center justify-center text-white font-bold cursor-pointer">wa</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}