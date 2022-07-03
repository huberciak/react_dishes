import React, { useState } from "react";
import { ComponentProps, Dish, DishType } from '../app.typedefs';

const Sandwich: React.FC<ComponentProps> = ({ update }) => {

const [selectedSandwichSlices, setSelectedSandwichSlices] = useState(0);

const addSandwichProps = () => {
  update({slices_of_bread: selectedSandwichSlices});
}

return (
  <div>
  <input
    type="number"
    name="no_of_slices"
    placeholder="Slices"
    min='0'
    onChange={(event) => {
      setSelectedSandwichSlices(+event.target.value);
    }}
  />
  {!!selectedSandwichSlices && <button onClick={addSandwichProps}>Submit</button>}
</div>
)
};

export default Sandwich;