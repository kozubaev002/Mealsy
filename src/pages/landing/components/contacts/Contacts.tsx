import { motion } from 'framer-motion'
import img from '../../image/pngegg 1 (2).png'

export function Contacts() {
  return (
    <section className='max-w-[1240px] mx-auto px-4 py-10 md:py-20'>
      <div className='relative w-full bg-white rounded-[30px] md:rounded-[40px] shadow-[0_20px_60px_rgba(0,0,0,0.05)] overflow-hidden flex flex-col md:flex-row items-stretch'>
        
        <div className='flex-1 p-8 sm:p-12 md:p-16 lg:p-20 z-10 flex flex-col justify-center items-center md:items-start text-center md:text-left'>
          <h2 className='text-[26px] sm:text-[32px] md:text-[42px] font-black text-[#1A1A1A] leading-[1.1] mb-8 md:mb-10 max-w-[500px]'>
            Каждую неделю подборка новых рецептов у вас на почте!
          </h2>

          <form
            className='flex flex-col gap-4 w-full max-w-[400px]'
            onSubmit={e => e.preventDefault()}
          >
            <div className='space-y-4'>
              <input
                type='text'
                placeholder='Ваше имя'
                className='w-full px-6 py-4 rounded-2xl border border-gray-100 bg-gray-50/50 outline-none focus:border-[#6FCF97] focus:bg-white transition-all text-gray-800 placeholder:text-gray-400'
              />
              <input
                type='email'
                placeholder='Ваш Email'
                className='w-full px-6 py-4 rounded-2xl border border-gray-100 bg-gray-50/50 outline-none focus:border-[#6FCF97] focus:bg-white transition-all text-gray-800 placeholder:text-gray-400'
              />
            </div>

            <label className='flex items-center text-left gap-3 cursor-pointer group mt-2'>
              <div className='relative flex items-center justify-center shrink-0'>
                <input type='checkbox' className='peer hidden' defaultChecked />
                <div className='w-5 h-5 border-2 border-gray-200 rounded-md peer-checked:bg-[#6FCF97] peer-checked:border-[#6FCF97] transition-all' />
                <svg
                  className='absolute w-3.5 h-3.5 text-white opacity-0 peer-checked:opacity-100 transition-opacity'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                  strokeWidth='4'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M5 13l4 4L19 7'
                  />
                </svg>
              </div>
              <p className='text-[12px] md:text-[13px] text-gray-500 leading-snug'>
                Я подтверждаю согласие на{' '}
                <span className='text-[#6FCF97] font-medium underline hover:no-underline transition-all'>
                  обработку персональных данных
                </span>
              </p>
            </label>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className='mt-6 bg-[#6FCF97] text-white font-extrabold py-5 px-10 rounded-2xl transition-all w-full md:w-fit text-[16px] uppercase tracking-wider cursor-pointer shadow-lg shadow-[#6FCF97]/20'
            >
              Подписаться
            </motion.button>
          </form>
        </div>

        <div className='relative w-full md:w-[50%] bg-[#F9F9F9] flex items-center justify-center overflow-hidden h-[300px] sm:h-[400px] md:h-auto'>
          <motion.img
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            src={img}
            alt='Pasta'
            className='w-full h-full object-cover md:object-right md:scale-110'
          />
          <div className='hidden md:block absolute inset-y-0 left-0 w-40 bg-gradient-to-r from-white to-transparent' />
        </div>
      </div>
    </section>
  )
}