import { Line } from "react-chartjs-2";
import { useEffect, useState } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Legend,
} from "chart.js";
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Legend);

export function LineChart(props) {
  const [data, setData] = useState(null);
  useEffect(() => {
    setData({
      labels: props.labels,
      datasets: props.datasets,
    });
  }, []);
  const options = {
    plugins: {
      legend: {
        display: false,
      },
    },
  };
  if (data === null) {
    return <div>Loading...</div>;
  } else
    return (
      <>
        <Line data={data} options={options} />
      </>
    );
}
