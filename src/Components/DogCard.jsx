import { FavoriteButton } from "./FavoriteButton";
import { TrashButton } from "./TrashButton";
import { UnfavoriteButton } from "./UnfavoriteButton";
import axios from "axios";

export const DogCard = ({
  dog: { name, image, description, id, isFavorite }, refetch
}) => {

  const toggleFav = () =>{
    const favToggleDog = {
      name: name,
      image: image,
      description: description,
      isFavorite: !isFavorite,
      id: id
    }
    axios.put(`http://localhost:3000/dogs/${id}`, favToggleDog);
    refetch();
  }

  const deleteDog = () =>{
    axios.delete(`http://localhost:3000/dogs/${id}`);
    refetch();
  }

  return (
    <div className="dog-card">
      {/* Choose which button to show depending on if dog is a favorite */}
      {isFavorite ? (
        <UnfavoriteButton onClick={toggleFav} dogId={id}/>
      ) : (
        <FavoriteButton onClick={toggleFav} dogId={id}/>
      )}
      

      {/* Use this button to delete a puppy :( */}
      <TrashButton disabled={false} onClick={deleteDog} />

      {/* Ignore this  */}
      {/* You can temporarily set a favorite overlay after a user favoritest a dog */}
      {/* Try making className "favorite-overlay active"*/}
      <div className="favorite-overlay ">{"<3"}</div>

      {/* Ignore this  */}
      {/* You can temporarily set a unfavorite overlay after a user favoritest a dog */}
      {/* Try making className "unfavorite-overlay active"*/}
      <div className="unfavorite-overlay">{"</3"}</div>

      {/* A Dogs Name */}
      <p className="dog-name">{name}</p>

      {/* A Dogs Image */}
      <img src={image} alt={name} />

      {/*  A Dogs description*/}
      <p className="dog-description">{description}</p>
    </div>
  );
};
