import React from 'react';
import { Link } from 'react-router-dom'; 
import img from '../../assets/Group 67.png';

export const NotFound: React.FC = () => {
  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-white px-4 font-sans">
      <div className="flex flex-col items-center text-center max-w-md">
        
        {/* Картинка с блендером 404 */}
        <div className="mb-8 w-full max-w-[320px]">
          <img 
            src={img} 
            alt="404 Not Found" 
            className="w-full h-auto object-contain animate-in fade-in zoom-in duration-500" 
          />
        </div>
        
        {/* Заголовок */}
        <h2 className="text-2xl md:text-3xl font-extrabold text-[#2D3436] mb-4">
          Упс! Страница не найдена.
        </h2>
        
        {/* Описание */}
        <p className="text-gray-500 text-sm md:text-base leading-relaxed mb-10">
          Этот раздел еще находится в разработке.<br />
          Еще чуть-чуть и он будет готов!
        </p>
        
        {/* Кнопка */}
        <Link 
          to="/" 
          className="bg-[#70b34d] text-white px-10 py-3.5 rounded-2xl font-bold text-sm shadow-md hover:bg-[#5f9941] hover:shadow-lg hover:scale-[1.02] transition-all active:scale-95"
        >
          Вернуться на главную
        </Link>
        
      </div>
    </div>
  );
};