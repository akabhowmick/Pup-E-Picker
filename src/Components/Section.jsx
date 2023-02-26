import { useState, useEffect } from "react";
// import { CreateDogForm } from "./CreateDogForm";
// import { Dogs } from "./Dogs";

export const Section = ({ label, children, dogs, setLabel }) => {
  const [favoriteDogCount, setFavoriteDogCount ] = useState(0);
  const [unfavoriteDogCount, setUnfavoriteDogCount]= useState(0);
  const [activeSelector, setActiveSelector] = useState('');
  
  useEffect(()=>{
    let favCount = 0;
    let unfavCount = 0;
    dogs.forEach(dog => {
      if(dog.isFavorite){
        favCount++;
      } else{
        unfavCount++;
      }
    });
    setFavoriteDogCount(favCount);
    setUnfavoriteDogCount(unfavCount);
  }, [dogs]);

  const onClickSelector = (selectorClicked) => {
    if(activeSelector === '' || activeSelector !== selectorClicked){
      setActiveSelector(selectorClicked);
      setLabel(selectorClicked);
    } else {
      setActiveSelector('');
      setLabel('Dogs:');
    }
  }

  return (
    <section>
      <div className="container-header">
        <div className="container-label">{label}</div>
        <div className="selectors">
          {/* Add the class 'active' to any selector in order to make it's color change */}
          {/* This should display the favorited count */}
          <div onClick={() => onClickSelector('Favorited Dogs:')} className={`selector ${activeSelector==='favorited' ? 'active' : ''} `}>
            favorited ( {favoriteDogCount} )
          </div>

          {/* This should display the unfavorited count */}
          <div onClick={() => onClickSelector('Unfavorited Dogs:')} className={`selector ${activeSelector==='unfavorited' ? 'active' : ''}`}>unfavorited ( {unfavoriteDogCount} )</div>
          <div onClick={() => onClickSelector('Create A Dog:')} className={`selector ${activeSelector==='createDog' ? 'active' : ''}`}>create dog</div>
        </div>
      </div>
      {children}
      {/* {activeSelector !== 'createDog' ? 
        <Dogs label={"All Dogs"} dogsList={dogsToDisplay}/>
       : <CreateDogForm />} */}
    </section>
  );
};
