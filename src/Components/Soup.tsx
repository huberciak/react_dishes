import React, { useState } from "react";
import { Dish } from '../app.typedefs';

type Props = {
  dish: Dish,
}

const Soup: React.FC<Props> = ({ dish }) => {

const [selectedSoupSpicyness, setSelectedSoupSpicyness] = useState(0);

return (
  <div>
  <label htmlFor="spicyness">Spicyness</label>
  <input
    type="range"
    name="spicyness"
    min="0"
    max="10"
    step="1"
    value={selectedSoupSpicyness}
    onChange={(event) => {
      setSelectedSoupSpicyness(+event.target.value);
    }}
  />
  <span>{ selectedSoupSpicyness }</span>
  <div><button>Submit</button></div>
</div>
  );
};

export default Soup;