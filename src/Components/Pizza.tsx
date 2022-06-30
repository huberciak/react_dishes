import React, { useState } from "react";
import { Dish } from '../app.typedefs';

type Props = {
  dish: Dish,
}

const Pizza: React.FC<Props> = ({ dish }) => {
  
const [selectedPizzaSlices, setSelectedPizzaSlices] = useState('');
const [selectedPizzaDiameter, setSelectedPizzaDiameter] = useState(0);

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
      <button>Submit</button>}
  </div>
  );
};

export default Pizza;