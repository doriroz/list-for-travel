import React from "react";

const Stats = (props) => {
  const count = props.items.length;
  if (!count) {
    return <div className="stats">Start adding some items</div>;
  }

  const packedCount = props.items.filter((val) => {
    return val.packed === true;
  }).length;
  // // console.log(packingList);
  // console.log(packedCount);
  const precent = Math.round((packedCount / count) * 100);

  return (
    <div className="stats">
      {precent !== 100
        ? `👀 You have ${count} items on your List, and you already packed ${packedCount}
      (${precent}%) 👀`
        : "You got everything. Ready to go"}
    </div>
  );
};

export default Stats;
