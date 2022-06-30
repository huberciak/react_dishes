import React, { useState } from "react";
import { Dish } from '../app.typedefs';

type Props = {
  dish: Dish,
}

const Sandwich: React.FC<Props> = ({ dish }) => {

const [selectedSandwichSlices, setSelectedSandwichSlices] = useState(0);

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
  {!!selectedSandwichSlices && <button>Submit</button>}
</div>
)
};

export default Sandwich;