import React from "react";
import { Radio, Space, Popover } from "antd";
import "./VehicleSelect.css";

const VehicleSelect = ({
  currentPlanet,
  id,
  vehicles,
  onHandleRadioChange,
}) => {
  return (
    <Radio.Group
      onChange={(e) => onHandleRadioChange(e.target.value, id)}
      className="radio-group"
    >
      <Space direction="vertical">
        {vehicles.map((x, i) => {
          return (
            <Radio
              key={i}
              value={x.name}
              name={x.name}
              disabled={
                x.max_distance >= currentPlanet[0].distance && x.total_no > 0
                  ? false
                  : true
              }
            >
              <Popover
                placement="right"
                title={x.name}
                content={
                  <div>
                    <p>Max Distance - {x.max_distance} megamiles</p>
                    <p>Speed - {x.speed} megamiles/hr</p>
                  </div>
                }
                trigger="hover"
              >
                {x.name}
                {`(${x.total_no})`}
              </Popover>
            </Radio>
          );
        })}
      </Space>
    </Radio.Group>
  );
};

export default VehicleSelect;