import React from "react";
import Sidebar from "../../components/Shared/Sidebar/Sidebar";
import infined from "../../assets/agents/img/Infined.jpg";
import Image from "next/image";
import NavbarCounsellor from "../../components/Shared/Navbar/Navbar-Counsellor";
const AgentContact = () => {
 
  return (
    <>
      <NavbarCounsellor />
      <div class="main-root">
        <Sidebar />
        <div className="main-content">
          <div className="content-wrapper">
            <div className="contact-box-wrapper">
              <div className="row">
                <div className="col-lg-5 col-md-12" >
                  <div style={{ minHeight: '50vh' }} className="contact-box white-box theme-box d-flex">
                    <div className="contact-img">
                      <Image
                        width={150}
                        height={150}
                        src={infined}
                        alt="icon"
                      />
                    </div>
                    <div className="contact-text">
                      <div className="contact-heade">
                        <h4>Contact StudyVillage</h4>
                        <p>
                          Glen Meehan <br></br> Your StudyVillage Operation Manager in
                          Australia
                        </p>
                      </div>
                      <div className="contact-list">
                        <ul>
                          <li>
                            Mobile and WhatsApp:{" "}
                            <a>+61 411 251 535</a>
                          </li>
                          <li>
                            Email:{" "}
                            <a href="mailto:samwinch@studyvillage.org">
                              glenmeehan@studyvillage.org
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-5 col-md-12">
                  
                </div>
              </div>
            </div>

            <div className="contact-students">
             
            </div>

            
          </div>
        </div>
      </div>
    </>
  );
};

export default AgentContact;
