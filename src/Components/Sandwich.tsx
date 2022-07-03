import React, { useState } from "react";
import { ComponentProps, Dish, DishType } from '../app.typedefs';

const Sandwich: React.FC<ComponentProps> = ({ update }) => {

const [selectedSandwichSlices, setSelectedSandwichSlices] = useState(0);

const addSandwichProps = () => {
  update({slices_of_bread: selectedSandwichSlices});
}

return (
  <div>
  <div>
    <label className="label">No of bread slices: </label>
    <input
      type="number"
      name="no_of_slices"
      className="input"
      placeholder="Bread slices"
      min="1"
      onChange={(event) => {
        setSelectedSandwichSlices(+event.target.value);
      }}
    />
  </div>
  {!!selectedSandwichSlices && 
  <div>
    <button className="button mt-2 is-success" onClick={addSandwichProps}>Submit</button>
  </div>}
</div>
)
};

export default Sandwich;