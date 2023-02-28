export const Section = ({ label, children, dogs, setLabel }) => {
  const favoriteDogCount = dogs.filter(dog=>dog.isFavorite).length;
  const unfavoriteDogCount = dogs.length - favoriteDogCount;
  
  const onClickSelector = (selectorClicked) => {
    if(label === 'Dogs:' || label !== selectorClicked){
      setLabel(selectorClicked);
    } else {
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
          <div onClick={() => onClickSelector('Favorited Dogs:')} className={`selector ${label==='favorited' ? 'active' : ''} `}>
            favorited ( {favoriteDogCount} )
          </div>

          {/* This should display the unfavorited count */}
          <div onClick={() => onClickSelector('Unfavorited Dogs:')} className={`selector ${label==='unfavorited' ? 'active' : ''}`}>unfavorited ( {unfavoriteDogCount} )</div>
          <div onClick={() => onClickSelector('Create A Dog:')} className={`selector ${label==='createDog' ? 'active' : ''}`}>create dog</div>
        </div>
      </div>
      {children}
    </section>
  );
};
