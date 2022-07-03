import  React, { useMemo, useState } from 'react';
import  Pizza  from './Components/Pizza.tsx';
import  Soup  from './Components/Soup.tsx';
import  Sandwich  from './Components/Sandwich.tsx';

import './App.css';
import { ComponentProps, Dish, DishType } from './app.typedefs.tsx';
import { BaseDish } from './app.typedefs';

const getComponentByType = (type: DishType): React.FC<ComponentProps> | undefined => {
  switch (type) {
    case DishType.Pizza:
      return Pizza;

    case DishType.Soup:
      return Soup;

    case DishType.Sandwich:
      return Sandwich;
    
    default:
      return undefined;
  }
}


const App: React.FC = () => {
  const [selectedDish, setSelectedDish] = useState<Dish>({});
  
  const dishes = useMemo(() => [DishType.Pizza, DishType.Soup, DishType.Sandwich], []);

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log('Created dish:', selectedDish);

    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(selectedDish),
    };
    
    fetch("https://frosty-wood-6558.getsandbox.com/dishes", requestOptions)
      .then(response => response.json())
      .catch(error => console.log(error));

    setSelectedDish({ name:'', type:0, preparation_time:'00:00:00'});

  }

  const Component = selectedDish && getComponentByType(selectedDish.type);

  const addProperties = (args: {}) => {
    setSelectedDish(prevState => {
      return {...prevState, ...args}
  })
  }


  return ( 
    <div className="App">
      <h1>Add dish form</h1>
      <form onSubmit={handleFormSubmit}>
        <div>
          <input
            type="text"
            name="name"
            value={selectedDish.name}
            placeholder="Dish name"
            onChange={(event) => {
              const val = event.target.value;
              setSelectedDish(prevState => {
                return {...prevState, name: val}
              })
            }}
          />
        </div>

        <div>
        <div>Preperation time</div>
        <input
          type="time"
          step="1"
          value={selectedDish.preparation_time}
          onChange={(event) => {
            const val = event.target.value;
            setSelectedDish(prevState => {
              return {...prevState, preparation_time: val}
            })
          }}
        />
        </div>

        <div>
          <select
            value={selectedDish.type}
            onChange={(event) => {
              const val = event.target.value;
              setSelectedDish(prevState => {
                return {...prevState, type: val}
              })
            }}
            >

            <option disabled value={0}>
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
      
       {selectedDish.type && <Component update={addProperties}/>}

      </form>
    </div>

  )
}

export default App;
