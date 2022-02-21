import {MansType} from "./Destructuring";


export let props: MansType;

beforeEach(() => {
  props = {
    name: 'sergei',
    age: 32,
    lessons: [{title: '1', name: 'react'}, {title: '2', name: 'react'}, {title: '3', name: 'react'}],
    address: {
      street: {
        title: 'severnaya'
      }
    }
  }
})

test("", () => {

  // const age = props.age
  // const lessons = props.lessons

  const {age,lessons} = props
  const {title} = props.address.street

  expect(age).toBe(32)
  expect(lessons.length).toBe(2)
  expect(title).toBe('severnaya')

})

test("q", () => {
  // const l1 = props.lessons[0]
  // const l2 = props.lessons[1]

  const [l1, l2] = props.lessons
  const [ , , l3] = props.lessons
  const [, ls2, ...restLessons] = props.lessons

  expect(restLessons.length).toBe(1)
  expect(restLessons[0].title).toBe('3')
  expect(restLessons[0].name).toBe('react')

  expect(restLessons[0]).toStrictEqual({title: '3', name: 'react'})
})