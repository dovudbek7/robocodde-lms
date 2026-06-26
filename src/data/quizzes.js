export const quizzes = {
  'react-intro': [
    {
      id: 1,
      question: 'React qaysi kompaniya tomonidan yaratilgan?',
      options: ['Facebook (Meta)', 'Google', 'Microsoft', 'Twitter'],
      correct: 0,
      explanation: 'React 2011 yilda Facebook kompaniyasida Jordan Walke tomonidan yaratilgan.',
    },
    {
      id: 2,
      question: 'React bu nima?',
      options: ['Framework', 'JavaScript kutubxonasi', 'CSS preprocessor', 'Database'],
      correct: 1,
      explanation: "React — JavaScript kutubxonasi (library), framework emas. Bu muhim farq.",
    },
    {
      id: 3,
      question: 'React qaysi texnologiyadan foydalanadi?',
      options: ['Real DOM', 'Virtual DOM', 'Shadow DOM', 'HTML DOM'],
      correct: 1,
      explanation: "React Virtual DOM dan foydalanadi — bu samaradorlikni oshiradi.",
    },
    {
      id: 4,
      question: 'React da komponentlarni nomlashda qaysi uslub ishlatiladi?',
      options: ['camelCase', 'snake_case', 'PascalCase', 'kebab-case'],
      correct: 2,
      explanation: 'React komponentlari PascalCase bilan nomlanadi: MyComponent, UserCard kabi.',
    },
  ],
  'js-basics': [
    {
      id: 1,
      question: "Qaysi kalit so'z o'zgartirib bo'lmaydigan o'zgaruvchi e'lon qiladi?",
      options: ['var', 'let', 'const', 'static'],
      correct: 2,
      explanation: "const bilan e'lon qilingan o'zgaruvchiga qayta qiymat berib bo'lmaydi.",
    },
    {
      id: 2,
      question: 'typeof "salom" nima qaytaradi?',
      options: ['"text"', '"string"', '"char"', '"word"'],
      correct: 1,
      explanation: 'typeof operator string uchun "string" qaytaradi.',
    },
    {
      id: 3,
      question: 'Qaysi qiymat boolean emas?',
      options: ['true', 'false', '0', 'null'],
      correct: 2,
      explanation: "0 — bu number, boolean emas. Boolean faqat true yoki false bo'ladi.",
    },
  ],
  'html-basics': [
    {
      id: 1,
      question: "HTML ning to'liq nomi nima?",
      options: ['Hyper Transfer Markup Language', 'HyperText Markup Language', 'High Text Machine Learning', 'HyperText Making Links'],
      correct: 1,
      explanation: 'HTML — HyperText Markup Language.',
    },
    {
      id: 2,
      question: 'Sarlavha uchun qaysi teg ishlatiladi?',
      options: ['<title>', '<header>', '<h1>', '<head>'],
      correct: 2,
      explanation: '<h1> dan <h6> gacha sarlavha teglari. <h1> eng katta.',
    },
  ],
}

export async function fetchQuiz(lessonId) {
  await new Promise((r) => setTimeout(r, 200))
  return quizzes[lessonId] ?? []
}
