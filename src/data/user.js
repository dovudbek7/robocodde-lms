const delay = (ms) => new Promise((r) => setTimeout(r, ms))

export const mockUser = {
  id: 1,
  name: 'Dovudbek Xabibullayev',
  email: 'dovudbek@robocodde.uz',
  phone: '+998 90 123 45 67',
  city: 'Toshkent',
  joinDate: '2024-09-01',
  avatar: 'D',
  role: "O'quvchi",
  streak: 7,
  notifications: true,
  language: "O'zbekcha",
}

export async function fetchUser() {
  await delay(150)
  return mockUser
}
