export enum DishType {
  Pizza = "Pizza",
  Soup = "Soup",
  Sandwich = "Sandwich",
}

export interface BaseDish {
  id: number,
  name: string,
  type: DishType | undefined,
  preparation_time: string,
}

export interface Pizza extends BaseDish {
  no_of_slices: number,
  diameter: number,
}

export interface Soup extends BaseDish {
  spicyness: number,
}

export interface Sandwich extends BaseDish {
  slices_of_bread: number,
}

export type Dish = Pizza | Sandwich | Soup;

export type ComponentProps = {
  update: (args: {}) => void;
}
