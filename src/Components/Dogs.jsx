import { DogCard } from "./DogCard";
import { useState, useEffect } from "react";


export const Dogs = ({ label, dogsList }) => {
  const [dogsToDisplay, setDogsToDisplay] = useState(dogsList);
  //based on the btn clicked choose what dogs to display

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
        <DogCard dog={dog} key={dog.id} />
      ))}
    </>
  );
};


//Right now this is a static array, but you will need to fetch these dogs from the local database
// const dogs = [
//   {
//     name: "Thora",
//     image: "/src/assets/boxer.png",
//     description:
//       "South frictionless atque architectures Legacy reintermediate payment East",
//     isFavorite: false,
//     id: 0,
//   },
//   {
//     name: "Clifford",
//     image: "/src/assets/cowardly.png",
//     description:
//       "Buckinghamshire peal outmaneuver Cargo compressing utilize Southwest whiff",
//     isFavorite: false,
//     id: 1,
//   },
//   {
//     name: "Jeff",
//     image: "/src/assets/dalmation.png",
//     description: "Granite North connect Baht Metal North holistic deposit",
//     isFavorite: true,
//     id: 2,
//   },
//   {
//     name: "Jadon",
//     image: "/src/assets/blue-heeler.png",
//     description: "aspernatur transmit Underpass female North tan music",
//     isFavorite: true,
//     id: 3,
//   },
// ];
// Right now these dogs are constant, but in reality we should be getting these from our server
