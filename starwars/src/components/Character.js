// Write your Character component here
// Write your Character component here
import React from 'react';
import Container from './Container';

export default function Character(props){
    return(
        <div style={{display:`flex`, flexWrap:`wrap`,margin:`0 20%`}} className="characterContainer">
            {
              props.charInfo.map(character =>{
                  return(
                    <Container >
                        <p>{character.name}</p>
                        <p>Gender: {character.gender}</p>
                        <p>Birth Year: {character.birth_year}</p>
                    </Container >  
                  )
              })  
            }
        </div>
    )
}