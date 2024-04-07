import React from "react";
import { Line } from 'react-chartjs-2';
import { Chart, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, TimeScale } from 'chart.js';
import 'chartjs-adapter-date-fns';
import { Product } from "../type/type";
Chart.register(
  CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, TimeScale
)
const LineChart = (props: {product: Product}) => {

    const product = props.product;

    return (
        <Line
            options={{
                responsive: true,
                maintainAspectRatio: true,
                aspectRatio: 3,
                elements: {point : { radius : 0}},
                scales: {
                    x: {
                        type: "time",
                        time: {
                            unit: "month",
                            displayFormats: {
                                month: "MMM"
                            }
                        },
                        grid: {
                            display:false
                        }
                    },
                    y: {
                        display:false,
                        grid: {
                            display:false
                        }
                    }
                },
                plugins: {
                    legend: {
                        display: false
                    }
                }
            }}
            data={{
                labels: product.sales.map(sale => sale.weekEnding),
                datasets: [
                {
                    label: "retail sales",
                    data: product.sales.map(sale => sale.retailSales),
                    borderColor: 'rgb(50,150,200)'
                },
                {
                    label: "wholesale sales",
                    data: product.sales.map(sale => sale.wholesaleSales),
                    borderColor: 'rgb(200, 200, 200)'
                }
                ]
            }}
        />
    );
}

export default LineChart;