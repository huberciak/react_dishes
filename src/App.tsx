import  React, { useMemo, useState } from 'react';
import  Pizza  from './Components/Pizza.tsx';
import  Soup  from './Components/Soup.tsx';
import  Sandwich  from './Components/Sandwich.tsx';
//import 'bulma';

import './App.css';
import { ComponentProps, Dish, DishType } from './app.typedefs.tsx';

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
  const [nameError, setNameError] = useState(false);
  const [timeError, setTimeError] = useState(false);
  
  const dishes = useMemo(() => [DishType.Pizza, DishType.Soup, DishType.Sandwich], []);
  const validation = () => {
    if (!selectedDish.name) {
      setNameError(true);
    } else {
      setNameError(false);
    }
    console.log("time", selectedDish.time===undefined)
    if (!selectedDish.time) {
      setTimeError(true);
    } else {
      setTimeError(false);
    }

    return (selectedDish.name && selectedDish.preparation_time 
      && selectedDish.type)
  }

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (validation()){
    console.log('Created dish:', selectedDish);

    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(selectedDish),
    };
    
    fetch("https://frosty-wood-6558.getsandbox.com/dishes", requestOptions)
      .then(response => response.json())
      .catch(error => console.log(error));

    setSelectedDish({ name:'', type:'', preparation_time:'00:00:00'});
    setNameError(false);
    setTimeError(false);

  }
  }

  const Component = selectedDish && getComponentByType(selectedDish.type);

  const addProperties = (args: {}) => {
    setSelectedDish(prevState => {
      return {...prevState, ...args}
  })
  }


  return ( 
    <div className="App">
      <h1 className="is-uppercase is-size-3">Add dish form</h1>
      <form onSubmit={handleFormSubmit} className="form box">
        <div>
        <label className="label">Name</label>
          <input
            type="text"
            name="name"
            className={`input ${nameError ? "is-danger": ""}`}
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
       {nameError && <p className="help is-danger">Enter valid name!</p>}

        <div>
        <label className="label">Preperation time: </label>
        <input
          type="time"
          step="1"
          className={`input ${timeError ? "is-danger": ""}`}
          value={selectedDish.preparation_time}
          onChange={(event) => {
            const val = event.target.value;
            setSelectedDish(prevState => {
              return {...prevState, preparation_time: val}
            })
          }}
        />
        </div>
        {timeError && <p className="help is-danger">Enter valid preparation time!</p>}

        <label className="label">Select dish type: </label>
        <div  className="select is-fullwidth is-normal">
          <select
            value={selectedDish.type}
            onChange={(event) => {
              const val = event.target.value;
              setSelectedDish(prevState => {
                return {...prevState, type: val}
              })
            }}
            >

            <option disabled value='' selected>
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
