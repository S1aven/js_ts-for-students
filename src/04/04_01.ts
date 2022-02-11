const ages = [18, 20, 22, 100, 14]

// export const predicate = (age: number) => {
//   return age > ;
// }

export const oldAges = (age: number) => {
  return age > 90
}
console.log(oldAges)

export type courseType = {
  title: string
  price: number
}

const courses: Array<courseType> = [
  {title: 'css', price: 110},
  {title: 'js', price: 200},
  {title: 'react', price: 150},
]

const chipPredicate = (course: courseType) => {
  return course.price < 160
}

const chipCourses = [
  {title: 'css', price: 110},
  {title: 'react', price: 150}
]