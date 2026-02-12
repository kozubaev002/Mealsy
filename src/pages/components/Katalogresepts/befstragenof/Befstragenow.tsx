import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import type { Variants } from 'framer-motion'; 

import befstragenow from '../../image/image 37.png';
import pancakes from '../../image/pancakes-with-blueberry 1.png';
import { Instruction } from '../instruction/Instruction'
import { Instr1 } from '../instruction/Instr1'
import { Instr2 } from '../instruction/Instr2'

/**
 * ИКОНКИ
 */
const BookmarkIcon: React.FC = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M19 21l-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z" />
  </svg>
);

const ShareIcon: React.FC = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path 
      d="M20 13V19C20 20.1046 19.1046 21 18 21H6C4.89543 21 4 20.1046 4 19V13" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    />
    <path 
      d="M12 15V3M12 3L17 8M12 3L7 8" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    />
  </svg>
);

export const Befstragenow: React.FC = () => {
  const [isSaved, setIsSaved] = useState<boolean>(false);
  const [mainImage, setMainImage] = useState<string>(befstragenow);

  const containerVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut", staggerChildren: 0.12 }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <motion.div 
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="max-w-[1280px] mx-auto px-4 py-8 font-sans text-[#1A1A1A]"
    >
      {/* Breadcrumbs */}
      <nav className="text-[14px] text-gray-400 mb-8 flex items-center gap-2 overflow-x-auto no-scrollbar whitespace-nowrap pb-2">
        <span className="hover:text-[#74C365] cursor-pointer transition-colors">Главная</span>
        <span className="text-gray-300">/</span>
        <span className="hover:text-[#74C365] cursor-pointer transition-colors">Каталог рецептов</span>
        <span className="text-gray-300">/</span>
        <span className="text-gray-600 font-semibold italic">Бефстроганов в одной кастрюле</span>
      </nav>

      <div className="flex flex-col lg:flex-row gap-10 xl:gap-20">
        
        {/* LEFT COLUMN */}
        <div className="w-full lg:w-[45%]">
          <motion.div 
            className="rounded-[48px] overflow-hidden shadow-2xl border-4 border-white aspect-[4/3] md:aspect-square lg:aspect-auto bg-gray-50"
          >
            <AnimatePresence mode="wait">
              <motion.img 
                key={mainImage}
                src={mainImage}
                initial={{ opacity: 0, filter: 'blur(10px)' }}
                animate={{ opacity: 1, filter: 'blur(0px)' }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="w-full h-full object-cover max-h-[550px]"
                alt="Основное блюдо"
              />
            </AnimatePresence>
          </motion.div>

          {/* Thumbnails */}
          <div className="flex gap-5 mt-8 overflow-x-auto pb-2 no-scrollbar">
            {[befstragenow, pancakes].map((img, i) => (
              <motion.button
                key={i}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setMainImage(img)}
                className={`flex-shrink-0 w-24 h-24 rounded-[24px] overflow-hidden border-4 transition-all duration-300 ${
                  mainImage === img ? 'border-[#74C365] shadow-lg' : 'border-transparent opacity-60'
                }`}
              >
                <img src={img} className="w-full h-full object-cover" alt={`Миниатюра ${i + 1}`} />
              </motion.button>
            ))}
          </div>

          <motion.div variants={itemVariants} className="mt-12">
            <h3 className="text-[24px] font-black mb-6">Ингредиенты:</h3>
            <div className="bg-white p-6 rounded-[32px] border border-gray-100 shadow-sm space-y-5">
              <div className="flex items-center gap-3 text-[#FF4C4C] font-bold italic">
                <span className="bg-[#FF4C4C] text-white w-6 h-6 rounded-full flex items-center justify-center text-xs not-italic shadow-sm">!</span>
                Дополнительные ингредиенты
              </div>
              <div className="flex flex-wrap gap-3">
                {['Малина', 'Кокосовая стружка'].map(item => (
                  <span key={item} className="px-5 py-2 bg-[#E8EEFF] text-[#4A72FF] rounded-xl text-[14px] font-extrabold hover:bg-[#4A72FF] hover:text-white transition-all cursor-default">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* RIGHT COLUMN */}
        <div className="w-full lg:w-[55%]">
          <div className="flex justify-between items-start gap-6 mb-6">
            <motion.h1 variants={itemVariants} className="text-[36px] md:text-[48px] font-black leading-[1.1] tracking-tight">
              Бефстроганов в <br/> одной кастрюле
            </motion.h1>
            
            <div className="flex gap-3 shrink-0">
              <motion.button 
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                aria-label="Сохранить рецепт"
                onClick={() => setIsSaved(!isSaved)}
                className={`w-14 h-14 rounded-full flex items-center justify-center border-2 transition-all shadow-sm ${
                  isSaved ? 'bg-orange-400 border-orange-400 text-white' : 'bg-gray-100 border-gray-100 text-orange-400'
                }`}
              >
                <BookmarkIcon />
              </motion.button>
              <motion.button 
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                aria-label="Поделиться рецептом"
                className="w-14 h-14 bg-gray-100 border-2 border-gray-100 rounded-full flex items-center justify-center text-orange-400 shadow-sm"
              >
                <ShareIcon />
              </motion.button>
            </div>
          </div>

          <div className="flex gap-3 mb-10">
            {['Завтрак', 'Десерт'].map(tag => (
              <span key={tag} className="px-6 py-2 border-2 border-[#74C365] text-[#74C365] rounded-xl text-[14px] font-black uppercase tracking-wider shadow-sm">
                {tag}
              </span>
            ))}
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 mb-12">
            {[
              { label: 'Готовность', val: '30', sub: 'мин' },
              { label: 'Сложность', val: 'легкая', circle: true },
              { label: 'Острота', chilis: 1 }
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <p className="text-[12px] md:text-[14px] font-bold text-gray-400 mb-4 uppercase tracking-widest">{stat.label}</p>
                <div className="relative w-16 h-16 md:w-20 md:h-20 mx-auto flex items-center justify-center">
                  {stat.circle && (
                    <svg className="absolute inset-0 w-full h-full -rotate-90">
                      <circle cx="50%" cy="50%" r="38%" stroke="#F3F4F6" strokeWidth="4" fill="none" />
                      <circle cx="50%" cy="50%" r="38%" stroke="#74C365" strokeWidth="4" fill="none" strokeDasharray="100" strokeDashoffset="75" strokeLinecap="round" />
                    </svg>
                  )}
                  {stat.chilis ? (
                    <div className="flex gap-0.5 md:gap-1">
                      <span className="text-xl md:text-2xl">🌶️</span>
                      <span className="text-xl md:text-2xl opacity-20 grayscale">🌶️</span>
                      <span className="text-xl md:text-2xl opacity-20 grayscale">🌶️</span>
                    </div>
                  ) : (
                    <div className="leading-tight">
                      <span className="block text-[16px] md:text-[18px] font-black">{stat.val}</span>
                      <span className="text-[10px] text-gray-400 font-bold uppercase">{stat.sub}</span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* KBJU Section */}
          <motion.div variants={itemVariants} className="mb-12">
            <h4 className="text-[18px] font-black mb-6">Пищевая ценность на порцию:</h4>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {[
                { l: 'энергия', v: '802 Ккал', c: 'bg-[#F2F9F0]', tc: 'text-[#74C365]' },
                { l: 'белки', v: '42 гр.', c: 'bg-[#FCF2FF]', tc: 'text-[#D18BFF]' },
                { l: 'жиры', v: '40 гр.', c: 'bg-[#F0F4FF]', tc: 'text-[#4A72FF]' },
                { l: 'углеводы', v: '70 гр.', c: 'bg-[#FFF9EB]', tc: 'text-[#FFC12F]' }
              ].map((box, i) => (
                <div key={i} className={`${box.c} p-5 rounded-[28px] text-center border border-white hover:scale-105 transition-transform cursor-default shadow-sm`}>
                  <p className={`${box.tc} text-[11px] mb-2 uppercase font-black tracking-tighter`}>{box.l}</p>
                  <p className="font-black text-[14px] md:text-[16px] whitespace-nowrap">{box.v}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <div className="flex items-center gap-4 md:gap-10 py-6 border-y border-gray-100 mb-10 text-[12px] md:text-[14px] font-bold text-gray-400">
            <div className="flex items-center gap-2">
              <span className="text-[#FF4C4C] text-2xl">♥</span> 222 понравилось
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[#4A72FF] text-2xl">◎</span> 222 просмотров
            </div>
            <div className="ml-auto flex items-center gap-1 bg-orange-50 px-4 py-1.5 rounded-full text-orange-400">
              <span className="text-lg">★</span> 4,8
            </div>
          </div>

          <motion.div variants={itemVariants}>
            <h3 className="text-[22px] font-black mb-4">Описание:</h3>
            <p className="text-gray-500 leading-[1.8] font-medium">
              Хотя "строганов" восходит к России 19 века, он путешествовал по всему миру и видел множество адаптаций. Классическое сочетание говядины и грибов в сливочном соусе остается приятным, узнаваемым и любимым во всем мире...
            </p>
          </motion.div>
        </div>
      </div>

      {/* Вынес инструкции в отдельный блок под основной контент для лучшей сетки */}
      <div className="mt-16 space-y-12">
        <Instruction/>
        <Instr1/>
        <Instr2/>
      </div>
    </motion.div>
  );
};