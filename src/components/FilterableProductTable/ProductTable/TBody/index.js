import api from "api";
import { useEffect, useState } from "react";

function renderRows(products) {
return products.map(({name,price}, index) => (

)

}

const TBody = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    (async () => {
      const productData = await api.index();
      setProducts(() => productData);
    })();
  });
  return <tbody>{renderRows(products)}</tbody>;
};

export default TBody;
