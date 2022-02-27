import React, { useState } from 'react';
import axios from 'axios';
import { Wrapper, Row, Header, Form, Search, Button, } from './components/styled/index';
import JokeItem from './components/JokeItem';
import { Joke } from './common/types';

const BASE_URL = "https://v2.jokeapi.dev/joke/Any";

function App() {
  const [search, setSearch] = useState("");
  const [error, setError] = useState(false);
  const [jokes, setJokes] = useState<Joke[]>([]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const getJokes = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const ENDPOINT = `${BASE_URL}?contains=${search}&amount=10`;
    const { data } = await axios.get(ENDPOINT);
    
    if(data.error) {
      setError(true);
      setJokes([]);
    } else {
      setError(false);
      setJokes(data.jokes);
    }

    setSearch("");
  }

  return (
    <div>
      <Wrapper>
        <Row>
          <Header>Joker</Header>
        </Row>
        <Form onSubmit={getJokes}>
          <Search 
            type="text" 
            placeholder='Search..' 
            value={search} 
            onChange={handleChange} 
          />
          <Button type="submit">Submit</Button>
        </Form>
        <div>
          {error && <p>Sorry, no jokes found.</p>}
          {jokes.length > 0 && 
            // @ts-ignore
            jokes.map(joke => <JokeItem key={joke.id} joke={joke} />)}
        </div>
      </Wrapper>
    </div>
  );
}

export default App;
