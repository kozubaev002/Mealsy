export function Text() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-12">
      <div className="bg-white rounded-[32px] p-8 md:p-12 shadow-sm border border-[#D9E6CD]/50 relative overflow-hidden">
        
        <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#6ABF69]/5 rounded-full blur-3xl" />

        <div className="relative z-10">
          <h2 className="text-[24px] md:text-[32px] font-bold text-[#333] mb-6 leading-tight">
            Готовьте с умом и экономьте время с <span className="text-[#6ABF69]">Mealsy</span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 items-start">
            <div className="space-y-4">
              <p className="text-[#555] text-[16px] leading-relaxed">
                <span className="font-bold text-[#333]">Конструктор рецептов</span> — это ваш персональный кулинарный помощник. Мы создали этот инструмент, чтобы помочь вам разнообразить рацион и сократить количество выбрасываемых продуктов.
              </p>
              <div className="inline-block bg-[#EBF5E1] px-4 py-2 rounded-lg">
                <p className="text-[#4A5D45] font-bold text-sm">
                  📊 Более 5000 проверенных рецептов
                </p>
              </div>
            </div>

            <div className="space-y-4 border-l border-[#D9E6CD] pl-8">
              <p className="text-[#555] text-[16px] leading-relaxed">
                Используя фильтры, вы сможете легко придерживаться диеты, подбирать 
                <span className="text-[#6ABF69] font-medium"> ПП-рецепты</span> или находить 
                <span className="text-[#6ABF69] font-medium"> веганские альтернативы</span> привычным блюдам.
              </p>
              <p className="text-[#333] font-medium italic">
                Начните экспериментировать с привычными ингредиентами и открывайте новые вкусы каждый день!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}