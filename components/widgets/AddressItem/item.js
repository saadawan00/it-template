function Item(props){
  const {icon, title, value} = props;
  return (
    <div className="icon-inline ">
      <div className='d-flex flex-col'>
        <span className="color-darkgrey font-weight-regular">
          <i className={`${icon} color-main fontsize_16 mr-10`} />
          {title}:
        </span>
        <span className='ml-20'>{value}</span>
      </div>
    </div>
  )
}

export default Item;