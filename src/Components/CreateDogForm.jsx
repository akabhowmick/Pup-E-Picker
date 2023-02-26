import { useState } from "react";
import { dogPictures } from "../assets/dog-pictures";
import axios from "axios";

export const CreateDogForm = ({ addDog, setLabel, setAddedDog}) => {
  const [selectedImage, setSelectedImage] = useState(dogPictures.BlueHeeler);
  const [dogName, setDogName] = useState('');
  const [dogDesc, setDogDesc] = useState('');

  return (
    <form
      action=""
      id="create-dog-form"
      onSubmit={(e) => {
        e.preventDefault();
        addDog = {
          name: dogName,
          image: selectedImage,
          description: dogDesc,
          isFavorite: false,
        }
        axios.post('http://localhost:3000/dogs', addDog);
        setLabel('Dogs:');
        setAddedDog(addDog);
      }}
    >
      <h4>Create a New Dog</h4>
      <label htmlFor="name">Dog Name</label>
      <input type="text" onChange={(e) => {setDogName(e.target.value);}}/>
      <label htmlFor="description">Dog Description</label>
      <textarea name="" id="" cols="80" rows="10" onChange={(e) => {setDogDesc(e.target.value);}}></textarea>
      <label htmlFor="picture">Select an Image</label>
      <select
        id=""
        onChange={(e) => {
          setSelectedImage(e.target.value);
        }}
      >
        {Object.entries(dogPictures).map(([label, pictureValue]) => {
          return <option key={pictureValue} value={pictureValue}>{label}</option>;
        })}
      </select>
      <input type="submit" value="submit" />
    </form>
  );
};
