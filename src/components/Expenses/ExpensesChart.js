import Chart from "../Chart/Chart";
import { Component } from "react";

class ExpensesChart extends Component {
    
    constructor(){
        super();
        this.chartDataPoints = [
            {label:'jan',value:0},
            {label:'Feb',value:0},
            {label:'Mar',value:0},
            {label:'Apr',value:0},
            {label:'May',value:0},
            {label:'Jun',value:0},
            {label:'Jul',value:0},
            {label:'Aug',value:0},
            {label:'Sep',value:0},
            {label:'Oct',value:0},
            {label:'Nov',value:0},
            {label:'Dec',value:0},
        ];
    }

    render(){
        for(const expense of this.props.expenses){
            const expenseMonth = expense.date.getMonth();
            this.chartDataPoints[expenseMonth].value+= parseInt(expense.amount);
        }

        return <Chart dataPoints={this.chartDataPoints} />
    }
}

// const ExpensesChart = props =>{
//     const chartDataPoints = [
//         {label:'jan',value:0},
//         {label:'Feb',value:0},
//         {label:'Mar',value:0},
//         {label:'Apr',value:0},
//         {label:'May',value:0},
//         {label:'Jun',value:0},
//         {label:'Jul',value:0},
//         {label:'Aug',value:0},
//         {label:'Sep',value:0},
//         {label:'Oct',value:0},
//         {label:'Nov',value:0},
//         {label:'Dec',value:0},
//     ];

//     for(const expense of props.expenses){
//         const expenseMonth = expense.date.getMonth();
//         chartDataPoints[expenseMonth].value+= parseInt(expense.amount);
//     }
//     console.log(chartDataPoints);

//     return <Chart dataPoints={chartDataPoints} />
// }

export default ExpensesChart;