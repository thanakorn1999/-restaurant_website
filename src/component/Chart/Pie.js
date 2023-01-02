import { Pie } from "react-chartjs-2";
import { useEffect, useState } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);
export function PieChart(props) {
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
        <Pie data={data} options={options} />
      </>
    );
}
