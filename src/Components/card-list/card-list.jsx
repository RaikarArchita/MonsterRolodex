import React from 'react'
import Card from '../card/card';
import './card-list.css'

const CardList = (props) => {
  //console.log(props.monster);
  //console.log("render");
  const{monster} = props;

  return (
    <div className='card-list'>
        {monster.map((monster)=>{
            return(
                <Card monster={monster}/>
            );
           
        })}
    </div>
  )
}

export default CardList
