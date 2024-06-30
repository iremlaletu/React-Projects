import classNames from "classnames";

const Button = (props) => {
  return (
    <button
      type={props.type || "button"}
      className={`group cursor-pointer outline-none self-center ${props.className}`}
      onClick={props.onClick}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="50px"
        height="50px"
        viewBox="0 0 24 24"
        className={classNames(
          `stroke-${props.btnclr}`,
          `fill-none`,
          `hover:rotate-90`,
          `duration-300`
        )}
      >
        {props.children}
      </svg>
    </button>
  );
};

export default Button;
