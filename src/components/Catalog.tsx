import Icon from "@/components/ui/icon"

const products = [
  {
    id: 1,
    name: "Парикмахерский комплект Амелия",
    price: 119000,
    category: "Парикмахерское оборудование",
    description: "Комплект: кресло парикмахерское серое с гидроподъёмником + мойка с мягким креслом. Серая экокожа, хромированные элементы, бренд Мэдисон.",
    features: ["Кресло с гидроподъёмником", "Мойка с мягким креслом", "Серая экокожа", "Гарантия 1 год"],
    image: "https://cdn.poehali.dev/projects/58c01076-b127-47f5-8f9e-62ad921f3ee7/bucket/d6a8aa14-37c9-4011-b0ca-ddf997a6d77b.jpg",
    badge: "Хит продаж",
  },
  {
    id: 2,
    name: "Маникюрный стол с лампой",
    price: 34500,
    category: "Маникюрное оборудование",
    description: "Профессиональный маникюрный стол со встроенной UV/LED лампой и вытяжкой. Просторная рабочая поверхность, удобные ящики для хранения.",
    features: ["UV/LED лампа в комплекте", "Встроенная вытяжка", "3 ящика для хранения", "Регулируемая высота"],
    image: "https://cdn.poehali.dev/projects/58c01076-b127-47f5-8f9e-62ad921f3ee7/files/f79397c0-871c-40d5-9ba7-f25336eb0c91.jpg",
    badge: "",
  },
  {
    id: 3,
    name: "Парикмахерская мойка",
    price: 28900,
    category: "Парикмахерское оборудование",
    description: "Мойка для волос с удобным креслом с откидывающейся спинкой. Керамическая чаша, хромированный смеситель, мягкая подголовная подушка.",
    features: ["Керамическая чаша", "Хромированный смеситель", "Кресло с откидной спинкой", "Простой монтаж"],
    image: "https://cdn.poehali.dev/projects/58c01076-b127-47f5-8f9e-62ad921f3ee7/files/37438116-98e7-4a56-8356-d1d77f6aaef5.jpg",
    badge: "",
  },
  {
    id: 5,
    name: "Кресло парикмахерское поворотное",
    price: 42000,
    category: "Парикмахерское оборудование",
    description: "Серое поворотное кресло с гидроподъёмником и хромированным основанием. Вращается на 360°, регулируется по высоте, мягкая обивка из экокожи.",
    features: ["Поворот 360°", "Гидроподъёмник", "Серая экокожа", "Хромированное основание"],
    image: "https://cdn.poehali.dev/projects/58c01076-b127-47f5-8f9e-62ad921f3ee7/files/20b517a9-33e5-4ccc-bc84-4ec9fe92d93b.jpg",
    badge: "",
  },
  {
    id: 4,
    name: "Педикюрное кресло",
    price: 89000,
    category: "Педикюрное оборудование",
    description: "Профессиональное педикюрное кресло с массажной функцией и ванночкой для ног. Премиальная обивка, несколько режимов массажа.",
    features: ["Массажная функция", "Ванночка для ног", "Пульт управления", "Гарантия 2 года"],
    image: "https://cdn.poehali.dev/projects/58c01076-b127-47f5-8f9e-62ad921f3ee7/files/ae0ed43b-4af3-4537-a476-51cfc8f02a11.jpg",
    badge: "Новинка",
  },
  {
    id: 6,
    name: "Машинка для стрижки VGR V-001",
    price: 24000,
    category: "Инструменты и аксессуары",
    description: "Профессиональная машинка для стрижки волос VGR V-001. Мощный мотор, точная регулировка длины, подходит для профессионального использования.",
    features: ["Профессиональный мотор", "Точная регулировка", "Эргономичный корпус", "Полный комплект насадок"],
    image: "https://cdn.poehali.dev/projects/58c01076-b127-47f5-8f9e-62ad921f3ee7/files/1c05690b-6155-43b0-9cc1-6428bf15bb10.jpg",
    badge: "",
  },
  {
    id: 7,
    name: "Комод белый «Уютная логика»",
    price: 9000,
    category: "Мебель",
    description: "Белый комод для хранения расходных материалов и инструментов. Вместительные ящики, аккуратный дизайн, впишется в любой интерьер салона.",
    features: ["Несколько ящиков", "Белый цвет", "Прочный корпус", "Простая сборка"],
    image: "https://cdn.poehali.dev/projects/58c01076-b127-47f5-8f9e-62ad921f3ee7/files/deac49b1-8a23-4241-a8f1-edc23435a733.jpg",
    badge: "",
  },
  {
    id: 8,
    name: "Пуфик с ящиком",
    price: 5018,
    category: "Мебель",
    description: "Удобный пуфик с встроенным ящиком для хранения. Мягкое сиденье, компактные размеры, подходит для зоны ожидания или рабочего места.",
    features: ["Встроенный ящик", "Мягкое сиденье", "Компактный размер", "Универсальный дизайн"],
    image: "https://cdn.poehali.dev/projects/58c01076-b127-47f5-8f9e-62ad921f3ee7/files/5ee62b0f-35d6-49e8-a24d-2aaa6ace8e60.jpg",
    badge: "",
  },
  {
    id: 9,
    name: "Тележка парикмахерская серая",
    price: 19932,
    category: "Мебель",
    description: "Профессиональная парикмахерская тележка серого цвета. Несколько полок и отсеков для инструментов, колёса с фиксатором, удобная ручка.",
    features: ["Несколько полок", "Колёса с фиксатором", "Серый цвет", "Прочная конструкция"],
    image: "https://cdn.poehali.dev/projects/58c01076-b127-47f5-8f9e-62ad921f3ee7/files/c82a0556-27a1-4e8b-b115-799fc74fcce4.jpg",
    badge: "",
  },
  {
    id: 10,
    name: "Комод NEOWOOD белый",
    price: 19000,
    category: "Мебель",
    description: "Стильный белый комод NEOWOOD для профессионального салона. Современный дизайн, качественные материалы, просторные ящики.",
    features: ["Современный дизайн", "Качественные материалы", "Просторные ящики", "Белый цвет"],
    image: "https://cdn.poehali.dev/projects/58c01076-b127-47f5-8f9e-62ad921f3ee7/files/c94971ef-750a-47c8-87be-71367cfe9ca9.jpg",
    badge: "",
  },
  {
    id: 11,
    name: "Полка настенная парящая EGGER",
    price: 3000,
    category: "Мебель",
    description: "Минималистичная настенная полка EGGER — создаёт эффект «парения». Идеально для зеркал, декора и профессиональных аксессуаров.",
    features: ["Эффект парения", "Материал EGGER", "Лёгкий монтаж", "Минималистичный дизайн"],
    image: "https://cdn.poehali.dev/projects/58c01076-b127-47f5-8f9e-62ad921f3ee7/files/8356aa7f-ec00-49ff-8199-41c65fa1f407.jpg",
    badge: "",
  },
  {
    id: 12,
    name: "Фен VGR с LED-дисплеем",
    price: 19000,
    category: "Инструменты и аксессуары",
    description: "Профессиональный фен для волос VGR с LED-дисплеем. Мощный поток воздуха, ионизация, несколько скоростей и температурных режимов.",
    features: ["LED-дисплей", "Ионизация", "Несколько режимов", "Профессиональная мощность"],
    image: "https://cdn.poehali.dev/projects/58c01076-b127-47f5-8f9e-62ad921f3ee7/files/700f03c7-ce1f-45c9-a46d-efd83e748131.jpg",
    badge: "",
  },
  {
    id: 13,
    name: "Журнальный столик лофт круглый",
    price: 11000,
    category: "Мебель",
    description: "Круглый журнальный столик в стиле лофт для зоны ожидания салона. Стильный дизайн, прочное основание, металлические элементы.",
    features: ["Стиль лофт", "Круглая столешница", "Металлические ножки", "Прочная конструкция"],
    image: "https://cdn.poehali.dev/projects/58c01076-b127-47f5-8f9e-62ad921f3ee7/files/d80bf352-166f-4488-a405-6cb720b7c719.jpg",
    badge: "",
  },
  {
    id: 14,
    name: "Пылесос Vearto для парикмахерской",
    price: 19300,
    category: "Оборудование",
    description: "Специализированный пылесос Vearto для парикмахерских. Эффективно убирает волосы и мелкий мусор, тихая работа, большой контейнер.",
    features: ["Для волос и мусора", "Тихая работа", "Большой контейнер", "Компактный корпус"],
    image: "https://cdn.poehali.dev/projects/58c01076-b127-47f5-8f9e-62ad921f3ee7/files/b0937b9b-b172-41e5-931f-e5d30ea9a0c6.jpg",
    badge: "",
  },
  {
    id: 15,
    name: "Стерилизатор МИКРОЦИД",
    price: 45500,
    category: "Оборудование",
    description: "Профессиональный стерилизатор МИКРОЦИД для инструментов. Надёжная дезинфекция, соответствует санитарным нормам для салонов красоты.",
    features: ["Сертифицированный", "Соответствие СанПиН", "Удобная загрузка", "Индикатор цикла"],
    image: "https://cdn.poehali.dev/projects/58c01076-b127-47f5-8f9e-62ad921f3ee7/files/15713aa7-ea17-4687-9c7c-f8385ff793d0.jpg",
    badge: "Профессиональный",
  },
  {
    id: 16,
    name: "Стул мастера Астек с опорой для ног",
    price: 14850,
    category: "Мебель",
    description: "Высокий стул мастера Астек с удобной опорой для ног. Регулировка высоты, мягкое сиденье, колёса для лёгкого перемещения.",
    features: ["Опора для ног", "Регулировка высоты", "Мягкое сиденье", "Колёса"],
    image: "https://cdn.poehali.dev/projects/58c01076-b127-47f5-8f9e-62ad921f3ee7/files/f9e726bf-0075-4acf-82a0-cfebc3ce752d.jpg",
    badge: "",
  },
  {
    id: 17,
    name: "Утюжок MZ Titanium розовый",
    price: 19000,
    category: "Инструменты и аксессуары",
    description: "Профессиональный утюжок для волос MZ Titanium в розовом цвете. Титановые пластины, быстрый нагрев, защита волос от перегрева.",
    features: ["Титановые пластины", "Быстрый нагрев", "Защита волос", "Розовый цвет"],
    image: "https://cdn.poehali.dev/projects/58c01076-b127-47f5-8f9e-62ad921f3ee7/files/16a5027b-bc41-4c5a-8912-c60f4b3a3749.jpg",
    badge: "",
  },
  {
    id: 18,
    name: "Подставка для ног к парикмахерскому креслу",
    price: 4900,
    category: "Инструменты и аксессуары",
    description: "Удобная подставка для ног, совместимая с парикмахерскими креслами. Регулируемая высота, прочная конструкция, нескользящее основание.",
    features: ["Регулируемая высота", "Совместима с креслами", "Нескользящее основание", "Прочная сталь"],
    image: "https://cdn.poehali.dev/projects/58c01076-b127-47f5-8f9e-62ad921f3ee7/files/1eceeccd-5188-4b9f-ae2b-1f9abb7a4b76.jpg",
    badge: "",
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