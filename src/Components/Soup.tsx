import React, { useState } from "react";
import { ComponentProps, Dish, DishType } from '../app.typedefs';

const Soup: React.FC<ComponentProps> = ({ update }) => {

const [selectedSoupSpicyness, setSelectedSoupSpicyness] = useState(0);

const addSoupProps = () => {
  update({spicyness: selectedSoupSpicyness});
}

return (
  <div>
  <label className="label">Spicyness</label>
  <input
    type="range"
    name="spicyness"
    className="slider"
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
    <button className="button mt-2 is-success" onClick={addSoupProps}>Submit</button>
  </div>
</div>
  );
};

export default Soup;