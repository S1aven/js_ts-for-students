export type UserType = {
  name: string
  age: number
  address?: {
    title: string
  }
}

function icreaseAge(u: UserType) {
  u.age++
}

test('reference type test', () => {

  const user = {
    name: 'sergo',
    age: 34,
    address: {
      title: 'moscow'
    }
  }

  icreaseAge(user)

  expect(user.age).toBe(35)

  const superman = user
  superman.age = 1000

  expect(user.age).toBe(1000)
})

test('array reference test', () => {

  const users = [
    {
      name: 'sergo',
      age: 34
    },

    {
      name: 'bob',
      age: 24
    },
  ]

  const admins = users
  admins.push({name: 'fedr', age: 17})

  expect(users[2].age).toBe(17)
})

test('value type test', () => {

  let usersCount = 100
  let adminsCount = usersCount

  adminsCount = adminsCount + 1

  expect(adminsCount).toBe(101)
})

test('reference type test', () => {
  const address = {
    title: 'moscow'
  }

  const user = {
    name: 'sergo',
    age: 34,
    address: {
      title: address
    }
  }

  const user2 = {
    name: 'petr',
    age: 34,
    address: address,
  }

  address.title = 'moscow city'

  expect(user.address.title).toBe('moscow city')
})

test('reference type array test', () => {
  const address = {
    title: 'moscow'
  }

  const user = {
    name: 'sergo',
    age: 34,
    address: {
      title: address
    }
  }

  const user2 = {
    name: 'petr',
    age: 34,
    address: address,
  }

  const users = [user, user, {name: 'ivan', age: 45, address: address}]

  const admins = [user, user2]
  admins[0].name = 'Sergei'

  expect(users[0].name).toBe('Sergei')
})

test('sort array test', () => {
  const letters = ['b', 'a', 'e', 'd']
  // letters.sort()
  pasportists(letters)

  expect(letters).toEqual(['b', 'a', 'e', 'd'])
})

function pasportists(letters: any) {
  const copy = [...letters].sort()
  console.log(copy)
}
