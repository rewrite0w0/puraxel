import _ from "./CommonButtons.module.css";

export default function CommonButtons(props) {
  return (
    <section
      {...props}
      style={{ ...props.style }}
      className={_.buttonContainer}
      onClick={() => {
        window.open(props.link ? props.link : "/", "_blank");
      }}
    >
      <div className={_.buttonInnerContainer}>
        <div className={_.lineContainer}>
          <span className={_.topLeft}>{props.topLeft}</span>
          <div className={_.topRightContainer}>
            <span className={_.topRight}>
              {props.topRightOriginalPrice ? props.topRightOriginalPrice : ""}
            </span>
            <span className={_.topRightDiscount}>
              {props.topRightDiscountPrice}
            </span>
          </div>
        </div>

        <div className={_.lineContainer}>
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
      </div>
    </section>
  );
}
