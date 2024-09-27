import { useState } from "react";
import { TbMenu2 } from "react-icons/tb";
import { RxCross1 } from "react-icons/rx";
const Navbar = () => {

    const [isOpen, setIsopen] = useState(false);
  

  
    const ToggleSidebar = () => {
      isOpen === true ? setIsopen(false) : setIsopen(true);
    };

  return (
    <>
    <div className='container-fluid py-4 navbar-container d-lg-block d-none'>
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="d-flex align-items-center gap-5">
              <div>
                <h4>
                  <a href="#" className="logo-text">
                    Brainwave.io
                  </a>
                </h4>
              </div>
              <div>
                <ul className="list-unstyled d-flex gap-3">
                  <li>
                    <a href="#" className="nav-links">
                      Demo
                    </a>
                  </li>
                  <li>
                    <a href="#" className="nav-links">
                      Pages
                    </a>
                  </li>
                  <li>
                    <a href="#" className="nav-links">
                      Support
                    </a>
                  </li>
                  <li>
                    <a href="#contact" className="nav-links">
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="d-flex justify-content-end align-items-center">
              <button className="main-btn">Get started a project</button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="container-fluid py-4 navbar-container d-lg-none d-block'">
      <div className="container">
        <div className="row">
          <div className="col-6">
            <div className="d-flex align-items-center gap-5">

            <span onClick={ToggleSidebar}>
                <TbMenu2 size="32"  />
              </span>

              <div>
                <h4>
                  <a href="#" className="logo-text">
                    Brainwave.io
                  </a>
                </h4>
              </div>


              
            </div>
          </div>
          <div className="col-6 d-none d-sm-block">
            <div className="d-flex justify-content-end align-items-center">
              <button className="main-btn">Get started a project</button>
            </div>
          </div>
        </div>




        <div className={`sidebar ${isOpen == true ? "active" : ""}`}>
            <div className="sd-header">
            <div>
                <h4>
                  <a href="#" className="logo-text text-white">
                    Brainwave.io
                  </a>
                </h4>
              </div>

              <div
                
                onClick={ToggleSidebar}
              >
                <span><RxCross1 color="#FFF"/></span>
                
              </div>
            </div>
            <div className="sd-body">
              <ul>
                <li>
                  <a
                    href="#"
                    className="nav-links text-white"
                    onClick={() => {
                        setIsopen(false);
                      }}
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="nav-links text-white"
                     onClick={() => {
                      setIsopen(false);
                    }}
                  >
                    Demo
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="nav-links text-white"
                    // href="javascript:void(0)"
                    onClick={() => {
                        setIsopen(false);
                      }}
                  >
                    Pages
                  </a>
                </li>

                <li>
                  <a 
                  href="#"
                    className="nav-links text-white"
                    onClick={() => {
                        setIsopen(false);
                      }}

                  >
                    Support
                  </a>
                </li>

                

                <li>
                  <a
                   href="#contact"
                    className="nav-links text-white"
                    // href="javascript:void(0)"
                    onClick={() => {
                      setIsopen(false);
                    }}
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            {/* <div className="sd-bodyfooter">
              <div>
                <button className="main-btn">Get started a project</button>
              </div>
            </div> */}
          </div>

          <div
            className={`sidebar-overlay ${isOpen == true ? "active" : ""}`}
            onClick={ToggleSidebar}
          ></div>

      </div>
    </div>
    </>
  );
};

export default Navbar;
