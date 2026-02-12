import React, { useEffect, useState } from 'react'
import img7 from '../img/5946673 1.png'
import img5 from '../img/image 14 (1).png'
import img6 from '../img/image 14 (2).png'
import img3 from '../img/image 8 (1).png'
import img4 from '../img/image 8 (2).png'
import img from '../img/image 9 (1).png'
import img2 from '../img/image 9 (2).png'
import baground from '../img/top-view-delicious-ripe-produces-assortment 1.png'

type ViewMode = 'main' | 'book-detail' | 'shopping-detail'
type TabType = 'books' | 'shopping' | 'likes'

export const Profile: React.FC = () => {
	const [activeTab, setActiveTab] = useState<TabType>('books')
	const [viewMode, setViewMode] = useState<ViewMode>('main')
	const [isModalOpen, setIsModalOpen] = useState(false)
	const [activeMenuId, setActiveMenuId] = useState<string | null>(null)

	// Закрытие меню при клике в любое другое место
	useEffect(() => {
		const closeMenu = () => setActiveMenuId(null)
		window.addEventListener('click', closeMenu)
		return () => window.removeEventListener('click', closeMenu)
	}, [])

	const [ingredients, setIngredients] = useState([
		{ id: 1, label: 'Шампиньоны', value: '350 гр.', checked: false },
		{ id: 2, label: 'Макароны', value: '300 гр.', checked: false },
		{ id: 3, label: 'Луковица', value: '1 шт.', checked: false },
		{ id: 4, label: 'Говяжья вырезка', value: '450 гр.', checked: true },
	])

	const toggleIngredient = (id: number) => {
		setIngredients(prev =>
			prev.map(ing =>
				ing.id === id ? { ...ing, checked: !ing.checked } : ing,
			),
		)
	}

	return (
		<div className='min-h-screen bg-white font-sans text-[#2D3436] pb-20'>
			{/* 1. Шапка */}
			<div className='relative h-48 w-full overflow-hidden'>
				<img
					src={baground}
					alt='Cover'
					className='h-full w-full object-cover'
				/>
				<button className='absolute top-4 right-8 flex items-center gap-2 rounded-lg bg-white/90 px-4 py-1.5 text-sm font-semibold shadow-sm hover:bg-white transition-all'>
					<span>⚙️</span> Настройки
				</button>
			</div>

			<div className='mx-auto max-w-5xl px-4'>
				{/* Инфо профиля */}
				<div className='relative -top-10 flex items-end gap-5'>
					<div className='relative'>
						<div className='flex h-32 w-32 items-center justify-center rounded-2xl border-[4px] border-white bg-[#70b34d] text-5xl font-bold text-white shadow-md'>
							В
						</div>
						<div className='absolute -top-1 -right-1 flex h-7 w-7 items-center justify-center rounded-full border-2 border-white bg-[#70b34d] text-white text-xs cursor-pointer shadow-sm shadow-black/10'>
							✏️
						</div>
					</div>
					<div className='pb-2'>
						<h1 className='text-2xl font-bold'>Владислава</h1>
						<p className='text-gray-500 text-sm font-medium'>Член сообщества</p>
					</div>
				</div>

				{/* Табы */}
				<div className='mt-4 flex justify-center gap-12 border-b border-gray-100'>
					{[
						{ id: 'books', label: 'Кулинарные книги', icon: '🔖' },
						{ id: 'shopping', label: 'Список покупок', icon: '🧺' },
						{ id: 'likes', label: 'Нравится', icon: '❤️' },
					].map(tab => (
						<button
							key={tab.id}
							onClick={() => {
								setActiveTab(tab.id as TabType)
								setViewMode('main')
							}}
							className={`flex items-center gap-2 pb-4 text-sm font-bold transition-all border-b-2 ${activeTab === tab.id ? 'border-[#70b34d] text-black' : 'border-transparent text-gray-400'}`}
						>
							<span>{tab.icon}</span> {tab.label}
						</button>
					))}
				</div>

				<div className='py-8'>
					{/* ГЛАВНАЯ: СПИСОК КНИГ */}
					{activeTab === 'books' && viewMode === 'main' && (
						<div className='grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3'>
							<BookCard
								id='smoothie'
								title='Смузи'
								mainImg={img}
								subImg1={img2}
								subImg2={img3}
								activeMenuId={activeMenuId}
								setActiveMenuId={setActiveMenuId}
								onContentClick={() => {}} // Можно добавить переход
							/>
							<BookCard
								id='desserts'
								title='Десерты'
								count='5 рецептов'
								mainImg={img4}
								subImg1={img5}
								subImg2={img6}
								activeMenuId={activeMenuId}
								setActiveMenuId={setActiveMenuId}
								onContentClick={() => setViewMode('book-detail')}
							/>
							<div onClick={() => setIsModalOpen(true)}>
								<CreateButton />
							</div>
						</div>
					)}

					{/* ДЕТАЛКА КНИГИ */}
					{activeTab === 'books' && viewMode === 'book-detail' && (
						<div className='animate-in fade-in duration-500'>
							<nav
								className='text-xs text-gray-400 mb-4 cursor-pointer hover:text-[#70b34d] transition-colors'
								onClick={() => setViewMode('main')}
							>
								Профиль /{' '}
								<span className='text-gray-600'>Кулинарная книга</span>
							</nav>
							<h2 className='text-2xl font-bold mb-8'>Десерты</h2>
							<div className='grid grid-cols-2 md:grid-cols-4 gap-6'>
								<RecipeCard
									img={img4}
									title='Яблочная крошка'
									time='40 мин'
									likes={222}
								/>
								<RecipeCard
									img={img5}
									title='Вафли с вареньем'
									time='40 мин'
									likes={32}
								/>
								<RecipeCard
									img={img6}
									title='Рисовый пудинг'
									time='40 мин'
									likes={222}
								/>
								<RecipeCard
									img={img2}
									title='Блинчики'
									time='40 мин'
									likes={222}
								/>
							</div>
						</div>
					)}

					{/* SHOPPING LIST (Main & Detail) */}
					{activeTab === 'shopping' && viewMode === 'main' && (
						<div className='flex flex-col gap-1 max-w-2xl mx-auto'>
							<ShoppingRow
								title='Бефстроганов в одной кастрюле'
								count='Купить: 7 ингредиентов'
								img={img4}
								onClick={() => setViewMode('shopping-detail')}
							/>
							<ShoppingRow
								title='Оладьи'
								count='Купить: 4 ингредиента'
								img={img}
							/>
						</div>
					)}

					{activeTab === 'shopping' && viewMode === 'shopping-detail' && (
						<div className='grid grid-cols-1 md:grid-cols-2 gap-12 animate-in slide-in-from-right-4 duration-300'>
							<img
								src={img4}
								className='rounded-3xl w-full aspect-square object-cover shadow-lg'
								alt='recipe'
							/>
							<div>
								<h2 className='text-2xl font-bold mb-1'>
									Бефстроганов в одной кастрюле
								</h2>
								<p className='text-gray-400 text-sm mb-6'>
									Купить: {ingredients.filter(i => !i.checked).length}{' '}
									ингредиентов
								</p>
								<button className='bg-[#70b34d] text-white px-8 py-3 rounded-xl font-bold text-sm mb-10 hover:shadow-lg transition-all active:scale-95'>
									Перейти к рецепту
								</button>
								<div className='space-y-8'>
									<section>
										<h3 className='font-bold mb-4'>Купить:</h3>
										{ingredients
											.filter(i => !i.checked)
											.map(ing => (
												<IngredientRow
													key={ing.id}
													{...ing}
													onToggle={() => toggleIngredient(ing.id)}
												/>
											))}
									</section>
									<section>
										<h3 className='font-bold text-gray-400 mb-4'>Куплено:</h3>
										{ingredients
											.filter(i => i.checked)
											.map(ing => (
												<IngredientRow
													key={ing.id}
													{...ing}
													onToggle={() => toggleIngredient(ing.id)}
												/>
											))}
									</section>
								</div>
							</div>
						</div>
					)}

					{/* LIKES */}
					{activeTab === 'likes' && (
						<div className='flex flex-col items-center justify-center text-center py-20'>
							<img src={img7} className='w-64 mb-8 opacity-90' alt='Empty' />
							<h3 className='font-bold text-xl mb-3'>
								Похоже, тебе еще ничего не понравилось!
							</h3>
							<p className='text-gray-400 text-sm max-w-sm mb-8'>
								Если тебе понравился рецепт, просто нажмите на сердечко, чтобы
								сохранить его на потом!
							</p>
							<button className='bg-[#70b34d] text-white px-10 py-3 rounded-2xl font-bold hover:bg-[#5f9941] transition-all'>
								Посмотреть рецепты
							</button>
						</div>
					)}
				</div>
			</div>

			{/* МОДАЛКА СОЗДАНИЯ */}
			{isModalOpen && (
				<div className='fixed inset-0 z-[100] flex items-center justify-center bg-black/40 backdrop-blur-sm p-4'>
					<div
						className='w-full max-w-md bg-white rounded-[32px] p-8 shadow-2xl relative animate-in zoom-in-95 duration-200'
						onClick={e => e.stopPropagation()}
					>
						<button
							onClick={() => setIsModalOpen(false)}
							className='absolute top-6 right-6 text-gray-400 hover:text-black text-xl'
						>
							✕
						</button>
						<h3 className='text-center text-xl font-bold mb-6 uppercase tracking-wide'>
							Создайте новую
							<br />
							кулинарную книгу
						</h3>
						<div className='grid grid-cols-2 gap-2 mb-8 h-40'>
							<div className='bg-[#e8f4e5] rounded-tl-2xl rounded-bl-2xl flex items-center justify-center text-3xl'>
								🥞
							</div>
							<div className='grid grid-rows-2 gap-2'>
								<div className='bg-[#e8f4e5] rounded-tr-2xl flex items-center justify-center text-2xl'>
									🥑
								</div>
								<div className='bg-[#e8f4e5] rounded-br-2xl flex items-center justify-center text-2xl'>
									🍳
								</div>
							</div>
						</div>
						<input
							type='text'
							placeholder='Напишите заголовок'
							className='w-full border-b border-gray-200 py-3 mb-10 outline-none focus:border-[#70b34d] transition-colors font-medium'
						/>
						<div className='flex gap-4'>
							<button
								onClick={() => setIsModalOpen(false)}
								className='flex-1 py-3 border border-[#70b34d] text-[#70b34d] rounded-xl font-bold text-sm hover:bg-[#70b34d]/5'
							>
								Закрыть
							</button>
							<button className='flex-1 py-3 bg-[#70b34d] text-white rounded-xl font-bold text-sm shadow-md hover:bg-[#5f9941]'>
								Создать
							</button>
						</div>
					</div>
				</div>
			)}
		</div>
	)
}

// --- КОМПОНЕНТ КАРТОЧКИ КНИГИ ---
const BookCard = ({
	id,
	title,
	count,
	mainImg,
	subImg1,
	subImg2,
	activeMenuId,
	setActiveMenuId,
	onContentClick,
}: any) => {
	const isMenuOpen = activeMenuId === id

	const handleMenuClick = (e: React.MouseEvent) => {
		e.stopPropagation() // Чтобы не сработал переход по карточке
		setActiveMenuId(isMenuOpen ? null : id)
	}

	return (
		<div className='group relative'>
			{/* Сама карточка (кликабельна для перехода) */}
			<div
				onClick={onContentClick}
				className='cursor-pointer overflow-hidden rounded-[24px] bg-gray-100 transition-all hover:shadow-lg'
			>
				<div className='grid h-64 grid-rows-2 gap-0.5'>
					<img
						src={mainImg}
						className='h-full w-full object-cover'
						alt='main'
					/>
					<div className='grid grid-cols-2 gap-0.5'>
						<img
							src={subImg1}
							className='h-full w-full object-cover'
							alt='sub1'
						/>
						<img
							src={subImg2}
							className='h-full w-full object-cover'
							alt='sub2'
						/>
					</div>
				</div>
			</div>

			{/* Футер карточки: заголовок и ТРИ ТОЧКИ */}
			<div className='mt-4 flex items-center justify-between px-1'>
				<div className='cursor-pointer' onClick={onContentClick}>
					<h4 className='font-extrabold text-[#2D3436] hover:text-[#70b34d] transition-colors'>
						{title}
					</h4>
					{count && (
						<p className='text-[10px] text-gray-400 font-bold uppercase tracking-wider'>
							{count}
						</p>
					)}
				</div>

				<div className='relative'>
					<button
						onClick={handleMenuClick}
						className={`p-2 rounded-full transition-colors ${isMenuOpen ? 'bg-gray-100' : 'hover:bg-gray-50'}`}
					>
						<span className='text-gray-300 text-xl font-bold leading-none select-none'>
							•••
						</span>
					</button>

					{/* ВЫПАДАЮЩЕЕ МЕНЮ (Появляется по клику) */}
					{isMenuOpen && (
						<div
							className='absolute top-full right-0 mt-2 w-48 bg-white shadow-2xl rounded-2xl p-2 z-50 border border-gray-100 animate-in fade-in zoom-in-95 duration-150 origin-top-right'
							onClick={e => e.stopPropagation()}
						>
							<button className='w-full text-left text-sm font-bold p-3 hover:bg-gray-50 rounded-xl transition-colors'>
								Изменить название
							</button>
							<button className='w-full text-left text-sm font-bold p-3 text-red-500 hover:bg-red-50 rounded-xl transition-colors'>
								Удалить
							</button>
						</div>
					)}
				</div>
			</div>
		</div>
	)
}

// Вспомогательные компоненты
const RecipeCard = ({ img, title, time, likes }: any) => (
	<div className='group cursor-pointer'>
		<div className='relative overflow-hidden rounded-2xl mb-3 shadow-sm'>
			<img
				src={img}
				className='w-full aspect-[3/4] object-cover group-hover:scale-105 transition-transform duration-500'
				alt={title}
			/>
			<div className='absolute top-3 right-3 bg-white/20 backdrop-blur-md rounded-lg p-1.5 shadow-sm text-white'>
				🔖
			</div>
			<div className='absolute bottom-3 left-3 flex gap-3 text-white text-[10px] font-bold'>
				<span className='bg-black/20 backdrop-blur-sm px-2 py-0.5 rounded'>
					❤️ {likes}
				</span>
				<span className='bg-black/20 backdrop-blur-sm px-2 py-0.5 rounded'>
					🕒 {time}
				</span>
			</div>
		</div>
		<h4 className='text-sm font-bold leading-tight group-hover:text-[#70b34d] transition-colors'>
			{title}
		</h4>
	</div>
)

const IngredientRow = ({ label, value, checked, onToggle }: any) => (
	<div
		onClick={onToggle}
		className='flex items-center justify-between py-4 border-b border-gray-50 cursor-pointer group transition-all'
	>
		<div className='flex items-center gap-4'>
			<div
				className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all ${checked ? 'bg-[#70b34d] border-[#70b34d]' : 'border-gray-200 group-hover:border-[#70b34d]'}`}
			>
				{checked && <span className='text-white text-xs'>✓</span>}
			</div>
			<span
				className={`text-sm font-medium transition-all ${checked ? 'text-gray-300 line-through' : 'text-gray-700'}`}
			>
				{label}
			</span>
		</div>
		<span className='text-xs font-bold text-gray-400'>{value}</span>
	</div>
)

const ShoppingRow = ({ title, count, img, onClick }: any) => (
	<div
		onClick={onClick}
		className='flex items-center justify-between py-5 border-b border-gray-100 hover:bg-gray-50 px-2 rounded-2xl transition-all cursor-pointer group'
	>
		<div className='flex items-center gap-5'>
			<img
				src={img}
				className='w-20 h-20 rounded-2xl object-cover shadow-sm group-hover:scale-95 transition-transform'
				alt={title}
			/>
			<div>
				<h4 className='font-extrabold text-sm'>{title}</h4>
				<p className='text-xs text-gray-400 mt-1'>{count}</p>
			</div>
		</div>
		<div className='text-[#70b34d] text-2xl font-light pr-4'>›</div>
	</div>
)

const CreateButton = () => (
	<div className='flex h-64 flex-col items-center justify-center rounded-[24px] bg-[#e8f4e5] border-2 border-transparent hover:border-[#70b34d] transition-all cursor-pointer px-10 text-center group shadow-sm active:scale-95'>
		<div className='mb-4 flex h-14 w-14 items-center justify-center rounded-full border-2 border-[#70b34d] text-4xl font-light text-[#70b34d] group-hover:bg-[#70b34d] group-hover:text-white transition-all'>
			+
		</div>
		<p className='text-[#70b34d] font-extrabold text-sm leading-tight'>
			Создайте новую кулинарную книгу
		</p>
	</div>
)
