import React from "react";
import { Product } from "../type/type";

const SalesTable = (props: {product: Product}) => {

    const product = props.product;

    return (
        <table className='table product-table m-0'>
            <thead>
                <tr>
                <th scope='col'>WEEK ENDING</th>
                <th scope='col' className='text-end'>RETAIL SALES</th>
                <th scope='col' className='text-end'>WHOLESALE SALES</th>
                <th scope='col' className='text-end'>UNITS SOLD</th>
                <th scope='col' className='text-end'>RETAILER MARGIN</th>
                </tr>
            </thead>
            <tbody>
                {product.sales.map((sale,i) => (
                <tr key={i}>
                    <td>{sale.weekEnding}</td>
                    <td className='text-end'>${sale.retailSales.toLocaleString()}</td>
                    <td className='text-end'>${sale.wholesaleSales.toLocaleString()}</td>
                    <td className='text-end'>{sale.unitsSold}</td>
                    <td className='text-end'>${sale.retailerMargin.toLocaleString()}</td>
                </tr>
                ))}
            </tbody>
        </table>
    );
}

export default SalesTable;