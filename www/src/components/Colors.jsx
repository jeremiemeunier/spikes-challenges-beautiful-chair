import { useId, useState } from "react";

const Colors = ({ colors }) => {
  const [colorChoice, setColorChoice] = useState(0);

  return (
    <div className="colors">
      <div className="choices">
        {colors.map((color, index) => (
          <InputColor
            setChoice={setColorChoice}
            choice={colorChoice}
            index={index}
            key={index}
            color={color}
          />
        ))}
      </div>
      <p>{colors[colorChoice].label}</p>
    </div>
  );
};

export default Colors;

const InputColor = ({ color, setChoice, choice, index }) => {
  const id = useId();

  return (
    <>
      <input
        onChange={(event) => {
          setChoice(parseInt(event.target.value));
        }}
        type="radio"
        name="colors"
        id={id}
        value={index}
        checked={choice === index ? true : false}
      />
      <label htmlFor={id} className={color.value}></label>
    </>
  );
};
