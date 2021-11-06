

const HeaderPage = (props) => {

    const {mt,classes} = props;

    return (
      <h2 className={`intro-y text-lg font-medium mt-${mt ? mt :'10'} ${classes ? classes : ''}`}>
        {props.children}
      </h2>
    )
}
export default HeaderPage;