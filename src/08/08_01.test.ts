export type UsersType = {
  [key: string] : {id: number, name: string}
}

export let users:UsersType

beforeEach(() => {
  users = {
    '101': {id: 101, name: "Sergei"},
    '123': {id: 123, name: 'petr'},
    '27': {id: 27, name: 'Ivan'},
    '89': {id: 89, name: 'Bob'}
  }
})

test('should update corresponding user', () => {
  users['101'].name = 'Sergo'

  expect(users['101'].name).toBe('Sergo')
  expect(users['101']).toEqual({id: 101, name: "Sergo"})
})

test('should delete corresponding user', () => {
  delete users['101']

  expect(users['101']).toBeUndefined()
})