import {StudentType} from "../02/02_01";
import {addSkill, doesStudentLiveIn, makeStudentActive} from "./03";


let student: StudentType;

beforeEach(() => {
  student = {
    id: 1,
    name: "Sergei",
    age: 31,
    isActive: false,
    address: {
      streetTitle: "Surganova 2",
      city: {
        title: "Minsk",
        countryTitle: "Belarus"
      }
    },
    technologies: [
      {
        id: 1,
        title: "HTML",
      },
      {
        id: 2,
        title: "CSS",
      },
      {
        id: 3,
        title: "React",
      },
    ]
  }
})

test("new tech skill should be added to student", () => {
  expect(student.technologies.length).toBe(3)
  addSkill(student, "JS");
  expect(student.technologies.length).toBe(4)
})

test("student should be made active", () => {
  expect(student.isActive).toBe(false)

  makeStudentActive(student)

  expect(student.isActive).toBe(true)
})

test("does student live in city", () => {
  let result1 = doesStudentLiveIn(student, "Moscow")
  let result2 = doesStudentLiveIn(student, "Minsk")

  expect(result1).toBe(false)
  expect(result2).toBe(true)
})