import React from 'react';
import carrot from './carrot.png';

const Card = ({ name, price }) => {
    return (
        <div className='grow shadow-4 dib pa2 br2 ba dark-gray b--black-10 w-100 w-50-m w-25-l mw5 ma2'>
            <img src={carrot} className='db w-100 br2 br--top' alt='product' />
            <div className='ph3-ns pb2-ns'>
                <div className='dt w-100 mt1'>
                    <div className='dtc tl'>
                        <h1 className='f5 f4-ns mv0'>{name}</h1>
                    </div>
                    <div className='dtc tr'>
                        <h2 className='f5 mv0'>{price}</h2>
                    </div>
                </div>
                <p className='f6 lh-copy measure mt2 mid-gray tj'>
                If it fits, i sits burrow under covers. Destroy couch leave hair everywhere,
                and touch water with paw then recoil in horror.
                </p>
            </div>
        </div>
    );
}

export default Card;