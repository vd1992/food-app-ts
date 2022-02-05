import React, { useState } from "react";
//import Plotly from 'plotly.js-dist';
import createPlotlyComponent from "react-plotly.js/factory";

const Results = ({
  dataURL,
  dataIngredients,
  dataNutrition,
  nutritionLabel,
}: any) => {
  const xAxis = nutritionLabel;
  const yAxis = dataNutrition;
  //const Plot = createPlotlyComponent(Plotly);
  const info = { type: "bar", x: xAxis, y: yAxis };

  return (
    <div className="results-div">
      {!dataURL && (
        <p>This number is erroneous or not in the food database. </p>
      )}

      <img src={dataURL} />
      <p>{dataIngredients}</p>

      {/* {dataURL &&
            <Plot
                data={[
                    info
                ]}
                layout={{width: 540, height: 360, title: 'Per 100g serving, macronutrients in grams'}}
            />
            } */}
    </div>
  );
};

export { Results };
