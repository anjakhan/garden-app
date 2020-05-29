import React from 'react';

class ItemInput extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        item: '',
        amount: '',
        unit: '',
        price: '',
        currency: ''
      }
    }
    onItemChange = (event) => {
      this.setState({item: event.target.value})
    }
    onAmountChange = (event) => {
      this.setState({amount: event.target.value})
    }
    onUnitChange = (event) => {
      this.setState({unit: event.target.value})
    }
    onPriceChange = (event) => {
        this.setState({price: event.target.value})
    }
    onCurrencyChange = (event) => {
        this.setState({currency: event.target.value})
    }
    onEnter = () =>  {
        console.log(this.state)
    }
    onKeypress = (event) => {
        if (event.keyCode === 13) {
            event.preventDefault();
        }
    }
    onHandleSubmit = (event) => {
        event.preventDefault();
        const item = this.state.item;
        console.log('save item:', item)
        this.setState({
            item: '',
            amount: '',
            unit: '',
            price: '',
            currency: ''
        })
    };

    render() {
        return (
            <div>
                <form onSubmit={this.onHandleSubmit} className='pa4 black-80 flex flex-wrap'>
                    <div className='measure tl w-30 mr3'>
                        <label htmlFor='item' className='f6 b db mb2'>Item</label>
                        <input onKeyDown={this.onKeypress} value={this.state.item} onChange={this.onItemChange} id='item' className='input-reset ba b--black-20 pa2 mb2 db w-100' type='text' aria-describedby='name-desc' />
                    </div>
                    <div className='measure tl w-20 mr3'>
                        <label htmlFor='amount' className='f6 b db mb2'>Amount</label>
                        <input onKeyDown={this.onKeypress} value={this.state.amount} onChange={this.onAmountChange} id='amount' className='input-reset ba b--black-20 pa2 mb2 db w-100' type='text' aria-describedby='name-desc' />
                    </div>
                    <div className='measure tl mr3'>
                        <label htmlFor='unit' className='f6 b db mb2'>Unit</label>
                        <select value={this.state.unit} onChange={this.onUnitChange} id='unit' name='unit' className='ba b--black-20 ph2 pt1 pb2 mb2 db w-100'>
                            <option value="blank"></option>    
                            <option value="gram">g</option>
                            <option value="kilo">kg</option>
                            <option value="package">pck</option>
                            <option value="milliliter">ml</option>
                        </select>
                        </div>
                    <div className='measure tl w-20 mr3'>
                        <label htmlFor='price' className='f6 b db mb2'>Price <span className='normal black-60'>(optional)</span></label>
                        <input onKeyDown={this.onKeypress} value={this.state.price} onChange={this.onPriceChange} id='price' className='input-reset ba b--black-20 pa2 mb2 db w-100' type='text' aria-describedby='name-desc' />
                    </div>
                    <div className='measure tl w-10 mr3'>
                        <label htmlFor='currency' className='f6 b db mb2'>Currency</label>
                        <select value={this.state.currency} onChange={this.onCurrencyChange} id='currency' name='unit' className='ba b--black-20 ph2 pt1 pb2 mb2 db w-100'>
                            <option value="blank"></option>
                            <option value="euro">€</option>
                            <option value="dollar">$</option>
                            <option value="pound">£</option>
                        </select>
                    </div>
                    <input id='enter' 
                        onClick={this.onEnter}
                        className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
                        type="submit"
                        value="Enter"/>
                </form>
            </div>
        );
    }
}

export default ItemInput;