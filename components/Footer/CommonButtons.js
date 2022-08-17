import _ from "./CommonButtons.module.css";

export default function CommonButtons(props) {
  return (
    <section
      {...props}
      className={_.buttonContainer}
      onClick={() => {
        window.open(props.link ? props.link : "/", "_blank");
      }}
    >
      <div className={_.buttonInnerContainer}>
        <span className={_.topLeft}>{props.topLeft}</span>
        <span>
          <span className={_.topRight}>
            {props.topRightOriginalPrice ? props.topRightOriginalPrice : ""}
          </span>
          <span className={_.topRightDiscount}>
            {props.topRightDiscountPrice}
          </span>
        </span>
      </div>

      <div className={_.buttonInnerContainer}>
        <span className={_.botLeft}>
          {props.bottomLeft ? props.bottomLeft : ""}
        </span>
        <span>
          <span className={_.botRightz}>
            {props.bottomRightz ? props.bottomRightz : ""}
          </span>
          &nbsp;
          <span className={_.botRightx}>
            {props.bottomRightx ? props.bottomRightx : ""}
          </span>
        </span>
      </div>
    </section>
  );
}
