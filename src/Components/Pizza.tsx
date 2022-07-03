import React, { useState } from "react";
import { BaseDish, ComponentProps, Dish, DishType } from '../app.typedefs';


const Pizza: React.FC<ComponentProps> = ({ update }) => {
  
const [selectedPizzaSlices, setSelectedPizzaSlices] = useState('');
const [selectedPizzaDiameter, setSelectedPizzaDiameter] = useState(0);

const addPizzaProps = () => {
  update({no: selectedPizzaSlices, diameter: selectedPizzaDiameter});
}

return (
  <div>
    <div>
      <input
        type="number"
        name="no_of_slices"
        placeholder="Slices"
        onChange={(event) => {
          setSelectedPizzaSlices(event.target.value);
        }}
      />
    </div>

    {selectedPizzaSlices && <div>
      <input
        type="float"
        name="diameter"
        placeholder="Diameter"
        onChange={(event) => {
          setSelectedPizzaDiameter(+event.target.value);
        }}
      />
    </div>
    }

    {!!(selectedPizzaDiameter && selectedPizzaSlices) &&
      <button onClick={addPizzaProps}>Submit</button>}
  </div>
  );
};

export default Pizza;