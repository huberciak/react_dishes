import  React, { useState } from 'react';
import  Pizza  from './Components/Pizza.tsx';
import  Soup  from './Components/Soup.tsx';
import  Sandwich  from './Components/Sandwich.tsx';

import './App.css';
import { type } from '@testing-library/user-event/dist/type';
import { Dish } from './app.typedefs';
//import { dishType } from './app.typedefs';

export enum dishType{
  Pizza = "Pizza",
  Soup = "Soup",
  Sandwich = "Sandwich",
}

const dishes = [dishType.Pizza, dishType.Soup, dishType.Sandwich];

const App: React.FC = () => {
  const [selectedDishName, setSelectedDishName] = useState('');
  const [selectedDishTime, setSelectedDishTime] = useState('');
  const [selectedDishType, setSelectedDishType] = useState('' as dishType);

  const ID = 1;

  const selectedDish: Dish = {
    id: ID,
    name: selectedDishName,
    preparation_time: selectedDishTime,
    type: selectedDishType,
  }

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  }

  return ( 
    <div className="App">
      <h1>Add dish form</h1>
      <form onSubmit={handleFormSubmit}>
        <div>
          <input
            type="text"
            name="name"
            placeholder="Dish name"
            onChange={(event) => {
              setSelectedDishName(event.target.value);
            }}
          />
        </div>

        <div>
        <div>Preperation time</div>
        <input
          type="time"
          step="1"
          onChange={(event) => {
            setSelectedDishTime(event.target.value);
          }}
        />
        </div>

        <div>
          <select
            value={selectedDishType}
            onChange={(event) => {
              setSelectedDishType(event.target.value as dishType)
            }}>

            <option value="" disabled>
              Choose a dish
            </option>

            {dishes.map((dish, index) => (
              <option
                key={index+1}
              >
                {dish}
              </option>
            ))}
          </select>
        </div>

       {selectedDishType === dishType.Pizza && <Pizza dish={selectedDish}/>}

        {selectedDishType === dishType.Soup && <Soup dish={selectedDish}/>}

        {selectedDishType === dishType.Sandwich && <Sandwich dish={selectedDish}/>}
      </form>
    </div>
  )
}

export default App;
