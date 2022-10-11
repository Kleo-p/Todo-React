import React from "react";
export default function Tod(props) {
  // let onDel = () => {
  //   props.setTodo((todos) => {
  //     todos.map.filter(() => {
  //       if()
  //     })
  //   })
  // };
  let styles = { textDecoration: props.don ? "line-through" : "none" };

  return (
    <div>
      <div
        className="tdc"
      >
        <input
          type="checkbox"
          id="done"
          checked={props.don}
          onChange={() => props.onclikeCB(props.id)}
        />
        <h4 style={styles}>{props.val}</h4>
        {/* <img className="edit" src="./images/edit2.png" alt="edit" onClick={()=> props.ed(props.id)}/> */}
        <img
          className="del"
          src="./images/del.png"
          alt="del"
          onClick={() => props.del(props.id)}
        />
      </div>
    </div>
  );
}
