import React from 'react';
import '../Stylesheets/mystyle.css'

const percentToDecimal = (Decimal) => {
    return(Decimal.toFixed(2) + '%')
}

const calculateScore = (total, goal) => {
    return percentToDecimal(total / goal);
}

export const CalculateScore = ({Name,School,Total,Goal}) => {
    return(
        <div className = "formatSyle">
            <h1><font color = 'Brown'>Student Details</font></h1>
            <div className = "Name">
                <b><span>Name: </span></b>
                <span>{Name}</span>
            </div>
        <div className = "School">
            <b><span>School: </span></b>
            <span>{School}</span>
        </div>
        <div className = "Total">
            <b><span>Total: </span></b>
            <span>{Total}</span>
            <span>Marks</span>
        </div>
        <div className ="score">
            <b>Score: </b>
            <span>
                {calculateScore(Total,Goal)}
            </span>
        </div>
    </div>
    );
}