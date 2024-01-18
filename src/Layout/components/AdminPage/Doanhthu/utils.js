import { FaSquareFull } from "react-icons/fa";

export const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload?.length) {
    return (
      <div className="bg-warning p-3 shadow">
        <span>{label}</span>
        <br />
        {payload.map((ele, index) => (
          <>
            <small key={index} className="text-secondary">
              {ele.name} : {ele.value}
            </small>
            <br />
          </>
        ))}
      </div>
    );
  }
  return null;
};

export const RenderLegend = (props) => {
  const { payload } = props;
  const colors = ["#0000FF", "#ff223f"];
  return (
    <div className="d-flex justify-content-end">
      {payload.map((entry, index) => (
        <>
          <FaSquareFull className="mx-2" size={18} color={colors[index]} />
          <span className="mx-2" key={`item-${index}`}>
            {entry.value}
          </span>
        </>
      ))}
    </div>
  );
};
