import logo from '../../image/Group (5).png';
import tele from '../../image/Frame 654 (1).png';
import zen from '../../image/telegram (1).png'; 

export function Footer() {
  return (
    <footer className="bg-[#E2F0D3] py-12 px-6 md:px-10 font-sans text-[#333333]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-0">
        
        <div className="md:col-span-3 flex justify-start items-start">
          <img src={logo} alt="Mealsy" className="h-10 object-contain" />
        </div>

        <div className="md:col-span-3 md:border-l border-[#B2C2AD] md:pl-8 flex flex-col">
          <h3 className="text-xl font-bold mb-6">Присоединяйтесь</h3>
          
          <div className="mb-6">
            <p className="text-sm mb-3 text-[#4A5D45]">Наши социальные сети:</p>
            <div className="flex gap-2">
              <a href="#" className="hover:opacity-80 transition-opacity">
                <img src={zen} alt="Telegram" className="w-8 h-8 rounded" />
              </a>
              <a href="#" className="hover:opacity-80 transition-opacity ">
                
                  <img src={tele} alt="Social" className="w-8 h-8" />
              </a>
            </div>
          </div>

          <div className="max-w-[280px]">
            <p className="text-sm mb-3 text-[#4A5D45]">Подпишитесь на рассылку:</p>
            <div className="space-y-2">
              <input 
                type="email" 
                placeholder="Ваш Email" 
                className="w-full px-4 py-2 rounded-md bg-[#F1F8E9] border border-[#D9E6CD] outline-none placeholder-[#B2C2AD] text-sm"
              />
              <button className="w-full bg-[#6ABF69] text-white font-bold py-2 rounded-md hover:bg-[#59a858] transition-colors text-sm">
                Подписаться
              </button>
            </div>
          </div>
        </div>

        <div className="md:col-span-3 md:border-l border-[#B2C2AD] md:pl-10 flex flex-col">
          <h3 className="text-xl font-bold mb-6">Находите</h3>
          <ul className="space-y-4 text-sm text-[#4A5D45]">
            <li><a href="#" className="hover:underline">Главная</a></li>
            <li><a href="#" className="hover:underline">Рецепты</a></li>
            <li><a href="#" className="hover:underline">Справочник</a></li>
            <li><a href="#" className="hover:underline">Мой профиль</a></li>
          </ul>
        </div>

        <div className="md:col-span-3 md:border-l border-[#B2C2AD] md:pl-8 flex flex-col">
          <h3 className="text-xl font-bold mb-6">Обратная связь</h3>
          <p className="text-sm leading-relaxed text-[#4A5D45] mb-6">
            Помогите нам стать лучше! Оставьте свои пожелания по улучшению сервиса. Мы стараемся для вас!
          </p>
          <a href="#" className="text-[#6ABF69] font-bold text-sm underline underline-offset-4 decoration-2">
            Напишите нам
          </a>
        </div>

      </div>
    </footer>
  );
}