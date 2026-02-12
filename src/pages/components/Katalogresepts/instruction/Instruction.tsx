import React, { useState } from 'react';
// Импорты ваших изображений
import imgMeat from '../../image/image 38.png';
import imgMushrooms from '../../image/image 40 (2).png';
import imgOnion from '../../image/image 40.png';
import imgGreens from '../../image/image 40 (1).png';
import imgFrying from '../../image/image 33.png';

// Интерфейсы
interface Ingredient {
  id: number;
  label: string;
  count?: string;
  checked: boolean;
}

interface IngredientProps {
  ingredient: Ingredient;
  onToggle: (id: number) => void;
}

// Компонент одного ингредиента
const IngredientItem: React.FC<IngredientProps> = ({ ingredient, onToggle }) => (
  <li 
    className="flex items-center justify-between py-2 border-b border-gray-100 last:border-0 cursor-pointer select-none"
    onClick={() => onToggle(ingredient.id)}
  >
    <div className="flex items-center gap-3">
      <div className={`w-5 h-5 rounded-full border flex items-center justify-center transition-colors ${ingredient.checked ? 'bg-[#68B964] border-[#68B964]' : 'border-gray-400'}`}>
        {ingredient.checked && <span className="text-white text-[10px]">✓</span>}
      </div>
      <span className={`text-sm transition-all ${ingredient.checked ? 'text-gray-300 line-through' : 'text-gray-700 font-medium'}`}>
        {ingredient.label}
      </span>
    </div>
    {ingredient.count && (
      <span className={`text-sm transition-colors ${ingredient.checked ? 'text-gray-300' : 'text-gray-500'}`}>
        {ingredient.count}
      </span>
    )}
  </li>
);

export function Instruction() {
  // Состояние для списка ингредиентов
  const [ingredients, setIngredients] = useState<Ingredient[]>([
    { id: 1, label: "Яйца", count: "2 шт.", checked: true },
    { id: 2, label: "Сахар", count: "2 ч.л.", checked: false },
    { id: 3, label: "Молоко", count: "400 мл.", checked: false },
    { id: 4, label: "Мука", count: "350 гр.", checked: false },
    { id: 5, label: "Пищевая сода", count: "1/2 ч.л.", checked: false },
    { id: 6, label: "Уксус", count: "1/4 ч.л.", checked: true },
    { id: 7, label: "Сметана (для подачи)", checked: false },
    { id: 8, label: "Красная смородина (для подачи)", checked: false },
    { id: 9, label: "Сахарная пудра (для подачи)", checked: false },
  ]);

  const tags = ['десерт', 'для детей', 'вегетарианское', 'завтрак', 'выпечка', 'бранч', 'молочные продукты', 'ЗОЖ', 'безалкогольное', 'сладкая', 'русская кухня'];

  // Переключение чекбокса
  const toggleIngredient = (id: number) => {
    setIngredients(prev => prev.map(item => 
      item.id === id ? { ...item, checked: !item.checked } : item
    ));
  };

  // Добавление отмеченных в список покупок
  const addToShoppingList = () => {
    const selected = ingredients.filter(i => i.checked).map(i => i.label);
    if (selected.length === 0) return alert("Сначала выберите ингредиенты!");
    alert(`Добавлено в список: \n${selected.join('\n')}`);
  };

  // Добавить всё
  const addAllToShoppingList = () => {
    const all = ingredients.map(i => i.label);
    alert(`Все ингредиенты добавлены: \n${all.join('\n')}`);
  };

  return (
    <div className="max-w-5xl mx-auto p-8 bg-white text-[#333] font-sans">
      <div className="flex flex-col md:flex-row gap-12">
        
        {/* ЛЕВАЯ КОЛОНКА */}
        <div className="w-full md:w-80 flex-shrink-0">
          <ul className="space-y-1 mb-6">
            {ingredients.map(item => (
              <IngredientItem key={item.id} ingredient={item} onToggle={toggleIngredient} />
            ))}
          </ul>

          <div className="flex flex-col gap-2 mb-10">
            <button 
              onClick={addToShoppingList}
              className="bg-[#68B964] hover:bg-green-600 text-white px-4 py-2.5 rounded-lg text-xs font-bold transition-all active:scale-95"
            >
              Добавить в шоппинг-лист
            </button>
            <button 
              onClick={addAllToShoppingList}
              className="border border-[#68B964] text-[#68B964] px-4 py-2.5 rounded-lg text-xs font-bold hover:bg-green-50 transition-all active:scale-95"
            >
              Добавить все
            </button>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Теги:</h3>
            <div className="flex flex-wrap gap-2">
              {tags.map(tag => (
                <span key={tag} className="bg-[#E8EEFF] text-[#5B7CB2] px-3 py-1.5 rounded-full text-xs font-medium cursor-pointer hover:bg-[#D9E4FF] transition-colors">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* ПРАВАЯ КОЛОНКА */}
        <div className="flex-1">
          <section className="mb-8">
            <h3 className="font-extrabold text-lg mb-2">Посуда:</h3>
            <p className="text-gray-500 leading-relaxed text-[15px]">
              Нож, разделочная доска, кастрюля (большая, с толстым дном), тарелка, щипцы, ложка
            </p>
          </section>

          {/* ШАГ 1 */}
          <div className="space-y-16">
            <section>
              <h2 className="text-2xl font-black mb-6">Шаг 1/5</h2>
              <div className="grid grid-cols-2 gap-3 mb-6">
                {[imgMeat, imgMushrooms, imgOnion, imgGreens].map((img, idx) => (
                   <img key={idx} src={img} alt="step" className="rounded-xl w-full aspect-[4/3] object-cover bg-gray-100 shadow-sm" />
                ))}
              </div>
              
              <div className="grid grid-cols-2 gap-x-4 gap-y-1 mb-6 text-sm">
                <p><strong>450 гр.</strong> говяжьей вырезки</p>
                <p><strong>1</strong> зубчик чеснока</p>
                <p><strong>350 гр.</strong> шампиньонов</p>
                <p><strong>15 гр.</strong> зеленого лука (для подачи)</p>
                <p><strong>1</strong> луковица</p>
              </div>

              <div className="flex items-center gap-2 mb-4 text-[#333]">
                 <span className="text-xl">🔪</span>
                 <span className="font-bold border-b-2 border-gray-100 pb-0.5 uppercase text-[12px] tracking-wider">Нож - разделочная доска</span>
              </div>
              
              <p className="text-[#444] leading-relaxed text-[15px]">
                Нарежьте стейк тонкими полосками, около 2 см. Нарежьте грибы ломтиками. Очистите, мелко нарежьте луковицу и чеснок. Зеленый лук также нарежьте мелко и отложите.
              </p>
            </section>

            {/* ШАГ 2 */}
            <section className="pt-8 border-t border-gray-100">
              <h2 className="text-2xl font-black mb-6">Шаг 2/5</h2>
              <div className="flex flex-col md:flex-row gap-6 mb-6">
                <img src={imgFrying} alt="Жарка" className="rounded-xl w-full md:w-2/3 aspect-video object-cover bg-gray-100 shadow-sm" />
                <div className="text-sm">
                  <p><strong>2 ст. л.</strong> растительного масла</p>
                </div>
              </div>
              <div className="flex items-center gap-2 mb-4 text-[#333]">
                 <span className="text-xl">🥘</span>
                 <span className="font-bold border-b-2 border-gray-100 pb-0.5 uppercase text-[12px] tracking-wider">Кастрюля (большая, с толстым дном) - щипцы - тарелка</span>
              </div>
              <p className="text-[#444] leading-relaxed text-[15px]">
                Разогрейте растительное масло в большой кастрюле с толстым дном на среднем огне. Как только масло сильно нагреется, добавьте тонко нарезанную говядину, при необходимости порциями, и обжаривайте до румяной корочки, постоянно помешивая. Выньте мясо из сковороды, переложите на тарелку и накройте крышкой, чтобы сохранить тепло.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}