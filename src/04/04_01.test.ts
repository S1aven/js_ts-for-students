import {courseType} from "./04_01";

test('should be old men older then 90', () => {
  const ages = [18, 20, 22, 100, 14]

  // const predicate = (age: number) => {
  //   return age > 90
  // }

  const oldAges = ages.filter(age => age > 90)

  expect(oldAges.length).toBe(1)
  expect(oldAges[0]).toBe(100)
})

test('should take courses chipper 160', () => {
  const courses = [
    {title: 'css', price: 110},
    {title: 'js', price: 200},
    {title: 'react', price: 150},
  ]

  // const chipPredicate = (course: courseType) => {
  //   return course.price < 160
  // }

  const chipCourses = courses.filter(course => course.price < 160)

  expect(chipCourses.length).toBe(2)
  expect(chipCourses[0].title).toBe('css')
  expect(chipCourses[1].title).toBe('react')
})

test('get only completed tasks', () => {
  const tasks = [
    {id: 1, title: 'bread', isDone: false},
    {id: 2, title: 'milk', isDone: true},
    {id: 3, title: 'salt', isDone: false},
    {id: 4, title: 'sugar', isDone: true},
  ]

  const completedTasks = tasks.filter(t => t.isDone)

  expect(completedTasks.length).toBe(2)
  expect(completedTasks[0].title).toBe('milk')
  expect(completedTasks[1].title).toBe('sugar')
})