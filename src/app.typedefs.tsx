export enum dishType{
  Pizza = "Pizza",
  Soup = "Soup",
  Sandwich = "Sandwich",
}

export interface Dish {
  id: number,
  name: string,
  type: dishType,
  preparation_time: string,
}

export interface Pizza extends Dish {
  no_of_slices: number,
  diameter: number,
}

export interface Soup extends Dish {
  spicyness: number,
}

export interface Sandwich extends Dish {
  slices_of_bread: number,
}