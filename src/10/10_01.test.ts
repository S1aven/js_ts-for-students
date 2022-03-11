import {
  addNewBooksToUser,
  makeHairStyle,
  moveUser, removeBook, updateBook, updateCompany, updateCompany2,
  upgradeUserLaptop,
  UserType,
  UserWithBooksType,
  UserWithLaptopType, WithCompaniesType
} from "./10_01";



test('reference type test', () => {
  let user: UserType = {
    name: 'Sergo',
    hair: 32,
    address: {
      title: 'Moscow'
    }
  }

  const awesomeUser = makeHairStyle(user, 2)
  awesomeUser.address.title = 'minsk'

  expect(awesomeUser.hair).toBe(16)
  expect(user.hair).toBe(32)
  expect(awesomeUser.address.title).toBe(user.address.title)
})

test('change address', () => {
  let user: UserWithLaptopType = {
    name: 'Sergo',
    hair: 32,
    address: {
      title: 'Moscow'
    },
    laptop: {
      title: 'asus'
    }
  }

  const movedUser = moveUser(user, 'Minsk')

  expect(user).not.toBe(movedUser)
  expect(user.address).not.toBe(movedUser.address)
  expect(user.laptop).toBe(movedUser.laptop)
  expect(movedUser.address.title).toBe('Minsk')
})

test('upgrade laptop to macbook', () => {
  let user: UserWithLaptopType = {
    name: 'Sergo',
    hair: 32,
    address: {
      title: 'Moscow'
    },
    laptop: {
      title: 'asus'
    }
  }

  const userCopy = upgradeUserLaptop(user, 'macbook')

  expect(user).not.toBe(userCopy)
  expect(user.address).toBe(userCopy.address)
  expect(user.laptop).not.toBe(userCopy.laptop)
  expect(userCopy.laptop.title).toBe('macbook')
  expect(user.laptop.title).toBe('asus')
})

test('add news books to user', () => {
  let user: UserWithBooksType = {
    name: 'Sergo',
    hair: 32,
    address: {
      title: 'Moscow'
    },
    laptop: {
      title: 'asus'
    },
    books: ['css', 'html', 'react']
  }

  const userCopy = addNewBooksToUser(user, ['ts', 'rest api'])

  expect(user).not.toBe(userCopy)
  expect(user.address).toBe(userCopy.address)
  expect(user.laptop).toBe(userCopy.laptop)
  expect(user.books).not.toBe(userCopy.books)
  expect(userCopy.books[3]).toBe('ts')
  expect(userCopy.books[4]).toBe('rest api')
})

test('update js to ts', () => {
  let user: UserWithBooksType = {
    name: 'Sergo',
    hair: 32,
    address: {
      title: 'Moscow'
    },
    laptop: {
      title: 'asus'
    },
    books: ['css', 'html', 'js', 'react']
  }

  const userCopy = updateBook(user, 'js', 'ts')

  expect(user).not.toBe(userCopy)
  expect(user.address).toBe(userCopy.address)
  expect(user.laptop).toBe(userCopy.laptop)
  expect(user.books).not.toBe(userCopy.books)
  expect(userCopy.books[2]).toBe('ts')
  expect(userCopy.books.length).toBe(4)
})

test('remove js book', () => {
  let user: UserWithBooksType = {
    name: 'Sergo',
    hair: 32,
    address: {
      title: 'Moscow'
    },
    laptop: {
      title: 'asus'
    },
    books: ['css', 'html', 'js', 'react']
  }

  const userCopy = removeBook(user, 'js')

  expect(user).not.toBe(userCopy)
  expect(user.address).toBe(userCopy.address)
  expect(user.laptop).toBe(userCopy.laptop)
  expect(user.books).not.toBe(userCopy.books)
  expect(userCopy.books[2]).toBe('react')
  expect(userCopy.books.length).toBe(3)
})

test('update company', () => {
  let user: UserWithBooksType & WithCompaniesType = {
    name: 'Sergo',
    hair: 32,
    address: {
      title: 'Moscow'
    },
    laptop: {
      title: 'asus'
    },
    books: ['css', 'html', 'js', 'react'],
    companies: [
      {id: 1, title: 'Епам'},
      {id: 2, title: 'it_incubator'}
    ]
  }

  const userCopy = updateCompany(user, 1, 'Epam')

  expect(user).not.toBe(userCopy)
  expect(user.address).toBe(userCopy.address)
  expect(user.laptop).toBe(userCopy.laptop)
  expect(user.books).toBe(userCopy.books)
  expect(userCopy.companies[0]).not.toBe(user.companies[0])
  expect(userCopy.companies[0].title).toBe('Epam')
})

test('update compan', () => {
  let user: UserWithBooksType = {
    name: 'Sergo',
    hair: 32,
    address: {
      title: 'Moscow'
    },
    laptop: {
      title: 'asus'
    },
    books: ['css', 'html', 'js', 'react'],
  }

  let companies = {
    'Sergo': [{id: 1, title: 'Епам'}, {id: 2, title: 'it_incubator'}],
    'Artem': [{id: 1, title: 'Епам'}]
  }

  let copy = updateCompany2(companies, 'Artem', 1, 'Epam')

  expect(copy['Sergo']).not.toBe(companies['Sergo'])
  expect(copy['Artem']).not.toBe(companies['Artem'])
  expect(copy['Sergo'][0].title).toBe('Epam')
})