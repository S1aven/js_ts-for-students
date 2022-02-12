import {GovernmentBuildingsType, HousesType} from "../02/02_02";

export const getStreetsTitlesGovermentsBuildings = (buildings: Array<GovernmentBuildingsType>) => {
  return buildings.map(b => b.address.street.title)
}

export const getStreetsTitlesOfHouses = (houses: Array<HousesType>) => {
  return houses.map(h => h.address.street.title)
}

export function createMessage(houses: Array<HousesType>) {
  return houses.map(h => `Hello guys from ${h.address.street.title}`)
}