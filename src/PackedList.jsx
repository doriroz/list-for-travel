import React from "react";

const PackedList = (props) => {
  //   const style = {
  //     textDecoration:
  //   }

  const deleteHandler = (item) => {
    props.onDeleteItem(item);
  };

  return (
    <div style={{ backgroundColor: "#5a3e2b" }}>
      <h3>Packing List</h3>
      <div className="list">
        <ul>
          {props.items
            ? props.items.map((item, ind) => {
                return (
                  <li key={ind}>
                    <input
                      type="checkbox"
                      checked={item.packed ? true : false}
                      // checked={}
                      // value={item.packed}
                      onChange={() => props.onChangeItem(item)}
                    />
                    <span
                      style={
                        item.packed ? { textDecoration: "line-through" } : null
                      }
                    >
                      {`${item.quantity} ${item.description}`}
                    </span>
                    {/* <span>{item.description}</span> */}

                    <button onClick={() => props.onDeleteItem(item)}>❌</button>
                  </li>
                );
              })
            : null}
        </ul>
      </div>
    </div>
  );
};

export default PackedList;
