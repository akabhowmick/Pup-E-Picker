import { DogCard } from "./DogCard";
import { useState, useEffect } from "react";


export const Dogs = ({ label, dogsList, refetch }) => {
  const [dogsToDisplay, setDogsToDisplay] = useState(dogsList);

  useEffect(()=>{
    if(label==='Favorited Dogs:'){
      let favDogs = [];
      dogsList.forEach(dog => {
        if(dog.isFavorite){
          favDogs.push(dog);
      }});
      setDogsToDisplay(favDogs);
    }else if(label==='Unfavorited Dogs:'){
      let unFavDogs = [];
      dogsList.forEach(dog => {
        if(!dog.isFavorite){
          unFavDogs.push(dog);
      }});     
      setDogsToDisplay(unFavDogs);
    } else{
      setDogsToDisplay(dogsList);
    }
  }, [label, dogsList]);

  return (
    <>
      {dogsToDisplay.map((dog) => (
        <DogCard dog={dog} key={dog.id} refetch={refetch} />
      ))}
    </>
  );
};

