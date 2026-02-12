import { Bookmark, ChevronDown, Clock, Heart } from 'lucide-react'
import { useEffect, useMemo, useRef, useState } from 'react'

const apple =
	'https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?w=400'
const vafli = 'https://images.unsplash.com/photo-1562376552-0d160a2f238d?w=400'
const kokos =
	'https://images.unsplash.com/photo-1536304993881-ff6e9eefa2a6?w=400'
const araxis =
	'https://images.unsplash.com/photo-1590080875515-8a3a8dc5735e?w=400'
const chocolate =
	'https://images.unsplash.com/photo-1481391319762-47dff72954d9?w=400'
const malinovye =
	'https://images.unsplash.com/photo-1551024601-bec78aea704b?w=400'
const pastaImg = 'https://images.unsplash.com/photo-1473093226795-af9932fe5856?w=400'

interface Recipe {
	id: number
	title: string
	img: string
	likes: number
	isLiked?: boolean 
	isSaved?: boolean
	time: string
	minutes: number
	cuisine: string
	date: number
	type: string 
	category?: string 
	mealTime?: string 
	event?: string 
	method?: string
}

export function Filtered() {
	const [activeDropdown, setActiveDropdown] = useState<
		'cuisine' | 'date' | null
	>(null)
	const [selectedCuisine, setSelectedCuisine] = useState('Все кухни')
	const [sortType, setSortType] = useState('По дате')
	const [tempFilters, setTempFilters] = useState<string[]>([])
	const [appliedFilters, setAppliedFilters] = useState<string[]>([])

	const [recipesList, setRecipesList] = useState<Recipe[]>([
		{
			id: 1,
			title: 'Яблочная крошка в стакане',
			img: apple,
			likes: 222,
			time: '40 мин',
			minutes: 40,
			cuisine: 'Французская кухня',
			date: 1700000000,
			type: 'ПП-рецепты',
			mealTime: 'Десерт',
			method: 'Запечённое',
		},
		{
			id: 2,
			title: 'Вафли с ягодным вареньем',
			img: vafli,
			likes: 32,
			time: '40 мин',
			minutes: 40,
			cuisine: 'Британская кухня',
			date: 1710000000,
			type: 'Низкокалорийные рецепты',
			mealTime: 'Завтрак',
			category: 'Блины, оладьи, сырники',
		},
		{
			id: 3,
			title: 'Кокосовый рисовый пудинг',
			img: kokos,
			likes: 150,
			time: '40 мин',
			minutes: 40,
			cuisine: 'Азиатская кухня',
			date: 1720000000,
			type: 'Сыроедение',
			mealTime: 'Ланч',
		},
		{
			id: 4,
			title: 'Печенье с арахисовым маслом',
			img: araxis,
			likes: 410,
			time: '40 мин',
			minutes: 40,
			cuisine: 'Американская кухня',
			date: 1730000000,
			type: 'ПП-рецепты',
			mealTime: 'Перекус',
			event: 'День рождения',
		},
		{
			id: 5,
			title: 'Соленое шоколадное печенье',
			img: chocolate,
			likes: 95,
			time: '40 мин',
			minutes: 40,
			cuisine: 'Итальянская кухня',
			date: 1690000000,
			type: 'Низкокалорийные рецепты',
			mealTime: 'Перекус',
		},
		{
			id: 6,
			title: 'Малиновые кексы',
			img: malinovye,
			likes: 280,
			time: '40 мин',
			minutes: 40,
			cuisine: 'Немецкая кухня',
			date: 1680000000,
			type: 'Диабетические рецепты',
			event: '8 марта',
		},
	])

	const cuisines = [
		'Все кухни',
		'Восточноевропейская кухня',
		'Азиатская кухня',
		'Американская кухня',
		'Британская кухня',
		'Французская кухня',
		'Немецкая кухня',
		'Итальянская кухня',
		'Испанская кухня',
		'Мексиканская кухня',
		'Индийская кухня',
		'Японская кухня',
		'Турецкая кухня',
	]

	const dateSortOptions = [
		'По дате',
		'По количеству лайков',
		'По популярности',
		'По добавлению в избранное',
	]

	const filterSections = [
		{
			title: 'Тип питания',
			items: [
				'Диабетические рецепты',
				'Низкокалорийные рецепты',
				'ПП-рецепты',
				'Сыроедение',
				'Безглютеновые рецепты',
			],
		},
		{
			title: 'Категории блюд',
			items: [
				'Блины, оладьи, сырники',
				'Соусы и заправки',
				'Каши',
				'Бутерброды',
				'Пельмени и вареники',
			],
			showMore: true,
		},
		{
			title: 'Время приема',
			items: ['Бранч', 'Завтрак', 'Ланч', 'Обед', 'Перекус'],
			showMore: true,
		},
		{
			title: 'Время приготовления',
			items: ['До 15 минут', 'До 30 минут', 'До 60 минут', 'Более 1 часа'],
		},
		{
			title: 'Событие',
			items: ['23 февраля', '8 марта', 'Барбекю', 'Вечеринка', 'День рождения'],
			showMore: true,
		},
		{
			title: 'Способ приготовления',
			items: [
				'Гриль, мангал',
				'Взбитое',
				'Замороженное, охлаждённое',
				'Варёное, тушёное',
				'Запечённое',
			],
			showMore: true,
		},
	]

	const filteredRecipes = useMemo(() => {
		let result = [...recipesList]
		if (selectedCuisine !== 'Все кухни')
			result = result.filter(r => r.cuisine === selectedCuisine)

		if (appliedFilters.length > 0) {
			result = result.filter(r => {
				const matchesType = appliedFilters.includes(r.type)
				const matchesCategory =
					r.category && appliedFilters.includes(r.category)
				const matchesMealTime =
					r.mealTime && appliedFilters.includes(r.mealTime)
				const matchesEvent = r.event && appliedFilters.includes(r.event)
				const matchesMethod = r.method && appliedFilters.includes(r.method)

				const matchesTime =
					(appliedFilters.includes('До 15 минут') && r.minutes <= 15) ||
					(appliedFilters.includes('До 30 минут') && r.minutes <= 30) ||
					(appliedFilters.includes('До 60 минут') && r.minutes <= 60) ||
					(appliedFilters.includes('Более 1 часа') && r.minutes > 60)

				return (
					matchesType ||
					matchesCategory ||
					matchesMealTime ||
					matchesEvent ||
					matchesMethod ||
					matchesTime
				)
			})
		}

		if (sortType === 'По количеству лайков' || sortType === 'По популярности')
			result.sort((a, b) => b.likes - a.likes)
		else if (sortType === 'По дате') result.sort((a, b) => b.date - a.date)

		return result
	}, [selectedCuisine, sortType, appliedFilters, recipesList])

	const dropdownRef = useRef<HTMLDivElement>(null)
	useEffect(() => {
		const handleClick = (e: MouseEvent) => {
			if (
				dropdownRef.current &&
				!dropdownRef.current.contains(e.target as Node)
			)
				setActiveDropdown(null)
		}
		document.addEventListener('mousedown', handleClick)
		return () => document.removeEventListener('mousedown', handleClick)
	}, [])

	const handleLike = (id: number) => {
		setRecipesList(prev =>
			prev.map(r =>
				r.id === id
					? {
							...r,
							isLiked: !r.isLiked,
							likes: r.isLiked ? r.likes - 1 : r.likes + 1,
						}
					: r,
			),
		)
	}

	const handleSave = (id: number) => {
		setRecipesList(prev =>
			prev.map(r => (r.id === id ? { ...r, isSaved: !r.isSaved } : r)),
		)
	}

	return (
		<div className='max-w-7xl mx-auto px-4 py-6 font-sans text-[#333]'>
			<style>{`
        @keyframes heart-beat { 0% { transform: scale(1); } 50% { transform: scale(1.3); } 100% { transform: scale(1); } }
        .animate-heart-pop { animation: heart-beat 0.3s ease-out; }
        .scrollbar-hide::-webkit-scrollbar { display: none; }
      `}</style>

			<div
				className='flex justify-between items-center mb-8 text-sm relative'
				ref={dropdownRef}
			>
				<span className='text-gray-400 font-medium uppercase text-[10px] tracking-[1.5px]'>
					Дополнительные фильтры
				</span>
				<div className='flex gap-8'>
					<div className='relative'>
						<div
							className='flex items-center gap-1 cursor-pointer'
							onClick={() =>
								setActiveDropdown(
									activeDropdown === 'cuisine' ? null : 'cuisine',
								)
							}
						>
							Сортировать по:{' '}
							<span className='text-[#6ABF69] font-bold underline decoration-dotted'>
								{selectedCuisine}
							</span>
							<ChevronDown
								size={14}
								className={`text-[#6ABF69] transition-transform ${activeDropdown === 'cuisine' ? 'rotate-180' : ''}`}
							/>
						</div>
						{activeDropdown === 'cuisine' && (
							<div className='absolute right-0 mt-3 w-64 bg-white shadow-2xl rounded-xl z-50 border border-gray-50 overflow-hidden'>
								<div className='max-h-80 overflow-y-auto scrollbar-hide'>
									{cuisines.map(c => (
										<div
											key={c}
											className={`px-5 py-3 cursor-pointer hover:bg-red-50/50 hover:text-red-500 ${selectedCuisine === c ? 'bg-[#D9E6CD] font-bold' : ''}`}
											onClick={() => {
												setSelectedCuisine(c)
												setActiveDropdown(null)
											}}
										>
											{c}
										</div>
									))}
								</div>
							</div>
						)}
					</div>

					<div className='relative'>
						<div
							className='flex items-center gap-1 cursor-pointer'
							onClick={() =>
								setActiveDropdown(activeDropdown === 'date' ? null : 'date')
							}
						>
							Сортировать по:{' '}
							<span className='text-[#6ABF69] font-bold underline decoration-dotted'>
								{sortType}
							</span>
							<ChevronDown
								size={14}
								className={`text-[#6ABF69] transition-transform ${activeDropdown === 'date' ? 'rotate-180' : ''}`}
							/>
						</div>
						{activeDropdown === 'date' && (
							<div className='absolute right-0 mt-3 w-60 bg-white shadow-2xl rounded-xl z-50 border border-gray-100 overflow-hidden'>
								{dateSortOptions.map(opt => (
									<div
										key={opt}
										className={`px-5 py-3 cursor-pointer hover:bg-red-50/50 hover:text-red-500 ${sortType === opt ? 'bg-[#D9E6CD] font-bold' : ''}`}
										onClick={() => {
											setSortType(opt)
											setActiveDropdown(null)
										}}
									>
										{opt}
									</div>
								))}
							</div>
						)}
					</div>
				</div>
			</div>

			<div className='flex flex-col md:flex-row gap-10'>
				<aside className='w-full md:w-64 flex-shrink-0'>
					<div className='space-y-6 sticky top-6 bg-white p-2'>
						{filterSections.map((section, idx) => (
							<div key={idx} className='border-b border-gray-100 pb-6'>
								<h3 className='font-extrabold mb-5 flex justify-between items-center uppercase text-[11px] tracking-[1.5px] text-[#222]'>
									{section.title}
									<ChevronDown size={14} className='text-gray-400' />
								</h3>
								<div className='space-y-4'>
									{section.items.map(item => (
										<label
											key={item}
											className='flex items-center gap-3 cursor-pointer group'
											onClick={() =>
												setTempFilters(prev =>
													prev.includes(item)
														? prev.filter(i => i !== item)
														: [...prev, item],
												)
											}
										>
											<div
												className={`w-5 h-5 border-2 rounded-full flex items-center justify-center transition-all ${tempFilters.includes(item) ? 'border-[#6ABF69] bg-[#6ABF69]' : 'border-[#D9E6CD]'}`}
											>
												{tempFilters.includes(item) && (
													<div className='w-2 h-2 bg-white rounded-full' />
												)}
											</div>
											<span
												className={`text-sm transition-colors ${tempFilters.includes(item) ? 'text-black font-medium' : 'text-gray-500 group-hover:text-black'}`}
											>
												{item}
											</span>
										</label>
									))}
								</div>
								{section.showMore && (
									<button className='mt-4 text-[#6ABF69] text-[13px] font-medium hover:opacity-70 transition-opacity'>
										Смотреть все
									</button>
								)}
							</div>
						))}

						<button
							onClick={() => setAppliedFilters(tempFilters)}
							className='w-full bg-[#D9E6CD] text-[#4A5D45] font-bold py-4 rounded-2xl hover:bg-[#c8d9b8] active:scale-[0.98] transition-all shadow-sm'
						>
							Применить
						</button>
            <div className='bg-white rounded-[32px] overflow-hidden shadow-sm border border-gray-50 p-6 flex flex-col items-center text-center'>
              <img src={pastaImg} alt="Newsletter" className='w-full h-40 object-contain mb-4' />
              <h4 className='font-bold text-[16px] leading-tight mb-4'>
                Каждую неделю подборка новых рецептов у вас на почте!
              </h4>
              <input 
                type="email" 
                placeholder="Ваш Email" 
                className='w-full border border-gray-200 rounded-xl px-4 py-3 text-sm mb-3 focus:outline-none focus:border-[#6ABF69]'
              />
              <label className='flex items-start gap-2 cursor-pointer mb-5 text-left'>
                <input type="checkbox" className='mt-1 accent-[#6ABF69]' />
                <span className='text-[10px] text-gray-400 leading-tight'>
                  Я подтверждаю согласие на <span className='underline text-[#6ABF69]'>обработку персональных данных</span>
                </span>
              </label>
              <button className='w-full bg-[#6ABF69] text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 hover:bg-[#5da85c] transition-colors'>
                Подписаться
              </button>
            </div>
					</div>
				</aside>

				<main className='flex-grow'>
					<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12'>
						{filteredRecipes.map(recipe => (
							<div
								key={recipe.id}
								className='flex flex-col group cursor-pointer'
							>
								<div className='relative aspect-[4/5] rounded-[32px] overflow-hidden mb-5 shadow-sm hover:shadow-xl transition-all duration-500'>
									<img
										src={recipe.img}
										alt={recipe.title}
										className='w-full h-full object-cover transition-transform duration-700 group-hover:scale-110'
									/>

									<div className='absolute top-5 right-5'>
										<button
											onClick={e => {
												e.stopPropagation()
												handleSave(recipe.id)
											}}
											className={`p-2.5 backdrop-blur-lg rounded-xl transition-all border border-white/10 ${recipe.isSaved ? 'bg-yellow-400 text-white shadow-[0_0_20px_rgba(250,204,21,0.6)] scale-110' : 'bg-white/20 text-white hover:bg-white/40'}`}
										>
											<Bookmark
												size={20}
												className={recipe.isSaved ? 'fill-current' : ''}
											/>
										</button>
									</div>

									<div className='absolute bottom-5 left-5 right-5 flex justify-between items-center'>
										<div
											onClick={e => {
												e.stopPropagation()
												handleLike(recipe.id)
											}}
											className={`flex items-center gap-1.5 px-4 py-2 backdrop-blur-md rounded-full text-[12px] font-medium border border-white/10 transition-all ${recipe.isLiked ? 'bg-red-500 text-white shadow-[0_0_20px_rgba(239,68,68,0.6)]' : 'bg-black/40 text-white hover:bg-black/60'}`}
										>
											<Heart
												size={14}
												className={`${recipe.isLiked ? 'fill-current animate-heart-pop' : 'fill-white'}`}
											/>
											{recipe.likes}
										</div>
										<div className='flex items-center gap-1.5 px-4 py-2 bg-black/40 backdrop-blur-md rounded-full text-white text-[12px] font-medium border border-white/10'>
											<Clock size={14} /> {recipe.time}
										</div>
									</div>
								</div>

								<h4 className='font-bold text-[15px] leading-snug text-[#333] group-hover:text-[#6ABF69] transition-colors line-clamp-2 px-1'>
									{recipe.title}
								</h4>
								<p className='text-[10px] text-gray-400 mt-2 uppercase tracking-[1.5px] font-bold px-1'>
									{recipe.cuisine}
								</p>
							</div>
						))}
					</div>
					{filteredRecipes.length === 0 && (
						<div className='text-center py-20 text-gray-400'>
							Рецептов не найдено. Попробуйте изменить фильтры.
						</div>
					)}
				</main>
			</div>
		</div>
	)
}
