import React from "react";

export default function PhonePrefix() {
  const [cities, setCities] = useState([51.1642292, 10.4541194]);

  const transformValue = (e) => {
    const optionValue = [e.target.value];
    var array = JSON.parse("[" + optionValue + "]");
    setCities(array);
  };

  return (
    <div id="containerPrefix">
      <select
        id="demo_overview"
        className="form-control"
        data-role="select-dropdown"
        defaultValue={"DEFAULT"}
        onChange={(e) => transformValue(e)}
        // value
      >
        <option disabled selected value="DEFAULT">
          choose prefix
        </option>
        <option value={[48.782343, 9.180819]}>Stuttgart</option>
        <option value={[52.516667, 13.4]}>Berlin</option>
      </select>
    </div>
  );
}
