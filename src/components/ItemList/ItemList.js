import React from 'react';

const ItemList = () => {
    return (
        <div>
            <div>
                <form className='pa4 black-80 flex flex-wrap'>
                    <div className='measure tl w-30 mr3'>
                        <label htmlFor='item' className='f6 b db mb2'>Item</label>
                        <input id='item' className='input-reset ba b--black-20 pa2 mb2 db w-100' type='text' aria-describedby='name-desc' />
                    </div>
                    <div className='measure tl w-20 mr3'>
                        <label htmlFor='amount' className='f6 b db mb2'>Amount</label>
                        <input id='amount' className='input-reset ba b--black-20 pa2 mb2 db w-100' type='text' aria-describedby='name-desc' />
                    </div>
                    <div className='measure tl mr3'>
                        <label htmlFor='unit' className='f6 b db mb2'>Unit</label>
                        <select id='unit' name='unit' className='ba b--black-20 ph2 pt1 pb2 mb2 db w-100'>
                            <option value="gram">g</option>
                            <option value="kilo">kg</option>
                            <option value="package">pck</option>
                            <option value="milliliter">ml</option>
                        </select>
                        </div>
                    <div className='measure tl w-20 mr3'>
                        <label htmlFor='price' className='f6 b db mb2'>Price <span className='normal black-60'>(optional)</span></label>
                        <input id='price' className='input-reset ba b--black-20 pa2 mb2 db w-100' type='text' aria-describedby='name-desc' />
                    </div>
                    <div className='measure tl w-10 mr3'>
                        <label htmlFor='currency' className='f6 b db mb2'>Currency</label>
                        <select id='currency' name='unit' className='ba b--black-20 ph2 pt1 pb2 mb2 db w-100'>
                            <option value="euro">€</option>
                            <option value="dollar">$</option>
                            <option value="pound">£</option>
                        </select>
                    </div>
                    <button id='enter'>Enter</button>
                </form>
            </div>
            <div className='pa4'>
                <div className='overflow-auto'>
                    <table className='f6 w-100 mw8 center' cellSpacing='0'>
                        <thead>
                            <tr>
                                <th className='fw6 bb b--black-20 tl pb3 pr3 bg-white'>Item</th>
                                <th className='fw6 bb b--black-20 tl pb3 pr3 bg-white'>Amount</th>
                                <th className='fw6 bb b--black-20 tl pb3 pr3 bg-white'>Price</th>
                            </tr>
                        </thead>
                        <tbody className='lh-copy tl'>
                            <tr>
                                <td className='pv3 pr3 bb b--black-20'>cucumber</td>
                                <td className='pv3 pr3 bb b--black-20'>amount</td>
                                <td className='pv3 pr3 bb b--black-20'>price</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default ItemList;