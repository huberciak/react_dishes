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
    <label className="label">Number of slices:</label>
      <input
        type="number"
        name="no_of_slices"
        className="input"
        placeholder="Slices"
        min="1"
        onChange={(event) => {
          setSelectedPizzaSlices(event.target.value);
        }}
      />
    </div>

    {selectedPizzaSlices && <div>
      <label className="label">Diameter:</label>
      <input
        type="number"
        step="0.01"
        name="diameter"
        className="input"
        placeholder="Diameter"
        min="0"
        onChange={(event) => {
          setSelectedPizzaDiameter(+event.target.value);
        }}
      />
    </div>
    }

    {!!(selectedPizzaDiameter && selectedPizzaSlices) &&
      <button className="button mt-2 is-success" onClick={addPizzaProps}>Submit</button>}
  </div>
  );
};

export default Pizza;