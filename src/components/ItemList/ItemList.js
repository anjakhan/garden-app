import React from 'react';

const ItemList = () => {
    return (
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
    )
}

export default ItemList;