import React from 'react';
import Card from '../Card/Card';

const CardList = ({ items }) => {
    return (
        <div>
            {
                items.map((item, i) => {
                    return (
                        <Card 
                            key={items[i].id} 
                            name={items[i].name} 
                            price={items[i].price}
                        />
                    );
                })
            }
        </div>
    );
}

export default CardList;