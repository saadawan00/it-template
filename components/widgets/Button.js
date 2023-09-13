function Button(props) {
  const { href, label, ...restProps } = props;
  return (
    <button {...{ href }} {...restProps} className="button-wrapper">
      <span>{label}  </span>
      <i className="fa fa-arrow-right"></i>
    </button>
  );
}

export default Button;
