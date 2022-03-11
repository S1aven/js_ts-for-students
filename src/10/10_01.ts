export type UserType = {
  name: string
  hair: number
  address: { title: string }
}

export type LaptopType = {
  title: string
}

export type UserWithLaptopType = UserType & {
  laptop: LaptopType
}

export type UserWithBooksType = UserWithLaptopType & {
  books: Array<string>
}

type CompanyType = { id: number, title: string };
export type WithCompaniesType = {
  companies: Array<CompanyType>
}

export function makeHairStyle(u: UserType, power: number) {
  const copy = {
    ...u,
    hair: u.hair / power
  }

  // copy.hair = u.hair / power
  return copy
}

export function moveUser(u: UserWithLaptopType, city: string) {
  return {
    ...u,
    address: {...u.address, title: city}
  }
}

export function upgradeUserLaptop(user: UserWithLaptopType, title: string) {
  return {
    ...user,
    laptop: {...user.laptop, title: title}
  }
}

export function addNewBooksToUser(u: UserWithBooksType, newBooks: Array<string>) {
  return {
    ...u,
    books: [...u.books, ...newBooks]
  }
}

export const updateBook = (u: UserWithBooksType, oldBook: string, newBook: string) => ({
  ...u,
  books: u.books.map(e => e === oldBook ? newBook : e)
})

export const removeBook = (u: UserWithBooksType, book: string) => ({
  ...u,
  books: u.books.filter(e => e !== book)
})

export const updateCompany = (u: UserWithBooksType & WithCompaniesType, id: number, company: string) => ({
  ...u,
  companies: u.companies.map(e => e.id === id ? {...e, title: company} : e)
})

export const updateCompany2 = (companies: { [key:string]: Array<CompanyType> }, userName: string, id: number, newTitle: string) => {
  let companyCopy = {...companies}
  companyCopy[userName] = companyCopy[userName].map(e => e.id === id ? {...e, title: newTitle} : e)

  return companyCopy
}