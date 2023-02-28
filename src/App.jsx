import "./App.css";
import { CreateDogForm } from "./Components/CreateDogForm";
import { Dogs } from "./Components/Dogs";
import { Section } from "./Components/Section";
import "./fonts/RubikBubbles-Regular.ttf";
import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [dogsList, setDogsList] = useState();
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [label, setLabel] = useState('Dogs:');

  const refetch = async () => {
    try {
      const response = await axios.get(
        `http://localhost:3000/dogs`
      );
      setDogsList(response.data);
      setError(null);
    } catch (err) {
      setError(err.message);
      setDogsList(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    refetch();
  }, []);

  return (
    <div className="App">
      <header>
        <h1>pup-e-picker</h1>
      </header>
      {error && (
        <div>{`There is a problem fetching the post data - ${error}`}</div>
      )}
      {!loading &&
        <Section label={label} setLabel={setLabel} dogs={dogsList}>
          {label !== 'Create A Dog:' ? 
          <Dogs label={label} dogsList={dogsList} refetch={refetch}/>
          : <CreateDogForm setLabel={setLabel} refetch={refetch}/>}
        </Section>
      }
    </div>
  );
}

export default App;
