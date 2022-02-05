import React, { useState } from "react";
import "./App.css";

import { Form } from "./components/Form";
import { Results } from "./components/Results";

const App = () => {
  const [barcodeNumber, setBarcode] = useState("0");
  const [dataURL, setDataURL] = useState("");
  const [dataIngredients, setDataIngredients] = useState("");
  const [dataNutrition, setDataNutrition] = useState([""]);
  const nutritionLabel = ["sugar", "protein", "fat"];

  const fetchFoodData = async (barcode: string) => {
    const URL = "https://us.openfoodfacts.org/api/v0/product/" + barcode;
    const response = await fetch(URL);
    const dataPromise = await response.json();

    if (dataPromise.status === 0) {
      setDataURL("");
      setDataIngredients("");
      setDataNutrition([""]);
      return;
    } else {
      setDataURL(dataPromise.product.image_front_url);
      setDataIngredients(dataPromise.product.ingredients_text);
      setDataNutrition([
        dataPromise.product.nutriments.sugars_100g,
        dataPromise.product.nutriments.proteins_100g,
        dataPromise.product.nutriments.fat_100g,
      ]);
    }
  };

  const changeFormValue = (barcode: string) => {
    setBarcode(barcode);
    fetchFoodData(barcode);
  };

  return (
    <div className="app">
      <Form changeFormValue={changeFormValue} />
      {barcodeNumber !== "0" && (
        <Results
          dataURL={dataURL}
          dataIngredients={dataIngredients}
          dataNutrition={dataNutrition}
          nutritionLabel={nutritionLabel}
        />
      )}
    </div>
  );
};

export default App;
