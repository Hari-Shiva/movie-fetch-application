import React, { useState,useCallback } from 'react';


import {AppContainer,
  Navbar,
  Logo, 
 NavItems, 
 NavItem,
HeroSection,
Title,
SearchContainer,
SearchInput,
SearchButton,
ResultSection,
MovieCard,
MovieImage,
MovieTitle,
MovieInfo,
ErrorMessage, Loadingtxt} from './style'


function App() {
  const [query, setQuery] = useState('');
  const [result, setResult] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchDogImage = useCallback(async () => {
    try {
      const response = await fetch('https://dog.ceo/api/breeds/image/random');
      const data = await response.json();
      return data.message;
    } catch (error) {
      console.error('Error fetching dog image:', error);
      return 'https://via.placeholder.com/800x600?text=No+Image+Available';
    }
  }, []);

  const handleSearch = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);
    setResult(null);

    if(query === ""){
      setError("Invalid Input");
    }

    const encodedQuery = encodeURIComponent(query);
    const url = `https://openlibrary.org/search.json?q=${encodedQuery}&limit=1`;
    setQuery("");
    try {
      const [bookResponse, dogImage] = await Promise.all([
        fetch(url, { timeout: 10000 }),
        fetchDogImage()
      ]);

      if (!bookResponse.ok) {
        throw new Error(`HTTP error! status: ${bookResponse.status}`);
      }

      const bookData = await bookResponse.json();

      if (bookData.docs && bookData.docs.length > 0) {
        console.log(bookData);
        setResult({ ...bookData.docs[0], dogImage });
      } else {
        setError('No results found. Please try a different search.');
      }
    } catch (error) {
      console.error('Error fetching data:', error);
      setError('Failed to fetch data. Please try again later.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <AppContainer>
      <Navbar>
        <Logo>Moodies</Logo>
        <NavItems>
          <NavItem href="https://en.wikipedia.org/wiki/Lists_of_films">Movies</NavItem>
          <NavItem href="https://www.imdb.com/list/ls058011111/">Actors</NavItem>
          <NavItem href="https://via.placeholder.com/800x600?text=Sorry!+Under+Development">Login</NavItem>
        </NavItems>
      </Navbar>
      <HeroSection>
        <Title>What's your new MOOD??</Title>
        
        <SearchContainer onSubmit={handleSearch}>
          <SearchInput
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search Mood"
          />
          <SearchButton type="submit">Search</SearchButton>
        </SearchContainer>
      </HeroSection>
      
      {isLoading && <Loadingtxt>Loading...</Loadingtxt>}
      {error && <ErrorMessage>{error}</ErrorMessage>}
      
      {result && (
        <ResultSection>
          <MovieCard>
            <MovieImage src={result.dogImage} alt="Random dog" />
            <MovieTitle>{result.title}</MovieTitle>
            <MovieInfo>Author: {result.author_name?.[0] || 'Unknown'}</MovieInfo>
            <MovieInfo>First Published: {result.first_publish_year || 'Unknown'}</MovieInfo>
            <MovieInfo>Publisher : {result.publisher[0] || 'Unknown'}</MovieInfo>
          </MovieCard>
        </ResultSection>
      )}
    </AppContainer>
  );
}

export default App;