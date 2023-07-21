import React, { useEffect, useState } from "react";
// import "./App.css";
import Logo from "./Logo";
import Stats from "./Stats";
import Form from "./Form";
import PackedList from "./PackedList";

function App() {
  const initialItems = [
    { id: 1, description: "Passports", quantity: 2, packed: false },
    { id: 2, description: "Socks", quantity: 12, packed: false },
  ];

  const [packingList, setPackingList] = useState(initialItems);
  const [sortItem, setSortItem] = useState("1");

  const addItemHandler = (item) => {
    //can not do like this paush array because with that it mutable the array
    //and React is not allowed to mutable
    // setPackingList(packingList.push(item));
    setPackingList([...packingList, item]);
  };

  const deleteItemHandler = (item) => {
    const ind = packingList.findIndex((val) => val.id === item.id);
    console.log(ind);
    if (ind !== -1) {
      //splice return the deleted item
      // const arr = packingList.splice(ind, 1);
      // setPackingList([...packingList]);

      const arr = packingList.filter((val) => val.id != item.id);
      setPackingList(arr);
    }
  };

  // const changeItemHandler = (item) => {
  //   setPackingList((items) => {
  //     return items.map((val) => {
  // NOT VALID => because of the item after the ":" sign .
  // it has to be item val which comes from the map array
  //       return val.id === item.id ? { ...val, packed: !item.packed } : item;
  //     });
  //   });
  // };

  const changeItemHandler = (item) => {
    setPackingList((items) => {
      return items.map((val) => {
        return val.id === item.id ? { ...val, packed: !item.packed } : val;
      });
    });
  };

  const clearItemsHandler = () => {
    const confirm = window.confirm(
      "Are you sure you want to clear this list ? "
    );

    if (confirm) setPackingList(0);
  };

  const sortItemHandler = (event) => {
    let sortedItems;
    const option = Number(event.target.value);
    if (option === 1) {
      setPackingList(
        packingList.slice().sort((a, b) => a.quantity - b.quantity)
      );
    }

    if (option === 2) {
      setPackingList(
        packingList
          .slice()
          .sort((a, b) => a.description.localeCompare(b.description))
      );
    }

    if (option === 3) {
      setPackingList(packingList.slice().sort((a, b) => a.packed - b.packed));
    }
  };

  // const sortItemHandler = (event) => {
  //   const option = Number(event.target.value);
  //   let sortArr = [];
  //   if (option === 1) {
  //     sortArr = packingList.sort((a, b) => {
  //       return a.quantity - b.quantity;
  //     });

  //     console.log(sortArr);
  //     setPackingList([...sortArr]);
  //   }
  //   if (option === 2) {
  //     sortArr = packingList.sort((a, b) => {
  //       return a.description.localeCompare(b.description);
  //     });
  //     setPackingList([...sortArr]);
  //   }
  //   if (option === 3) {
  //     sortArr = packingList.sort((a, b) => {
  //       return a.packed - b.packed;
  //     });
  //     setPackingList([...sortArr]);
  //   }
  // };

  return (
    <div className="app">
      <Logo />
      <Form addItem={addItemHandler} />

      <PackedList
        items={packingList}
        onDeleteItem={deleteItemHandler}
        onChangeItem={changeItemHandler}
      />

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          backgroundColor: "#5a3e2b",
          gap: "15px",
          paddingBottom: "15px",
        }}
      >
        <select value={sortItem} onChange={sortItemHandler}>
          <option value="1">SORT BY QUANTITY</option>
          <option value="2">SORT BY DESCRIPTION</option>
          <option value="3">SORT BY PACKED STATUS</option>
        </select>
        {/*         
        <select onInput={sortItemHandler}>
          <option value="1">SORT BY INPUT ORDER</option>
          <option value="2">SORT BY DESCRIPTION</option>
          <option value="3">SORT BY PACKED STATUS</option>
        </select> */}
        <button onClick={clearItemsHandler}>CLEAR LIST</button>
      </div>
      <Stats items={packingList} />
    </div>
  );
}

export default App;
