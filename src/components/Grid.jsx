const Grid = (props) => {
  return (
    <div className="{props.class}">
      <h2>{props.title}</h2>
      <ul>
        <li>{props.li1}</li>
        <li>{props.li2}</li>
        <li>{props.li3}</li>
      </ul>
    </div>
  );
};

export default Grid;
