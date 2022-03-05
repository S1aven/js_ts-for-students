export type UsersType = {
  [key: string] : {id: number, name: string}
}

export const users:UsersType = {
  '101': {id: 101, name: "Sergei"},
  '123': {id: 123, name: 'petr'},
  '27': {id: 27, name: 'Ivan'},
  '89': {id: 89, name: 'Bob'}
}

export const usersArray = [
  {id: 101, name: "Sergei"},
  {id: 123, name: 'petr'},
  {id: 27, name: 'Ivan'},
  {id: 89, name: 'Bob'}
]

const user = {id: 222, name: 'vasya'}

users[user.id] = user

delete users[user.id]