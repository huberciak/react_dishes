import React, { useState } from "react";
import { ComponentProps, Dish, DishType } from '../app.typedefs';

const Soup: React.FC<ComponentProps> = ({ update }) => {

const [selectedSoupSpicyness, setSelectedSoupSpicyness] = useState(0);

const addSoupProps = () => {
  update({spicyness: selectedSoupSpicyness});
}

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

  <div>
    <button onClick={() => addSoupProps()}>Submit</button>
  </div>
</div>
  );
};

export default Soup;