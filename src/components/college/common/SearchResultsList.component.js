import React from 'react';
import Card from '../../common/Card.component';

export default function SearchResultsList(props){
  let count = 10;
  let cards = [];
  let styles = ['property', 'school-supplies', 'other'];


  for(let i = 0; i < 10; i++){
    cards.push(<Card key={i} className="col-md-2" indicatorStyle={styles[i%3]}/>);
  }

  return(<div className="row">{cards}</div>);
}