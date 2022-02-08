import {StudentType} from "../02/02_01";
import {CityType, GovernmentBuildingsType, HousesType} from "../02/02_02";


export const addSkill = (student: StudentType, skill: string) => {
  student.technologies.push({
    id: new Date().getTime(),
    title: skill
  })
}

export function makeStudentActive(s: StudentType) {
  s.isActive = true;
}

export const doesStudentLiveIn = (s: StudentType, cityName: string) => {
  return s.address.city.title === cityName
}

export function addMoneyToBudget(building: GovernmentBuildingsType, budget: number) {
  building.budget += budget
}

export const repairHouses = (houseType: HousesType) => {
  houseType.repaired = true
}

export function toFireStaff(building: GovernmentBuildingsType, staffCountToFire: number) {
  return building.staffCount -= staffCountToFire
}

export function toHireStaff(building: GovernmentBuildingsType, staffCountToHire: number) {
  return building.staffCount += staffCountToHire
}

export function createMessage(props: CityType) {
  return `Hello ${props.title} citizens. I want you be happy. All ${props.citizensNumber} men.`
}