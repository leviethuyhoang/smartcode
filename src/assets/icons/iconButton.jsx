const IconButton = {
    Refresh : <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="feather feather-rotate-ccw block mx-auto"><polyline points="1 4 1 10 7 10" /><path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10" /></svg>
    ,Loading : <svg width={25} viewBox="-2 -2 42 42" xmlns="http://www.w3.org/2000/svg" stroke="rgb(45, 55, 72)" className="w-8 h-8">
    <g fill="none" fillRule="evenodd">
      <g transform="translate(1 1)" strokeWidth={4}>
        <circle strokeOpacity=".5" cx={18} cy={18} r={18} />
        <path d="M36 18c0-9.94-8.06-18-18-18">
          <animateTransform attributeName="transform" type="rotate" from="0 18 18" to="360 18 18" dur="1s" repeatCount="indefinite" />
        </path>
      </g>
    </g>
  </svg>
}

export default IconButton;