import { HelpCircle, Plus, Search, X } from 'lucide-react'
import { useState } from 'react'

// Имитация импортов
import milk from '../../image/15510 [преобразованный] 1.png'
import onion from '../../image/2202.i305.020.F.m005.c9 1.png'
import meat from '../../image/27265 [преобразованный] 1.png'
import eggs from '../../image/30848 [преобразованный] 1.png'
import fish from '../../image/31935 [преобразованный] 1.png'
import alchogol from '../../image/5648646 1 (1).png'

export function Konstructor() {
  const [selectedExtra, setSelectedExtra] = useState<number>(2)
  const [excluded, setExcluded] = useState<string[]>([])
  const [inputValue, setInputValue] = useState('')
  const [products, setProducts] = useState<string[]>(['Курица', 'Молоко', 'Куриное яйцо', 'Сыр'])
  
  // Состояние для ползунка (0 - до 20, 1 - до 30, 2 - до 60, 3 - более 1 часа)
  const [timeIndex, setTimeIndex] = useState(2)

  const excludeItems = [
    { id: 'milk', name: 'молоко', img: milk },
    { id: 'eggs', name: 'яйца', img: eggs },
    { id: 'onion', name: 'лук', img: onion },
    { id: 'meat', name: 'свинина', img: meat },
    { id: 'fish', name: 'рыба', img: fish },
    { id: 'alcohol', name: 'алкоголь', img: alchogol },
  ]

  const toggleExclude = (id: string) => {
    setExcluded(prev => prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id])
  }

  // Расчет процента заполнения для фонового прогресса ползунка
  const getProgressBackground = () => {
    const percentage = (timeIndex / 3) * 100
    return `linear-gradient(to right, #6ABF69 ${percentage}%, #EBF5E1 ${percentage}%)`
  }

  return (
    <div className='max-w-[400px] md:max-w-[950px] mx-auto my-10 bg-white rounded-[32px] p-6 md:p-10 shadow-lg border border-gray-50 font-sans'>
      <h2 className='text-[24px] md:text-[32px] font-extrabold mb-2 text-[#333]'>
        Конструктор рецептов
      </h2>

      <p className='text-gray-500 text-[13px] md:text-[15px] mb-8 md:mb-12 max-w-3xl leading-relaxed'>
        Выберите продукты, которые есть в вашем холодильнике. "Конструктор рецептов" подберёт рецепты на основе ваших ингредиентов. Максимальное количество продуктов 7.
      </p>

      <div className='grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-10'>
        
        {/* ЛЕВАЯ КОЛОНКА */}
        <div className='space-y-10'>
          <div>
            <h4 className='font-bold text-[15px] md:text-[16px] mb-4 text-[#333]'>
              Введите имеющиеся продукты:
            </h4>
            <div className='border border-[#D9E6CD] focus-within:border-[#6ABF69] rounded-xl p-3 min-h-[54px] transition-colors'>
              <div className='flex flex-wrap gap-2 mb-2'>
                {products.map(prod => (
                  <div key={prod} className='flex items-center gap-1 bg-[#6ABF69] text-white px-3 py-1.5 rounded-lg text-sm font-bold'>
                    {prod}
                    <button onClick={() => setProducts(products.filter(p => p !== prod))}><X size={14} /></button>
                  </div>
                ))}
              </div>
              <div className='relative flex items-center'>
                <Plus className='absolute left-1 text-[#6ABF69]/40' size={18} />
                <input
                  type='text'
                  value={inputValue}
                  onChange={e => setInputValue(e.target.value)}
                  placeholder='Ингредиент'
                  className='w-full pl-8 outline-none text-[14px] placeholder:text-gray-300'
                />
              </div>
            </div>
          </div>

          <div>
            <div className='flex items-center gap-2 mb-4'>
              <h4 className='font-bold text-[14px] md:text-[15px] text-[#333]'>
                Включить в рецепт дополнительные ингредиенты?
              </h4>
              <div className='bg-[#6ABF69] rounded-full p-0.5 text-white'>
                <HelpCircle size={16} className='cursor-help' />
              </div>
            </div>
            <div className='flex gap-3 md:gap-4'>
              {[1, 2, 3, 4, 5].map(num => (
                <button
                  key={num}
                  onClick={() => setSelectedExtra(num)}
                  className={`w-10 h-10 md:w-12 md:h-12 rounded-full font-bold transition-all border-2 ${
                    selectedExtra === num ? 'border-[#6ABF69] bg-white text-[#6ABF69]' : 'border-transparent bg-[#F1F9E9] text-[#333]'
                  }`}
                >
                  {num}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* ПРАВАЯ КОЛОНКА */}
        <div className='space-y-10'>
          {/* Рабочий Ползунок времени */}
          <div>
            <h4 className='font-bold text-[15px] md:text-[16px] mb-8 text-[#333]'>
              Время приготовления:
            </h4>
            <div className='relative px-2 mb-10'>
              <input
                type="range"
                min="0"
                max="3"
                step="1"
                value={timeIndex}
                onChange={(e) => setTimeIndex(parseInt(e.target.value))}
                className="w-full h-2.5 rounded-full appearance-none cursor-pointer focus:outline-none"
                style={{
                  background: getProgressBackground(),
                }}
              />
              {/* Кастомный ползунок через CSS (добавьте стили в index.css или модуль) */}
              <style>{`
                input[type='range']::-webkit-slider-thumb {
                  -webkit-appearance: none;
                  height: 20px;
                  width: 20px;
                  border-radius: 50%;
                  background: #ffffff;
                  border: 2px solid #6ABF69;
                  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
                  cursor: pointer;
                }
              `}</style>

              <div className='flex justify-between mt-4 text-[9px] md:text-[11px] text-center font-bold text-gray-400 uppercase tracking-tighter'>
                <span className={timeIndex >= 0 ? 'text-[#333]' : ''}>до 20<br/>минут</span>
                <span className={timeIndex >= 1 ? 'text-[#333]' : ''}>до 30<br/>минут</span>
                <span className={timeIndex >= 2 ? 'text-[#333]' : ''}>до 60<br/>минут</span>
                <span className={timeIndex >= 3 ? 'text-[#333]' : ''}>более<br/>1 часа</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className='font-bold text-[15px] md:text-[16px] mb-6 text-[#333]'>
              Исключить из рецепта:
            </h4>
            <div className='grid grid-cols-3 md:grid-cols-6 gap-4 md:gap-2'>
              {excludeItems.map(item => {
                const isExcluded = excluded.includes(item.id)
                return (
                  <div key={item.id} onClick={() => toggleExclude(item.id)} className='flex flex-col items-center cursor-pointer group'>
                    <div className={`w-14 h-14 md:w-16 md:h-16 mb-2 rounded-full flex items-center justify-center bg-[#F8FBF5] transition-all relative`}>
                      <img src={item.img} alt={item.name} className={`w-10 h-10 object-contain ${isExcluded ? 'opacity-40' : ''}`} />
                      {isExcluded && (
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-10 h-[2px] bg-red-500 rotate-45 absolute" />
                          <div className="w-10 h-[2px] bg-red-500 -rotate-45 absolute" />
                        </div>
                      )}
                    </div>
                    <span className='text-[9px] md:text-[10px] font-bold text-gray-400 uppercase'>{item.name}</span>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>

      <div className='flex flex-col md:flex-row gap-4 mt-12 md:justify-end'>
        <button className='w-full md:w-[180px] bg-[#6ABF69] text-white font-bold py-3 rounded-xl hover:bg-[#5da85c] transition-all'>
          Применить
        </button>
        <button
          onClick={() => {setExcluded([]); setProducts([]); setTimeIndex(2);}}
          className='w-full md:w-[180px] border border-[#6ABF69] text-[#6ABF69] font-bold py-3 rounded-xl hover:bg-green-50 transition-all'
        >
          Очистить всё
        </button>
      </div>
    </div>
  )
}