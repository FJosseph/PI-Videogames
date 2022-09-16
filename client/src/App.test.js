import { render, screen } from '@testing-library/react';
import App from './App';
import LandingPage from './components/LandingPage'
import Game from './components/Game'
import React from 'react'

// test('renders learn react link', () => {
//   render(<App />);
  
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });
// test('Renderiza Cards', ()=>{
//     const props = {id: 1, name: 'PES', background_image:'', rating:1, genres: [{name:'Action'}]}
//   let component = render(<Game id={props.id} name={props.name} background_image={props.background_image} rating={props.rating} genres={props.genres}/>)
//   component.getByText('PES')
// })