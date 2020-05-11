import React from 'react';
import { connect } from 'react-redux'
import { ShoppingCardTableStyled } from './styles';



const ShoppingCardTable = ({ items, total, onIncrease, onDecrease, onDelite }) => {
    const renderRow = (item, idx) => {
        const { id, title, count, total } = item;
        return (
            <tr key={id}>
                <td>{idx + 1}</td>
                <td>{title}</td>
                <td>{count}</td>
                <td>{total}</td>
                <td>
                    <button onClick={() => onIncrease(id)}>plus</button>
                    <button onClick={() => onDelite(id)}>remove</button>
                    <button onClick={() => onDecrease(id)}>minus</button>
                </td>
            </tr>
        )
    }

    return (
        <ShoppingCardTableStyled>
            <h2>Your Order</h2>
            <table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Item</th>
                        <th>Count</th>
                        <th>Price</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    { items.map(renderRow) }
                </tbody>
            </table>
            <p>Total: ${total}</p>
        </ShoppingCardTableStyled>
    )
}

const mapStateToProps = ( {cardItems, orderTotal}) => {
    return {
        items: cardItems,
        total: orderTotal
    }
}

const mapDispatchToProps = () => {
    return {
        onIncrease: () => {
            console.log(1);
        },
        onDecrease: () => {
            console.log(1);
        },
        onDelite: () => {
            console.log(1);
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCardTable);