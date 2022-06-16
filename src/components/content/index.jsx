import { useState } from "react";
import { useContext } from "react";
import { DefaultContext } from "../../Context";

import swCharacters from "../../data/characters.json";
import swPlanets from "../../data/planets.json";
import swStarships from "../../data/starships.json";

import { ItemSpisok } from "../sw-item-spisok";

import { ItemLists } from "../sw-item-lists";

export const Content = ({ light}) => {
  const [selector, setSelector] = useState("Characters");
  const {lightTheme} = useContext(DefaultContext)

  const handleSelectorChange = (event) => {
    setSelector(event.target.value);
  };

  return (
    <div className='content-layout'>
      <button className='select-item' onClick={()=>lightTheme()}>
        Change Theme
        </button>
      <select
        value={selector}
        placeholder="Choose your path"
        className="select-item"
        onChange={handleSelectorChange}
      >
        <option>Characters</option>
        <option>Planets</option>
        <option>Starships</option>
      </select>

      {selector === "Characters" &&
        swCharacters.map((character) => (
          <ItemLists light={light} key={character.name} item={character} type="chars">
            <ItemSpisok>gender: {character.gender}</ItemSpisok>
            <ItemSpisok>birthday: {character.birth_year}</ItemSpisok>
          </ItemLists>
        ))}

      {selector === "Planets" &&
        swPlanets.map((planet) => (
          <ItemLists key={planet.name} item={planet} type="planets">
            <ItemSpisok>Rotation Period: {planet.rotation_period}</ItemSpisok>
            <ItemSpisok>Orbital Period: {planet.orbital_period}</ItemSpisok>
          </ItemLists>
        ))}
        {selector === "Starships" &&
        swStarships.map((starships) => (
          <ItemLists key={starships.name} item={starships} type="starshipss">
            <ItemSpisok>Model: {starships.model}</ItemSpisok>
            <ItemSpisok>Manufacturer: {starships.manufacturer}</ItemSpisok>
          </ItemLists>
        ))}
    </div>
  );
};
