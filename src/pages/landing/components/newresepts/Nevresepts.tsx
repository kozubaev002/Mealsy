import { motion } from 'framer-motion'
import React, { useState } from 'react'

// Ассеты
import saves from '../../../../assets/Component 3 (1).png'
import favorites from '../../../../assets/heart.png'
import blinchiki from '../../../../assets/image 10.png'
import araxis from '../../../../assets/image 11.png'
import chocolate from '../../../../assets/image 12 (1).png'
import malinovye from '../../../../assets/image 13.png'
import limon from '../../../../assets/image 14.png'
import apple from '../../../../assets/image 8.png'
import kokos from '../../../../assets/image 9.png'
import vafli from '../../../../assets/waffle 1.png'

interface Recipe {
	id: number
	title: string
	image: string
	likes: number
	time: string
}

const recipesData: Recipe[] = [
	{
		id: 1,
		title: 'Яблочная крошка в стакане',
		image: apple,
		likes: 222,
		time: '40 мин',
	},
	{
		id: 2,
		title: 'Вафли с ягодным вареньем',
		image: vafli,
		likes: 32,
		time: '40 мин',
	},
	{
		id: 3,
		title: 'Кокосовый рисовый пудинг с манговым соусом',
		image: kokos,
		likes: 222,
		time: '40 мин',
	},
	{
		id: 4,
		title: 'Безглютеновые тыквенно-черничные блинчики',
		image: blinchiki,
		likes: 222,
		time: '40 мин',
	},
	{
		id: 5,
		title: 'Печенье с арахисовым маслом и шоколадной крошкой без муки',
		image: araxis,
		likes: 222,
		time: '40 мин',
	},
	{
		id: 6,
		title: 'Соленое шоколадной печенье с карамелью',
		image: chocolate,
		likes: 222,
		time: '40 мин',
	},
	{
		id: 7,
		title: 'Малиновые кексы с расплавленным шоколадом',
		image: malinovye,
		likes: 222,
		time: '40 мин',
	},
	{
		id: 8,
		title: 'Лимонный пирог с черникой',
		image: limon,
		likes: 222,
		time: '40 мин',
	},
]

const containerVariants = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: { staggerChildren: 0.1 },
	},
}

const itemVariants = {
	hidden: { opacity: 0, y: 30 },
	visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

const RecipeCard: React.FC<{ recipe: Recipe }> = ({ recipe }) => {
	const [isLiked, setIsLiked] = useState(false)
	const [isSaved, setIsSaved] = useState(false)

	return (
		<motion.div variants={itemVariants} className='flex flex-col group'>
			<div className='relative aspect-[3/4] rounded-3xl overflow-hidden mb-4 shadow-lg bg-gray-100 cursor-pointer'>
				<motion.img
					whileHover={{ scale: 1.1 }}
					transition={{ duration: 0.6, ease: 'easeOut' }}
					src={recipe.image}
					alt={recipe.title}
					className='w-full h-full object-cover'
				/>

				{/* Кнопка сохранения */}
				<motion.button
					whileHover={{ scale: 1.1 }}
					whileTap={{ scale: 0.9 }}
					onClick={e => {
						e.stopPropagation()
						setIsSaved(!isSaved)
					}}
					className={`absolute top-4 right-4 p-2.5 rounded-full transition-all duration-300 z-10 ${
						isSaved
							? 'bg-yellow-400 shadow-[0_0_20px_rgba(250,204,21,0.8)] scale-110'
							: 'bg-white/20 backdrop-blur-md hover:bg-white/40'
					}`}
				>
					<img
						src={saves}
						alt='save'
						className={`w-5 h-5 transition-all cursor-pointer ${isSaved ? 'brightness-110' : 'invert brightness-200'}`}
					/>
				</motion.button>

				{/* Инфо-панель */}
				<div className='absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex items-end justify-between px-5 pb-5 pointer-events-none'>
					<div className='flex items-center gap-2.5 pointer-events-auto'>
						<motion.div
							onClick={e => {
								e.stopPropagation()
								setIsLiked(!isLiked)
							}}
							whileHover={{ scale: 1.1 }}
							whileTap={{ scale: 0.9 }}
							className={`p-2.5 rounded-full transition-all duration-300 cursor-pointer ${
								isLiked
									? 'bg-red-500 shadow-[0_0_20px_rgba(239,68,68,0.8)] scale-110'
									: 'bg-white/20 backdrop-blur-md hover:bg-white/40'
							}`}
						>
							<img
								src={favorites}
								alt='likes'
								className={`w-5 h-5 transition-all ${
									isLiked
										? 'brightness-200'
										: 'brightness-200 hover:brightness-0 hover:invert-[0.2] hover:sepia-[1] hover:saturate-[5000%] hover:hue-rotate-[350deg]'
								}`}
							/>
						</motion.div>

						<span
							className={`text-[15px] font-bold select-none ${isLiked ? 'text-white' : 'text-gray-300'}`}
						>
							{isLiked ? recipe.likes + 1 : recipe.likes}
						</span>
					</div>

					<div className='text-white/90 text-xs font-bold bg-white/10 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10'>
						{recipe.time}
					</div>
				</div>
			</div>

			{/* Заголовок: Теперь цвет меняется только при наведении на сам текст */}
			<h3 className='inline-block text-[18px] font-bold leading-snug text-[#1A1A1A] hover:text-[#6FCF97] transition-colors duration-300 px-1 cursor-pointer w-fit'>
				{recipe.title}
			</h3>
		</motion.div>
	)
}

const NewRecipes: React.FC = () => {
	return (
		<section className='max-w-[1240px] mx-auto px-4 py-20 font-sans'>
			<motion.div
				initial={{ opacity: 0, x: -30 }}
				whileInView={{ opacity: 1, x: 0 }}
				viewport={{ once: true }}
				className='flex items-center gap-6 mb-14'
			>
				<h2 className='text-[40px] font-black text-[#1A1A1A] tracking-tight'>
					Новые рецепты
				</h2>
				<div className='h-[2px] flex-grow bg-gray-100 rounded-full hidden md:block' />
			</motion.div>

			<motion.div
				variants={containerVariants}
				initial='hidden'
				whileInView='visible'
				viewport={{ once: true }}
				className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16'
			>
				{recipesData.map(recipe => (
					<RecipeCard key={recipe.id} recipe={recipe} />
				))}
			</motion.div>

			<div className='mt-24 flex justify-center'>
				<motion.button
					whileHover={{
						scale: 1.05,
						boxShadow: '0px 20px 40px rgba(111, 207, 151, 0.4)',
					}}
					whileTap={{ scale: 0.95 }}
					className='group relative flex items-center gap-4 bg-[#6FCF97] text-white font-black py-6 px-20 rounded-2xl transition-all overflow-hidden'
				>
					<div className='absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:animate-[shimmer_2s_infinite]' />
					<span className='relative z-10 text-xl uppercase tracking-widest cursor-pointer'>
						Смотреть все рецепты
					</span>
					<motion.div
						animate={{ x: [0, 5, 0] }}
						transition={{ repeat: Infinity, duration: 1.5 }}
					>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							className='h-7 w-7'
							fill='none'
							viewBox='0 0 24 24'
							stroke='currentColor'
						>
							<path
								strokeLinecap='round'
								strokeLinejoin='round'
								strokeWidth={3}
								d='M17 8l4 4m0 0l-4 4m4-4H3'
							/>
						</svg>
					</motion.div>
				</motion.button>
			</div>

			<style>{`
        @keyframes shimmer { 100% { transform: translateX(100%); } }
      `}</style>
		</section>
	)
}

export default NewRecipes
