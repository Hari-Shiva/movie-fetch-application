import styled from 'styled-components'
import img from './img/istockphoto.jpg'

export const AppContainer = styled.div`
  background-image: url('${img}');
  background-size: cover;
  background-position: center;
  min-height: 100vh;
  color: white;
  font-family: Arial, sans-serif;
`;

export const Navbar = styled.nav`
  display: flex;
  justify-content: space-between;
  padding: 1rem 2rem;
  color:grey;
`;

export const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  color:black;
`;

export const NavItems = styled.div`
  display: flex;
  gap: 1rem;
  
`;

export const NavItem = styled.a`
  color: skyblue;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

export const HeroSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 80vh;
  text-align: center;
  color:black;
`;

export const Title = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 2rem;
  color:white;
`;

export const BrowseButton = styled.button`
  background-color: #00ffff;
  color: black;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  cursor: pointer;
  margin-bottom: 1rem;
`;

export const SearchContainer = styled.form`
  display: flex;
  width: 50%;
  max-width: 600px;
`;

export const SearchInput = styled.input`
  flex-grow: 1;
  padding: 0.5rem;
  font-size: 1rem;
  border: none;
  border-radius: 5px 0 0 5px;
`;

export const SearchButton = styled.button`
  background-color: #00ffff;
  color: black;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 0 5px 5px 0;
  cursor: pointer;
`;


export const ResultSection = styled.div`
  display: flex;
  justify-content: center;
  padding: 2rem;
`;

export const MovieCard = styled.div`
  background-color: rgba(0, 0, 0, 0.7);
  border-radius: 10px;
  padding: 1rem;
  width: 300px;
`;

export const MovieImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 5px;
`;

export const MovieTitle = styled.h3`
  margin-top: 1rem;
`;

export const MovieInfo = styled.p`
  margin: 0.5rem 0;
`;

export const ErrorMessage = styled.div`
  color: #ff6b6b;
  background-color: rgba(255, 107, 107, 0.1);
  border: 1px solid #ff6b6b;
  border-radius: 5px;
  padding: 1rem;
  margin: 1rem 0;
  text-align: center;
`;

export const Loadingtxt = styled.p`
  color: black;

`