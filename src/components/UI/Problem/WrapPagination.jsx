
const WrapPagination = (props) => {
    const style ={
        margin : '0 auto',
    }
  return (
    <div className="intro-y col-span-12 flex flex-wrap sm:flex-row sm:flex-nowrap items-center" >
      <ul className="pagination" style={style}>{props.children}</ul>
    </div>
  );
};

export default WrapPagination;
