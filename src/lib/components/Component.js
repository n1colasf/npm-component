import React from "react";

const Component = (props) => {
  return (
    <div>
      <div className="container">
        <div className="text-center text-6xl mt-10">{props.title}</div>
        <div className="text-center mt-10">
          <button
            className=" bg-black rounded-xl text-white p-3"
            onClick={props.onCompClick}
          >
            {props.label}
          </button>
        </div>
        <div className="">
          <table className="table-auto mx-auto mt-12 bg-white shadow">
            <thead className=" bg-black text-white">
              <tr>
                {Object.keys(props.tableHeader).map((key) => (
                  <th key={key} className="px-4 py-2">
                    {props.tableHeader[key]}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {props.tableContent.map((item, index) => (
                <tr
                  key={index}
                  className={`bg-${index % 2 === 0 ? "gray-100" : "gray-200"}`}
                >
                  {Object.keys(item).map((key) => (
                    <td key={key} className="border px-4 py-2">
                      {item[key]}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="text-center text-4xl mt-10">Select API Country</div>
        <div className="select-auto text-center mt-4">
          <select className="select-auto">
            <option>Select a country</option>
            {Object.keys(props.countrySelector)
              .sort()
              .map((key) => (
                <option key={key} value={key}>
                  {props.countrySelector[key]}
                </option>
              ))}
          </select>
        </div>
      </div>
    </div>
  );
};

export default Component;
