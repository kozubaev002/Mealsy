import React, { useState } from 'react';

// Импорты ваших изображений
import savesIcon from '../../image/Component 3 (1).png';
import heartIcon from '../../image/heart.png';
import blinchikiImg from '../../image/image 10.png';
import araxisImg from '../../image/image 11.png';
import chocolateImg from '../../image/image 12 (1).png';
import malinovyeImg from '../../image/image 13.png';
import limonImg from '../../image/image 14.png';
import appleImg from '../../image/image 8.png';
import kokosImg from '../../image/image 9.png';
import vafliImg from '../../image/waffle 1.png';

interface Recipe {
  id: number;
  title: string;
  image: string;
  likes: number;
  time: string;
}

const RECIPES_DATA: Recipe[] = [
  { id: 1, title: 'Яблочная крошка в стакане', image: appleImg, likes: 222, time: '40 мин' },
  { id: 2, title: 'Вафли с ягодным вареньем', image: vafliImg, likes: 32, time: '40 мин' },
  { id: 3, title: 'Кокосовый рисовый пудинг с манговым соусом', image: kokosImg, likes: 222, time: '40 мин' },
  { id: 4, title: 'Безглютеновые тыквенно-черничные блинчики', image: blinchikiImg, likes: 222, time: '40 мин' },
  { id: 5, title: 'Печенье с арахисовым маслом и шоколадной крошкой без муки', image: araxisImg, likes: 222, time: '40 мин' },
  { id: 6, title: 'Соленое шоколадной печенье с карамелью', image: chocolateImg, likes: 222, time: '40 мин' },
  { id: 7, title: 'Малиновые кексы с расплавленным шоколадом', image: malinovyeImg, likes: 222, time: '40 мин' },
  { id: 8, title: 'Лимонный пирог с черникой', image: limonImg, likes: 222, time: '40 мин' },
];

const RecipeCard: React.FC<{ recipe: Recipe }> = ({ recipe }) => {
  const [isLiked, setIsLiked] = useState(false);
  const [isSaved, setIsSaved] = useState(false);

  return (
    <div className="flex flex-col">
      <div className="relative aspect-[3.5/4] rounded-[32px] overflow-hidden mb-3 cursor-pointer group shadow-sm">
        <img
          src={recipe.image}
          alt={recipe.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {/* Кнопка сохранения (Желтый круг) */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            setIsSaved(!isSaved);
          }}
          className={`absolute top-4 right-4 z-10 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
            isSaved ? 'bg-[#FFD700]' : 'bg-black/20 hover:bg-black/40'
          }`}
        >
          <img
            src={savesIcon}
            alt="save"
            className={`w-5 h-5 transition-all ${isSaved ? 'brightness-0' : 'brightness-200'}`}
          />
        </button>

        {/* Нижняя панель с лайком и временем */}
        <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
          {/* Лайк (Красный круг + текст) */}
          <div 
            className="flex items-center gap-2 group/like"
            onClick={(e) => {
              e.stopPropagation();
              setIsLiked(!isLiked);
            }}
          >
            <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
              isLiked ? 'bg-[#FF4C4C]' : 'bg-black/20 hover:bg-black/40'
            }`}>
              <img
                src={heartIcon}
                alt="likes"
                className="w-5 h-5 brightness-200"
              />
            </div>
            <span className="text-white text-[15px] font-bold drop-shadow-md">
              {isLiked ? recipe.likes + 1 : recipe.likes}
            </span>
          </div>

          {/* Время (Серый овал) */}
          <div className="bg-black/40 backdrop-blur-sm px-4 py-2 rounded-full text-white text-[13px] font-bold">
            {recipe.time}
          </div>
        </div>
      </div>

      <h3 className="text-[16px] font-bold leading-tight text-[#1A1A1A] hover:text-[#74C365] transition-colors cursor-pointer px-2">
        {recipe.title}
      </h3>
    </div>
  );
};

export const NewRecipes: React.FC = () => {
  return (
    <section className="max-w-[1240px] mx-auto px-4 py-12">
      <div className="mb-10">
        <h2 className="text-[32px] font-bold text-[#1A1A1A]">
          Новые рецепты
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-10">
        {RECIPES_DATA.map((recipe) => (
          <RecipeCard key={recipe.id} recipe={recipe} />
        ))}
      </div>

      <div className="mt-16 flex justify-center">
        <button className="bg-[#74C365] hover:bg-[#68b15a] text-white font-bold py-4 px-12 rounded-2xl transition-all text-[16px] active:scale-95 shadow-lg shadow-[#74C365]/20">
          Смотреть все рецепты
        </button>
      </div>
    </section>
  );
};

export default NewRecipes;