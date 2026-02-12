import { ChevronDown, ChevronRight, Menu, Search, Send, X, CircleUser } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom' // Для переходов без перезагрузки
import logo from '../../image/Group (5).png'

interface CategoryItemProps {
  title: string
  isOpen?: boolean
  onClick?: () => void
  children?: React.ReactNode
}

export const Header: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const [menuStep, setMenuStep] = useState<'main' | 'filters'>('main')
  const [openCategory, setOpenCategory] = useState<string | null>('meals')

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : 'unset'
    if (!isMenuOpen) setMenuStep('main')
  }, [isMenuOpen])

  useEffect(() => {
    const controlNavbar = () => {
      if (isMenuOpen) return
      const currentScrollY = window.scrollY
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false)
      } else {
        setIsVisible(true)
      }
      setLastScrollY(currentScrollY)
    }
    window.addEventListener('scroll', controlNavbar)
    return () => window.removeEventListener('scroll', controlNavbar)
  }, [lastScrollY, isMenuOpen])

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full bg-white border-b border-[#D9E6CD] z-[100] transition-transform duration-300 ${
          isVisible ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        <div className='max-w-7xl mx-auto px-4 h-[70px] flex items-center justify-between'>
          {/* ЛЕВАЯ ЧАСТЬ: Логотип и Десктопное меню */}
          <div className='flex items-center gap-10'>
            <Link to='/'>
              <img src={logo} alt='mealsy' className='h-7 w-auto' />
            </Link>

            <nav className='hidden md:flex items-center gap-8 text-[16px] font-medium text-[#333]'>
              <Link to='/recipes' className='hover:text-[#6ABF69] transition-colors'>Рецепты</Link>
              <Link to='/handbook' className='hover:text-[#6ABF69] transition-colors'>Справочник</Link>
            </nav>
          </div>

          {/* ЦЕНТРАЛЬНАЯ ЧАСТЬ: Поиск (десктоп) */}
          <div className='hidden md:block flex-1 max-w-md mx-8'>
            <div className='relative'>
              <Search
                className='absolute left-3 top-1/2 -translate-y-1/2 text-[#6ABF69]'
                size={20}
              />
              <input
                type='text'
                placeholder='Поиск рецептов'
                className='w-full h-[40px] pl-10 pr-4 border border-[#D9E6CD] rounded-lg outline-none focus:border-[#6ABF69] transition-all text-[14px]'
              />
            </div>
          </div>

          {/* ПРАВАЯ ЧАСТЬ: Профиль и Бургер */}
          <div className='flex items-center gap-4'>
            {/* Иконка профиля для десктопа */}
            <Link 
              to='/profile' 
              className='hidden md:flex items-center justify-center w-10 h-10 rounded-full border border-[#D9E6CD] text-[#6ABF69] hover:bg-[#6ABF69] hover:text-white transition-all duration-200'
              title="Личный кабинет"
            >
              <CircleUser size={24} strokeWidth={1.8} />
            </Link>

            {/* Бургер-меню (мобильное) */}
            <button
              onClick={() => setIsMenuOpen(true)}
              className='md:hidden p-1 text-[#6ABF69]'
            >
              <Menu size={32} strokeWidth={1.5} />
            </button>
          </div>
        </div>
      </header>

      {/* Мобильное Overlay Menu */}
      <div
        className={`fixed inset-0 bg-white z-[110] transition-transform duration-300 ease-in-out ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        } overflow-y-auto md:hidden`}
      >
        <div className='p-5 max-w-md mx-auto'>
          <div className='flex justify-end mb-2'>
            <button onClick={() => setIsMenuOpen(false)}>
              <X size={28} className='text-gray-400' />
            </button>
          </div>

          <div className='relative mb-8'>
            <Search
              className='absolute left-3 top-1/2 -translate-y-1/2 text-[#6ABF69]/60'
              size={18}
            />
            <input
              type='text'
              placeholder='Поиск рецептов'
              className='w-full h-[44px] pl-10 pr-4 border border-[#D9E6CD] rounded-lg outline-none text-[15px]'
            />
          </div>

          {menuStep === 'main' ? (
            <div className='space-y-6 animate-in fade-in slide-in-from-right-4 duration-300'>
              <button
                onClick={() => setMenuStep('filters')}
                className='flex items-center justify-between w-full text-[18px] text-[#333] font-medium'
              >
                <span>Рецепты</span>
                <ChevronRight size={22} className='text-[#6ABF69]' />
              </button>
              
              <Link to='/handbook' className='block text-[18px] text-[#333] font-medium' onClick={() => setIsMenuOpen(false)}>
                Справочник
              </Link>

              {/* Профиль в мобильном меню */}
              <Link 
                to='/profile' 
                className='flex items-center justify-between w-full text-[18px] text-[#333] font-medium'
                onClick={() => setIsMenuOpen(false)}
              >
                <span>Профиль</span>
                <CircleUser size={22} className='text-[#6ABF69]' />
              </Link>

              <div className='pt-4'>
                <p className='text-[14px] text-gray-400 mb-4'>Наши социальные сети:</p>
                <div className='flex gap-3'>
                  <div className='w-10 h-10 bg-[#6ABF69] rounded-lg flex items-center justify-center text-white cursor-pointer'>
                    <Send size={20} fill='white' />
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className='animate-in fade-in slide-in-from-right-4 duration-300'>
              <button
                onClick={() => setMenuStep('main')}
                className='mb-6 flex items-center gap-2 text-[#6ABF69] font-bold'
              >
                <ChevronRight className='rotate-180' size={20} /> Назад
              </button>
              <h2 className='text-[20px] font-bold mb-6 text-[#333]'>Рецепты</h2>
              <div className='space-y-5'>
                <CategoryItem
                  title='По времени приема'
                  isOpen={openCategory === 'meals'}
                  onClick={() => setOpenCategory(openCategory === 'meals' ? null : 'meals')}
                >
                  <ul className='pl-4 pt-3 space-y-3 text-[16px] text-[#555]'>
                    <li>Завтрак</li>
                    <li>Обед</li>
                    <li>Ужин</li>
                    <li>Закуски</li>
                  </ul>
                </CategoryItem>
                <CategoryItem title='По диете' />
                <CategoryItem title='Кухни мира' />
                <CategoryItem title='По типу блюда' />
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  )
}

const CategoryItem: React.FC<CategoryItemProps> = ({ title, isOpen, onClick, children }) => {
  return (
    <div className='w-full border-b border-gray-50 pb-2'>
      <button onClick={onClick} className='flex items-center justify-between w-full text-left'>
        <span className={`text-[16px] ${isOpen ? 'font-bold' : 'text-[#333]'}`}>{title}</span>
        <ChevronDown size={18} className={`text-[#6ABF69] transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      {isOpen && children}
    </div>
  )
}