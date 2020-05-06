import React from 'react';
import { ShoppingCardTableStyled } from './styles';

const ShoppingCardTable = ( {total} ) => {
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
                    <tr>
                        <td>1</td>
                        <td>test title</td>
                        <td>1</td>
                        <td>11</td>
                        <td>
                            <button>plus</button>
                            <button>remove</button>
                            <button>minus</button>
                        </td>
                    </tr>
                </tbody>
            </table>
            <p>Total: ${total}</p>
        </ShoppingCardTableStyled>
    )
}

export default ShoppingCardTable;