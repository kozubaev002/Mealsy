import { ArrowRight, Eye, EyeOff, Lock, Mail, User } from 'lucide-react'
import React, { useState } from 'react'
import img from '../../assets/top-view-delicious-pumpkin-soup-table 1.png'

type AuthMode = 'login' | 'register'

export function Auth() {
  const [mode, setMode] = useState<AuthMode>('login')
  const [showPassword, setShowPassword] = useState(false)
  const [agreed, setAgreed] = useState(false)
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    name: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (mode === 'register' && !agreed) {
      alert('Пожалуйста, подтвердите согласие с правилами')
      return
    }
    console.log(`Action: ${mode}`, formData)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  return (
    <div className='min-h-screen flex items-center justify-center bg-[#F4F7F5] p-6 font-sans text-[#2D3436]'>
      <div className='max-w-[1100px] w-full bg-white rounded-[30px] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.05)] overflow-hidden flex flex-col md:flex-row min-h-[700px]'>
        
        <div className='hidden md:block md:w-1/2 relative'>
          <img src={img} alt='Pumpkin Soup' className='absolute inset-0 w-full h-full object-cover' />
          <div className='absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent' />
        </div>

        <div className='w-full md:w-1/2 p-10 md:p-16 flex flex-col justify-center bg-white'>
          
          <div className='mb-8 text-center md:text-left'>
            <h2 className='text-[30px] font-bold mb-2 leading-tight tracking-tight'>
              Добро пожаловать в клуб Mealsy!
            </h2>
            <p className='text-[#A0AEC0] text-sm font-medium'>
              {mode === 'login' ? 'Войти в профиль' : 'Создайте учётную запись'}
            </p>
          </div>

          <div className='flex bg-[#F7FAFC] p-1 rounded-2xl mb-8 w-full max-w-[320px] border border-[#EDF2F7]'>
            <button
              onClick={() => setMode('login')}
              className={`flex-1 py-2 text-sm font-bold rounded-[14px] transition-all duration-300 ${
                mode === 'login' ? 'bg-white text-[#6ABF69] shadow-sm' : 'text-[#A0AEC0]'
              }`}
            >
              Войти
            </button>
            <button
              onClick={() => setMode('register')}
              className={`flex-1 py-2 text-sm font-bold rounded-[14px] transition-all duration-300 ${
                mode === 'register' ? 'bg-white text-[#6ABF69] shadow-sm' : 'text-[#A0AEC0]'
              }`}
            >
              Регистрация
            </button>
          </div>

          <form onSubmit={handleSubmit} className='space-y-5'>
            {mode === 'register' && (
              <div className='animate-in fade-in slide-in-from-top-4 duration-500 relative group'>
                <User className='absolute left-4 top-1/2 -translate-y-1/2 text-[#CBD5E0] group-focus-within:text-[#6ABF69] transition-colors' size={18} />
                <input
                  type='text'
                  name='name'
                  required
                  placeholder='Ваше имя'
                  className='w-full bg-[#F7FAFC] border border-[#E2E8F0] rounded-[18px] py-3.5 pl-11 pr-4 outline-none focus:border-[#6ABF69] focus:bg-white transition-all placeholder:text-[#CBD5E0]'
                  onChange={handleInputChange}
                />
              </div>
            )}

            <div className='relative group'>
              <Mail className='absolute left-4 top-1/2 -translate-y-1/2 text-[#CBD5E0] group-focus-within:text-[#6ABF69] transition-colors' size={18} />
              <input
                type='email'
                name='email'
                required
                placeholder='E-mail'
                className='w-full bg-[#F7FAFC] border border-[#E2E8F0] rounded-[18px] py-3.5 pl-11 pr-4 outline-none focus:border-[#6ABF69] focus:bg-white transition-all placeholder:text-[#CBD5E0]'
                onChange={handleInputChange}
              />
            </div>

            <div className='space-y-2'>
              <div className='relative group'>
                <Lock className='absolute left-4 top-1/2 -translate-y-1/2 text-[#CBD5E0] group-focus-within:text-[#6ABF69] transition-colors' size={18} />
                <input
                  type={showPassword ? 'text' : 'password'}
                  name='password'
                  required
                  placeholder='Пароль'
                  className='w-full bg-[#F7FAFC] border border-[#E2E8F0] rounded-[18px] py-3.5 pl-11 pr-11 outline-none focus:border-[#6ABF69] focus:bg-white transition-all placeholder:text-[#CBD5E0]'
                  onChange={handleInputChange}
                />
                <button type='button' onClick={() => setShowPassword(!showPassword)} className='absolute right-4 top-1/2 -translate-y-1/2 text-[#CBD5E0] hover:text-[#6ABF69]'>
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
              {mode === 'login' && (
                <div className='flex justify-end'>
                  <button type='button' className='text-[12px] text-[#A0AEC0] font-semibold hover:text-[#6ABF69] transition-colors'>Забыли пароль?</button>
                </div>
              )}
            </div>

            {mode === 'register' && (
              <div className='flex items-start gap-3 px-1 animate-in fade-in duration-500'>
                <input 
                  type="checkbox" 
                  id="agree"
                  checked={agreed}
                  onChange={() => setAgreed(!agreed)}
                  className="mt-1 accent-[#6ABF69] w-4 h-4"
                />
                <label htmlFor="agree" className='text-[12px] text-[#A0AEC0] leading-snug cursor-pointer'>
                  Я подтверждаю свое согласие с <span className='text-[#6ABF69] font-bold'>Условиями использования</span> и <span className='text-[#6ABF69] font-bold'>Политикой конфиденциальности</span>
                </label>
              </div>
            )}

            <button
              type='submit'
              className='w-full bg-[#6ABF69] text-white py-4 rounded-[20px] font-bold text-sm shadow-[0_10px_20px_-5px_rgba(106,191,105,0.3)] hover:bg-[#5aa359] hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2'
            >
              {mode === 'login' ? 'Войти' : 'Создать аккаунт'}
              <ArrowRight size={18} />
            </button>
          </form>

          <div className='mt-10'>
            <div className='relative flex items-center justify-center mb-8'>
              <div className='absolute inset-0 flex items-center'><div className='w-full border-t border-[#EDF2F7]'></div></div>
              <span className='relative bg-white px-4 text-[12px] text-[#A0AEC0] font-bold uppercase tracking-wider'>Войти через</span>
            </div>
            
            <div className='flex justify-center gap-4'>
              {['G', 'VK', 'TG'].map((social) => (
                <button key={social} className='w-12 h-12 rounded-[14px] border border-[#E2E8F0] flex items-center justify-center font-bold text-[#2D3436] hover:bg-[#F7FAFC] hover:border-[#CBD5E0] transition-all active:scale-95'>
                  {social === 'G' && <span className="text-red-500">G</span>}
                  {social === 'VK' && <span className="text-blue-500 font-black">vk</span>}
                  {social === 'TG' && <span className="text-sky-500 text-lg">✈</span>}
                </button>
              ))}
            </div>
          </div>

          <div className='mt-10 text-center'>
            <button
              onClick={() => setMode(mode === 'login' ? 'register' : 'login')}
              className='text-sm font-bold text-[#A0AEC0] hover:text-[#6ABF69] transition-all'
            >
              {mode === 'login' ? 'Нет аккаунта? Зарегистрироваться' : 'Уже есть профиль? Войти'}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}