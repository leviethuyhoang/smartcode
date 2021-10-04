const MenuWrap = (props) =>
{


    return(<div className="intro-x dropdown w-8 h-8">
    <div
      className="dropdown-toggle w-8 h-8 rounded-full overflow-hidden shadow-lg image-fit zoom-in scale-110"
      role="button"
      aria-expanded="false"
    >
      <img
        alt="Icewall Tailwind HTML Admin Template"
        src="dist/images/profile-14.jpg"
      />
    </div>
    
    {props.children}</div>)
}



export default MenuWrap