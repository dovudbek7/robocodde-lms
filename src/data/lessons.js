const delay = (ms) => new Promise((r) => setTimeout(r, ms))

export const lessons = {
  frontend: [
    {
      id: 'html-basics',
      courseId: 'frontend',
      module: 'HTML & CSS',
      num: 1,
      title: 'HTML nima? Asosiy teglar',
      duration: '20 daqiqa',
      status: 'done',
      quizScore: 90,
      strategies: ['HTML', 'Tags', 'Attributes', 'Semantics'],
      content: [
        {
          heading: 'HTML nima?',
          bullets: [
            'HTML — <strong>HyperText Markup Language</strong>, veb sahifalar yaratish uchun standart til',
            "Brauzer HTML ni o'qib, sahifani ko'rsatadi",
            '1991 yilda Tim Berners-Lee tomonidan yaratilgan',
          ],
        },
        {
          heading: 'Asosiy teglar',
          bullets: [
            '<strong>&lt;h1&gt;–&lt;h6&gt;</strong> — sarlavhalar',
            '<strong>&lt;p&gt;</strong> — paragraf',
            '<strong>&lt;a&gt;</strong> — havola',
            '<strong>&lt;img&gt;</strong> — rasm',
            "<strong>&lt;div&gt;</strong> — bo'lim",
          ],
        },
      ],
      vocabulary: [
        { uz: 'teglar', en: 'tags', ru: 'теги' },
        { uz: 'atribut', en: 'attribute', ru: 'атрибут' },
        { uz: 'element', en: 'element', ru: 'элемент' },
        { uz: 'havola', en: 'link', ru: 'ссылка' },
        { uz: 'sarlavha', en: 'heading', ru: 'заголовок' },
      ],
      resources: [
        { title: 'MDN — HTML asoslari', url: 'developer.mozilla.org/html' },
        { title: 'W3Schools HTML', url: 'w3schools.com/html' },
      ],
      code: null,
    },
    {
      id: 'css-basics',
      courseId: 'frontend',
      module: 'HTML & CSS',
      num: 2,
      title: 'CSS Selectors & Box Model',
      duration: '25 daqiqa',
      status: 'done',
      quizScore: 85,
      strategies: ['CSS', 'Selectors', 'Box Model', 'Specificity'],
      content: [
        {
          heading: 'CSS nima?',
          bullets: [
            'CSS — <strong>Cascading Style Sheets</strong>, HTML elementlarini stillashtirish tili',
            "Rang, shrift, joy, o'lcham kabi vizual xususiyatlarni boshqaradi",
          ],
        },
        {
          heading: 'Box Model',
          bullets: [
            'Har bir element: <strong>content → padding → border → margin</strong>',
            'box-sizing: border-box — keng tarqalgan usul',
          ],
        },
      ],
      vocabulary: [
        { uz: 'stil', en: 'style', ru: 'стиль' },
        { uz: 'selektor', en: 'selector', ru: 'селектор' },
        { uz: 'chegara', en: 'border', ru: 'граница' },
        { uz: "ichki bo'sh joy", en: 'padding', ru: 'отступ внутренний' },
        { uz: "tashqi bo'sh joy", en: 'margin', ru: 'отступ внешний' },
      ],
      resources: [
        { title: 'MDN — CSS Box Model', url: 'developer.mozilla.org/css/box-model' },
        { title: 'CSS Tricks', url: 'css-tricks.com' },
      ],
      code: null,
    },
    {
      id: 'flexbox',
      courseId: 'frontend',
      module: 'HTML & CSS',
      num: 3,
      title: 'Flexbox & Grid Layout',
      duration: '30 daqiqa',
      status: 'done',
      quizScore: 92,
      strategies: ['Flexbox', 'Grid', 'Layout', 'Responsive'],
      content: [
        {
          heading: 'Flexbox',
          bullets: [
            "display: flex — elementlarni qatorga yoki ustun qilib joylashtiradi",
            "<strong>justify-content</strong> — gorizontal yo'nalish",
            "<strong>align-items</strong> — vertikal yo'nalish",
          ],
        },
        {
          heading: 'CSS Grid',
          bullets: [
            'display: grid — 2D layout yaratadi',
            '<strong>grid-template-columns</strong> — ustun soni va kengligi',
            "repeat() va fr birligi ishlatiladi",
          ],
        },
      ],
      vocabulary: [
        { uz: 'moslashuvchan', en: 'flexible', ru: 'гибкий' },
        { uz: 'satr', en: 'row', ru: 'строка' },
        { uz: 'ustun', en: 'column', ru: 'колонка' },
        { uz: 'hizalash', en: 'alignment', ru: 'выравнивание' },
      ],
      resources: [
        { title: 'CSS Tricks — Flexbox Guide', url: 'css-tricks.com/flexbox' },
        { title: "Grid Garden (o'yin)", url: 'cssgridgarden.com' },
      ],
      code: null,
    },
    {
      id: 'js-basics',
      courseId: 'frontend',
      module: 'JavaScript',
      num: 4,
      title: 'JS Fundamentals — Variables & Types',
      duration: '35 daqiqa',
      status: 'done',
      quizScore: 78,
      strategies: ['Variables', 'Data Types', 'let/const', 'typeof'],
      content: [
        {
          heading: "O'zgaruvchilar",
          bullets: [
            "<strong>let</strong> — o'zgartirilishi mumkin bo'lgan o'zgaruvchi",
            "<strong>const</strong> — o'zgartirilmaydigan o'zgaruvchi",
            "<strong>var</strong> — eski usul, ishlatmang",
          ],
        },
        {
          heading: "Ma'lumot turlari",
          bullets: [
            '<strong>string</strong> — matn: "salom"',
            '<strong>number</strong> — son: 42, 3.14',
            '<strong>boolean</strong> — true yoki false',
            "<strong>null / undefined</strong> — bo'sh qiymat",
          ],
        },
      ],
      vocabulary: [
        { uz: "o'zgaruvchi", en: 'variable', ru: 'переменная' },
        { uz: "ma'lumot turi", en: 'data type', ru: 'тип данных' },
        { uz: 'qiymat', en: 'value', ru: 'значение' },
        { uz: "e'lon qilish", en: 'declare', ru: 'объявить' },
      ],
      resources: [
        { title: 'MDN — JavaScript', url: 'developer.mozilla.org/js' },
        { title: 'javascript.info', url: 'javascript.info' },
      ],
      code: "let name = 'Dovudbek';\nconst age = 21;\n\nconsole.log(name); // \"Dovudbek\"\nconsole.log(typeof age); // \"number\"",
    },
    {
      id: 'js-functions',
      courseId: 'frontend',
      module: 'JavaScript',
      num: 5,
      title: 'Functions, Arrays & Objects',
      duration: '40 daqiqa',
      status: 'done',
      quizScore: 88,
      strategies: ['Functions', 'Arrow Functions', 'Arrays', 'Objects', 'map/filter'],
      content: [
        {
          heading: 'Funksiyalar',
          bullets: [
            "<strong>function</strong> kalit so'zi yoki arrow => sintaksisi",
            'Parametrlar va qaytarish qiymati',
            'Higher-order functions: map, filter, reduce',
          ],
        },
        {
          heading: 'Massivlar',
          bullets: [
            '<strong>map()</strong> — har bir element uchun yangi qiymat',
            '<strong>filter()</strong> — shartga mos elementlarni olish',
            '<strong>find()</strong> — birinchi mos elementni topish',
          ],
        },
      ],
      vocabulary: [
        { uz: 'funksiya', en: 'function', ru: 'функция' },
        { uz: 'massiv', en: 'array', ru: 'массив' },
        { uz: "ob'ekt", en: 'object', ru: 'объект' },
        { uz: 'parametr', en: 'parameter', ru: 'параметр' },
        { uz: 'qaytarish', en: 'return', ru: 'возврат' },
      ],
      resources: [
        { title: 'javascript.info — Arrays', url: 'javascript.info/array' },
        { title: 'MDN — Functions', url: 'developer.mozilla.org/functions' },
      ],
      code: "const nums = [1, 2, 3, 4, 5];\n\nconst doubled = nums.map(n => n * 2);\n// [2, 4, 6, 8, 10]\n\nconst evens = nums.filter(n => n % 2 === 0);\n// [2, 4]",
    },
    {
      id: 'react-intro',
      courseId: 'frontend',
      module: 'React',
      num: 1,
      title: 'Introduction and Installation',
      duration: '25 daqiqa',
      status: 'active',
      quizScore: null,
      strategies: ['React.js', 'Component', 'Virtual DOM', 'Node.js', 'NPM', 'Framework vs Library'],
      content: [
        {
          heading: "React o'zi nima?",
          bullets: [
            "React — dinamik va interaktiv UI yaratishga yordam beruvchi <strong>JavaScript kutubxonasi</strong>",
            '2011 yilda <strong>Facebook</strong> kompaniyasida ishlab chiqilgan',
            "U ko'p foydalaniladigan JS kutubxonasi hisoblanadi",
          ],
        },
        {
          heading: 'Framework va Library ning farqi',
          bullets: [
            "<strong>Library</strong> (kutubxona) — maxsus funksional xizmatlarni ta'minlovchi <em>uskuna</em>",
            "<strong>Framework</strong> — ilovalarni, projectlarni yaratish uchun uskunalar va ko'rsatmalar to'plami",
          ],
        },
        {
          heading: 'React DOM qanday ishlaydi?',
          bullets: [
            "React haqiqiy DOM-ga yangilanishlarni optimallashtirish uchun <strong>virtual DOM</strong>-dan foydalanadi",
            "Komponentning holati o'zgarganda, React yangi virtual DOM daraxtini yaratadi",
            "Keyin faqat zarur o'zgarishlarni haqiqiy DOMga qo'llaydi",
          ],
        },
      ],
      vocabulary: [
        { uz: 'foydalanuvchi', en: 'user', ru: 'пользователь' },
        { uz: 'ish muhiti, interfeys', en: 'interface', ru: 'интерфейс' },
        { uz: "o'zaro ta'sir qiladigan", en: 'interactive', ru: 'интерактивный' },
        { uz: "dinamik, o'zgaruvchan", en: 'dynamic', ru: 'динамичный' },
        { uz: 'kutubxona', en: 'library', ru: 'библиотека' },
        { uz: 'ramka', en: 'framework', ru: 'структура, рамки' },
        { uz: 'tarkibiy qism', en: 'component', ru: 'компонент' },
        { uz: 'yaratish', en: 'create', ru: 'создавать' },
        { uz: 'ilova', en: 'app / application', ru: 'приложение' },
        { uz: 'ishlash vaqti', en: 'runtime', ru: 'время выполнения' },
        { uz: 'muhit', en: 'environment', ru: 'окружение' },
        { uz: 'qurish', en: 'build', ru: 'строить' },
      ],
      resources: [
        { title: 'React rasmiy hujjatlari — Start a New Project', url: 'react.dev/learn/start-a-new-react-project' },
        { title: 'React Components Reference', url: 'react.dev/reference/react/Component' },
        { title: 'React Crash Course — YouTube', url: 'youtube.com' },
      ],
      code: "import React, { useState } from 'react';\n\nfunction App() {\n  // useState hook for managing state\n  const [count, setCount] = useState(0);\n\n  return (\n    <div>\n      <h1>Counter: {count}</h1>\n      <button onClick={() => setCount(count + 1)}>\n        Increment\n      </button>\n    </div>\n  );\n}\n\nexport default App;",
    },
    {
      id: 'react-components',
      courseId: 'frontend',
      module: 'React',
      num: 2,
      title: 'Components & Props',
      duration: '30 daqiqa',
      status: 'locked',
      quizScore: null,
      strategies: ['Props', 'JSX', 'PascalCase', 'Reusability'],
      content: [],
      vocabulary: [],
      resources: [],
      code: null,
    },
    {
      id: 'react-state',
      courseId: 'frontend',
      module: 'React',
      num: 3,
      title: 'State & useState Hook',
      duration: '35 daqiqa',
      status: 'locked',
      quizScore: null,
      strategies: ['useState', 'State', 'Re-render', 'Hooks'],
      content: [],
      vocabulary: [],
      resources: [],
      code: null,
    },
  ],
}

export async function fetchLessons(courseId) {
  await delay(300)
  return lessons[courseId] ?? []
}

export async function fetchLesson(lessonId) {
  await delay(200)
  for (const arr of Object.values(lessons)) {
    const found = arr.find((l) => l.id === lessonId)
    if (found) return found
  }
  return null
}
