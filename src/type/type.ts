import type { ChartData, ChartOptions} from 'chart.js';

export type Review = {
    customer:string,
    review:string,
    score:number
}

export type Sale = {
    weekEnding:string,
    retailSales:number,
    wholesaleSales:number,
    unitsSold:number,
    retailerMargin:number
}

export type Product = {
    id:string,
    title:string,
    image:string,
    subtitle:string,
    brand:string,
    reviews: Review[],
    retailer:string,
    details:string[],
    tags:string[],
    sales:Sale[]
}

export interface LineProps {
    options: ChartOptions<'line'>;
    data: ChartData<'line'>;
}