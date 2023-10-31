import { useEffect, useState } from "react";
import axios from "axios";

// Creating Custom Hook......................
function useCurrencyInfo(currency) {
  const [data, setData] = useState({});
  useEffect(() => {
    const fetchData = async () => {
      let res = await axios.get(
        `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`
      );
      setData(res.data[currency]);
    };
    fetchData();
  }, [currency]);
  return data;
}

export default useCurrencyInfo;
