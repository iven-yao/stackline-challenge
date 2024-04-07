import React, { useState } from "react";
import { Product, Sale } from "../type/type";

const SalesTable = (props: {product: Product}) => {

    const [sortByDate, setSortByDate] = useState(false);
    const [sortByRS, setSortByRS] = useState(false);
    const [sortByWS, setSortByWS] = useState(false);
    const [sortByUnits, setSortByUnits] = useState(false);
    const [sortByRM, setSortByRM] = useState(false);

    const product = props.product;

    const compare = (a:Sale, b:Sale) => {
        if(sortByDate) return b.weekEnding.localeCompare(a.weekEnding);
        if(sortByRM) return b.retailerMargin - a.retailerMargin;
        if(sortByRS) return b.retailSales - a.retailSales;
        if(sortByWS) return b.wholesaleSales - a.wholesaleSales;
        if(sortByUnits) return b.unitsSold - a.unitsSold;
        return a.weekEnding.localeCompare(b.weekEnding);
    }

    return (
        <table className='table product-table m-0'>
            <thead>
                <tr>
                <th scope='col'>WEEK ENDING
                    <i className={`bi bi-chevron-down ${sortByDate && "active"}`} onClick={() => {setSortByDate(!sortByDate)}}></i>
                </th>
                <th scope='col' className='text-end'>RETAIL SALES
                    <i className={`bi bi-chevron-down ${sortByRS && "active"}`} onClick={() => {setSortByRS(!sortByRS)}}></i>
                </th>
                <th scope='col' className='text-end'>WHOLESALE SALES
                    <i className={`bi bi-chevron-down ${sortByWS && "active"}`} onClick={() => {setSortByWS(!sortByWS)}}></i>
                </th>
                <th scope='col' className='text-end'>UNITS SOLD
                    <i className={`bi bi-chevron-down ${sortByUnits && "active"}`} onClick={() => {setSortByUnits(!sortByUnits)}}></i>
                </th>
                <th scope='col' className='text-end'>RETAILER MARGIN
                    <i className={`bi bi-chevron-down ${sortByRM && "active"}`} onClick={() => {setSortByRM(!sortByRM)}}></i>
                </th>
                </tr>
            </thead>
            <tbody>
                {product.sales.sort((a,b) => compare(a,b)).map((sale,i) => (
                <tr key={i}>
                    <td>{sale.weekEnding}</td>
                    <td className='text-end'>${sale.retailSales.toLocaleString()}<i className="bi bi-chevron-down"></i></td>
                    <td className='text-end'>${sale.wholesaleSales.toLocaleString()}<i className="bi bi-chevron-down"></i></td>
                    <td className='text-end'>{sale.unitsSold}<i className="bi bi-chevron-down"></i></td>
                    <td className='text-end'>${sale.retailerMargin.toLocaleString()}<i className="bi bi-chevron-down"></i></td>
                </tr>
                ))}
            </tbody>
        </table>
    );
}

export default SalesTable;