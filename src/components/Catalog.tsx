import Icon from "@/components/ui/icon"

const products = [
  {
    id: 1,
    name: 'Парикмахерский комплект "Амелия"',
    price: 119000,
    category: "Парикмахерское оборудование",
    description: "Полный комплект для парикмахерского кресла с мойкой. Эргономичный дизайн, хромированные элементы, высококачественная обивка. Идеально для современного салона.",
    features: ["Кресло с гидроподъёмником", "Парикмахерская мойка", "Зеркало с полочкой", "Гарантия 1 год"],
    image: "https://cdn.poehali.dev/projects/58c01076-b127-47f5-8f9e-62ad921f3ee7/files/e1e64e27-b344-46a9-8299-bc682dbfa12c.jpg",
    badge: "Хит продаж",
  },
]

export default function Catalog() {
  return (
    <section className="py-20 px-4 sm:px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12 text-center">
          <p className="text-xs font-mono uppercase tracking-[0.15em] text-black/40 mb-3">
            Ассортимент
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-normal tracking-[-0.03em] text-black mb-4">
            Каталог оборудования
          </h2>
          <p className="text-base sm:text-lg text-black/60 max-w-xl mx-auto">
            Профессиональное оснащение для салонов красоты — от кресел до комплектов под ключ
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="group rounded-2xl border border-black/8 overflow-hidden hover:shadow-xl hover:shadow-black/8 transition-all duration-300"
            >
              <div className="relative overflow-hidden bg-gray-50 aspect-[4/3]">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {product.badge && (
                  <span className="absolute top-3 left-3 bg-[#004FE5] text-white text-[10px] font-mono uppercase tracking-[0.1em] px-3 py-1 rounded-full">
                    {product.badge}
                  </span>
                )}
              </div>

              <div className="p-5">
                <p className="text-[10px] font-mono uppercase tracking-[0.12em] text-black/40 mb-2">
                  {product.category}
                </p>
                <h3 className="text-lg font-medium text-black tracking-[-0.02em] mb-2 leading-tight">
                  {product.name}
                </h3>
                <p className="text-sm text-black/60 leading-[160%] mb-4">
                  {product.description}
                </p>

                <ul className="space-y-1.5 mb-5">
                  {product.features.map((f, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-black/70">
                      <Icon name="Check" size={14} className="text-[#004FE5] flex-shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>

                <div className="flex items-center justify-between pt-4 border-t border-black/8">
                  <p className="text-2xl font-medium text-black tracking-[-0.03em]">
                    {product.price.toLocaleString("ru-RU")} ₽
                  </p>
                  <button className="flex items-center gap-2 bg-[#004FE5] text-white text-sm px-4 py-2 rounded-full hover:bg-[#003CC7] transition-colors">
                    Заказать
                    <Icon name="ArrowRight" size={14} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
