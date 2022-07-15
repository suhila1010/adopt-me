import { FunctionComponent } from "react";
import { Pet as PetType } from "./APIResponsesTypes";
import Pet from "./pet";

const Results: FunctionComponent<{ pets: PetType[] }> = ({ pets }) => {
  return (
    <div>
      {!pets.length ? (
        <h1>No Pets Here</h1>
      ) : (
        pets.map((pet) => (
          <Pet
            name={pet.name}
            animal={pet.animal}
            breed={pet.breed}
            key={pet.id}
            images={pet.images}
            location={`${pet.city}, ${pet.state}`}
            id={pet.id}
          />
        ))
      )}
    </div>
  );
};
export default Results;
