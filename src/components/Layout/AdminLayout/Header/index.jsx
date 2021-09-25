import { Fragment } from "react";

const Header = (props) => {
    return (
      <Fragment>
      <div className="top-bar-boxed border-b border-theme-2 -mt-7 md:-mt-5 -mx-3 sm:-mx-8 px-3 sm:px-8 md:pt-0 mb-12">
        <div className="h-full flex items-center">
          {/* BEGIN: Logo */}
          <a href className="-intro-x hidden md:flex">
            <img alt="Icewall Tailwind HTML Admin Template" className="w-6" src="dist/images/logo.svg" />
            <span className="text-white text-lg ml-3"> Ice<span className="font-medium">wall</span> </span>
          </a>
          {/* END: Logo */}
          {/* BEGIN: Breadcrumb */}
          <div className="-intro-x breadcrumb mr-auto"> <a href>Application</a> <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="feather feather-chevron-right breadcrumb__icon"><polyline points="9 18 15 12 9 6" /></svg> <a href className="breadcrumb--active">Dashboard</a> </div>
          {/* END: Breadcrumb */}
          {/* BEGIN: Search */}
          <div className="intro-x relative mr-3 sm:mr-6">
            <div className="search hidden sm:block">
              <input type="text" className="search__input form-control dark:bg-dark-1 border-transparent placeholder-theme-8" placeholder="Search..." />
              <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="feather feather-search search__icon dark:text-gray-300"><circle cx={11} cy={11} r={8} /><line x1={21} y1={21} x2="16.65" y2="16.65" /></svg> 
            </div>
            <a className="notification sm:hidden" href> <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="feather feather-search notification__icon dark:text-gray-300"><circle cx={11} cy={11} r={8} /><line x1={21} y1={21} x2="16.65" y2="16.65" /></svg> </a>
            <div className="search-result">
              <div className="search-result__content">
                <div className="search-result__content__title">Pages</div>
                <div className="mb-5">
                  <a href className="flex items-center">
                    <div className="w-8 h-8 bg-theme-29 text-theme-10 flex items-center justify-center rounded-full"> <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="feather feather-inbox w-4 h-4"><polyline points="22 12 16 12 14 15 10 15 8 12 2 12" /><path d="M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z" /></svg> </div>
                    <div className="ml-3">Mail Settings</div>
                  </a>
                  <a href className="flex items-center mt-2">
                    <div className="w-8 h-8 bg-theme-30 text-theme-24 flex items-center justify-center rounded-full"> <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="feather feather-users w-4 h-4"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx={9} cy={7} r={4} /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg> </div>
                    <div className="ml-3">Users &amp; Permissions</div>
                  </a>
                  <a href className="flex items-center mt-2">
                    <div className="w-8 h-8 bg-theme-31 text-theme-26 flex items-center justify-center rounded-full"> <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="feather feather-credit-card w-4 h-4"><rect x={1} y={4} width={22} height={16} rx={2} ry={2} /><line x1={1} y1={10} x2={23} y2={10} /></svg> </div>
                    <div className="ml-3">Transactions Report</div>
                  </a>
                </div>
                <div className="search-result__content__title">Users</div>
                <div className="mb-5">
                  <a href className="flex items-center mt-2">
                    <div className="w-8 h-8 image-fit">
                      <img alt="Icewall Tailwind HTML Admin Template" className="rounded-full" src="dist/images/profile-2.jpg" />
                    </div>
                    <div className="ml-3">Sylvester Stallone</div>
                    <div className="ml-auto w-48 truncate text-gray-600 text-xs text-right">sylvesterstallone@left4code.com</div>
                  </a>
                  <a href className="flex items-center mt-2">
                    <div className="w-8 h-8 image-fit">
                      <img alt="Icewall Tailwind HTML Admin Template" className="rounded-full" src="dist/images/profile-11.jpg" />
                    </div>
                    <div className="ml-3">Johnny Depp</div>
                    <div className="ml-auto w-48 truncate text-gray-600 text-xs text-right">johnnydepp@left4code.com</div>
                  </a>
                  <a href className="flex items-center mt-2">
                    <div className="w-8 h-8 image-fit">
                      <img alt="Icewall Tailwind HTML Admin Template" className="rounded-full" src="dist/images/profile-12.jpg" />
                    </div>
                    <div className="ml-3">Hugh Jackman</div>
                    <div className="ml-auto w-48 truncate text-gray-600 text-xs text-right">hughjackman@left4code.com</div>
                  </a>
                  <a href className="flex items-center mt-2">
                    <div className="w-8 h-8 image-fit">
                      <img alt="Icewall Tailwind HTML Admin Template" className="rounded-full" src="dist/images/profile-1.jpg" />
                    </div>
                    <div className="ml-3">Nicolas Cage</div>
                    <div className="ml-auto w-48 truncate text-gray-600 text-xs text-right">nicolascage@left4code.com</div>
                  </a>
                </div>
                <div className="search-result__content__title">Products</div>
                <a href className="flex items-center mt-2">
                  <div className="w-8 h-8 image-fit">
                    <img alt="Icewall Tailwind HTML Admin Template" className="rounded-full" src="dist/images/preview-13.jpg" />
                  </div>
                  <div className="ml-3">Nikon Z6</div>
                  <div className="ml-auto w-48 truncate text-gray-600 text-xs text-right">Photography</div>
                </a>
                <a href className="flex items-center mt-2">
                  <div className="w-8 h-8 image-fit">
                    <img alt="Icewall Tailwind HTML Admin Template" className="rounded-full" src="dist/images/preview-3.jpg" />
                  </div>
                  <div className="ml-3">Nike Air Max 270</div>
                  <div className="ml-auto w-48 truncate text-gray-600 text-xs text-right">Sport &amp; Outdoor</div>
                </a>
                <a href className="flex items-center mt-2">
                  <div className="w-8 h-8 image-fit">
                    <img alt="Icewall Tailwind HTML Admin Template" className="rounded-full" src="dist/images/preview-13.jpg" />
                  </div>
                  <div className="ml-3">Sony A7 III</div>
                  <div className="ml-auto w-48 truncate text-gray-600 text-xs text-right">Photography</div>
                </a>
                <a href className="flex items-center mt-2">
                  <div className="w-8 h-8 image-fit">
                    <img alt="Icewall Tailwind HTML Admin Template" className="rounded-full" src="dist/images/preview-14.jpg" />
                  </div>
                  <div className="ml-3">Nike Air Max 270</div>
                  <div className="ml-auto w-48 truncate text-gray-600 text-xs text-right">Sport &amp; Outdoor</div>
                </a>
              </div>
            </div>
          </div>
          {/* END: Search */}
          {/* BEGIN: Notifications */}
          <div className="intro-x dropdown mr-3 sm:mr-6">
            <div className="dropdown-toggle notification notification--bullet cursor-pointer" role="button" aria-expanded="false"> <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="feather feather-bell notification__icon dark:text-gray-300"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" /><path d="M13.73 21a2 2 0 0 1-3.46 0" /></svg> </div>
            <div className="notification-content pt-2 dropdown-menu" id="_ecky5ixmu" data-popper-placement="bottom-end" style={{position: 'absolute', inset: '0px auto auto 0px', transform: 'translate(-330px, 20px)'}}>
              <div className="notification-content__box dropdown-menu__content box dark:bg-dark-6">
                <div className="notification-content__title">Notifications</div>
                <div className="cursor-pointer relative flex items-center ">
                  <div className="w-12 h-12 flex-none image-fit mr-1">
                    <img alt="Icewall Tailwind HTML Admin Template" className="rounded-full" src="dist/images/profile-2.jpg" />
                    <div className="w-3 h-3 bg-theme-10 absolute right-0 bottom-0 rounded-full border-2 border-white" />
                  </div>
                  <div className="ml-2 overflow-hidden">
                    <div className="flex items-center">
                      <a href="javascript:;" className="font-medium truncate mr-5">Sylvester Stallone</a> 
                      <div className="text-xs text-gray-500 ml-auto whitespace-nowrap">01:10 PM</div>
                    </div>
                    <div className="w-full truncate text-gray-600 mt-0.5">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 20</div>
                  </div>
                </div>
                <div className="cursor-pointer relative flex items-center mt-5">
                  <div className="w-12 h-12 flex-none image-fit mr-1">
                    <img alt="Icewall Tailwind HTML Admin Template" className="rounded-full" src="dist/images/profile-11.jpg" />
                    <div className="w-3 h-3 bg-theme-10 absolute right-0 bottom-0 rounded-full border-2 border-white" />
                  </div>
                  <div className="ml-2 overflow-hidden">
                    <div className="flex items-center">
                      <a href="javascript:;" className="font-medium truncate mr-5">Johnny Depp</a> 
                      <div className="text-xs text-gray-500 ml-auto whitespace-nowrap">01:10 PM</div>
                    </div>
                    <div className="w-full truncate text-gray-600 mt-0.5">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 20</div>
                  </div>
                </div>
                <div className="cursor-pointer relative flex items-center mt-5">
                  <div className="w-12 h-12 flex-none image-fit mr-1">
                    <img alt="Icewall Tailwind HTML Admin Template" className="rounded-full" src="dist/images/profile-12.jpg" />
                    <div className="w-3 h-3 bg-theme-10 absolute right-0 bottom-0 rounded-full border-2 border-white" />
                  </div>
                  <div className="ml-2 overflow-hidden">
                    <div className="flex items-center">
                      <a href="javascript:;" className="font-medium truncate mr-5">Hugh Jackman</a> 
                      <div className="text-xs text-gray-500 ml-auto whitespace-nowrap">01:10 PM</div>
                    </div>
                    <div className="w-full truncate text-gray-600 mt-0.5">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem </div>
                  </div>
                </div>
                <div className="cursor-pointer relative flex items-center mt-5">
                  <div className="w-12 h-12 flex-none image-fit mr-1">
                    <img alt="Icewall Tailwind HTML Admin Template" className="rounded-full" src="dist/images/profile-1.jpg" />
                    <div className="w-3 h-3 bg-theme-10 absolute right-0 bottom-0 rounded-full border-2 border-white" />
                  </div>
                  <div className="ml-2 overflow-hidden">
                    <div className="flex items-center">
                      <a href="javascript:;" className="font-medium truncate mr-5">Nicolas Cage</a> 
                      <div className="text-xs text-gray-500 ml-auto whitespace-nowrap">01:10 PM</div>
                    </div>
                    <div className="w-full truncate text-gray-600 mt-0.5">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomi</div>
                  </div>
                </div>
                <div className="cursor-pointer relative flex items-center mt-5">
                  <div className="w-12 h-12 flex-none image-fit mr-1">
                    <img alt="Icewall Tailwind HTML Admin Template" className="rounded-full" src="dist/images/profile-6.jpg" />
                    <div className="w-3 h-3 bg-theme-10 absolute right-0 bottom-0 rounded-full border-2 border-white" />
                  </div>
                  <div className="ml-2 overflow-hidden">
                    <div className="flex items-center">
                      <a href="javascript:;" className="font-medium truncate mr-5">Kevin Spacey</a> 
                      <div className="text-xs text-gray-500 ml-auto whitespace-nowrap">01:10 PM</div>
                    </div>
                    <div className="w-full truncate text-gray-600 mt-0.5">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* END: Notifications */}
          {/* BEGIN: Account Menu */}
          <div className="intro-x dropdown w-8 h-8">
            <div className="dropdown-toggle w-8 h-8 rounded-full overflow-hidden shadow-lg image-fit zoom-in scale-110" role="button" aria-expanded="false">
              <img alt="Icewall Tailwind HTML Admin Template" src="dist/images/profile-14.jpg" />
            </div>
            <div className="dropdown-menu w-56" id="_u9jtxm1t6">
              <div className="dropdown-menu__content box bg-theme-11 dark:bg-dark-6 text-white">
                <div className="p-4 border-b border-theme-12 dark:border-dark-3">
                  <div className="font-medium">Sylvester Stallone</div>
                  <div className="text-xs text-theme-13 mt-0.5 dark:text-gray-600">DevOps Engineer</div>
                </div>
                <div className="p-2">
                  <a href className="flex items-center block p-2 transition duration-300 ease-in-out hover:bg-theme-1 dark:hover:bg-dark-3 rounded-md"> <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="feather feather-user w-4 h-4 mr-2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx={12} cy={7} r={4} /></svg> Profile </a>
                  <a href className="flex items-center block p-2 transition duration-300 ease-in-out hover:bg-theme-1 dark:hover:bg-dark-3 rounded-md"> <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="feather feather-edit w-4 h-4 mr-2"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" /><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" /></svg> Add Account </a>
                  <a href className="flex items-center block p-2 transition duration-300 ease-in-out hover:bg-theme-1 dark:hover:bg-dark-3 rounded-md"> <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="feather feather-lock w-4 h-4 mr-2"><rect x={3} y={11} width={18} height={11} rx={2} ry={2} /><path d="M7 11V7a5 5 0 0 1 10 0v4" /></svg> Reset Password </a>
                  <a href className="flex items-center block p-2 transition duration-300 ease-in-out hover:bg-theme-1 dark:hover:bg-dark-3 rounded-md"> <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="feather feather-help-circle w-4 h-4 mr-2"><circle cx={12} cy={12} r={10} /><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" /><line x1={12} y1={17} x2="12.01" y2={17} /></svg> Help </a>
                </div>
                <div className="p-2 border-t border-theme-12 dark:border-dark-3">
                  <a href className="flex items-center block p-2 transition duration-300 ease-in-out hover:bg-theme-1 dark:hover:bg-dark-3 rounded-md"> <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="feather feather-toggle-right w-4 h-4 mr-2"><rect x={1} y={5} width={22} height={14} rx={7} ry={7} /><circle cx={16} cy={12} r={3} /></svg> Logout </a>
                </div>
              </div>
            </div>
          </div>
          {/* END: Account Menu */}
        </div>
      </div>
      </Fragment>    
    )
}
export default Header;