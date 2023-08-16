import Sidebar from "../../components/Shared/Sidebar/Sidebar";
import Carousel from 'react-bootstrap/Carousel'
import watch1 from "../../assets/agents/img/watch1.JPG"
import sleft from '../../assets/agents/img/leftthick.png'
import sright from '../../assets/agents/img/rightthick.png'
import M1 from '../../assets/img/M1-Settling-In.png'
import M2 from '../../assets/img/M2-Consolidating-Studies.png'
import M3 from '../../assets/img/M3-Tracking-Progressp1.png'
import M4 from '../../assets/img/M4-Goalsettingp1.png'
import M5 from '../../assets/img/M5-GoalTrackingp1.png'
import M6 from '../../assets/img/M6-Transitionp1.png'
import M7 from '../../assets/img/M7-Acceleratorap1.png'
import M8 from '../../assets/img/M8-Acceleratorbp1.png'
import M9 from '../../assets/img/M9-GoalSettingbp1.png'
import ELIA from '../../assets/img/ELICOSAp1.png'
import ELIB from '../../assets/img/ELICOSBp1.png'
import ELIC from '../../assets/img/ELICOSCp1.png'
import ELID from '../../assets/img/ELICOSDp1.png'
import ELIE from '../../assets/img/ELICOSEp1.png'


import Image from "next/image";
import NavbarCounsellor from "../../components/Shared/Navbar/Navbar-Counsellor";

const Outline = () => {

  const arrowLeft = <span ><Image width ={"70%"} height = {"70%"} src={sleft}/></span>
  const arrowRight = <span ><Image width ={"70%"} height = {"70%"} src={sright}/></span>

  const pdfWidth = 350
  const pdfHeight = 500

  const buttonWidth = 350
  const buttonHeight = 45

  const SliderContent = [
    {
      src: M1,
      link: "https://workdrive.zohoexternal.com/external/5e86ac8a93dc4c4205dd2ce191085bff86b46bb41278a20739640c5496c52789",
      width: pdfWidth,
      height: pdfHeight,
      bWidth: buttonWidth,
      bHeight: buttonHeight,
      btSrc: watch1,
      linkVideo: "https://workdrive.zohoexternal.com/file/ls9ku76939f6f09f84571b7457631ec93261e"
    },
    {
      src: M2,
      link: "https://workdrive.zohoexternal.com/external/5e86ac8a93dc4c4205dd2ce191085bff86b46bb41278a20739640c5496c52789",
      width: pdfWidth,
      height: pdfHeight,
      bWidth: buttonWidth,
      bHeight: buttonHeight,
      btSrc: watch1,
      linkVideo: "https://workdrive.zohoexternal.com/file/pgvxh6019d732109740a18398c60ef332945a"

    },
    {
      src: M3,
      link: "https://workdrive.zohoexternal.com/external/c08c50f847d9edcd568788efad21eaa6b2b6b6f2f0a824a550c54c4d22eee999",
      width: pdfWidth,
      height: pdfHeight,
      bWidth: buttonWidth,
      bHeight: buttonHeight,
      btSrc: watch1,
      linkVideo: "https://workdrive.zohoexternal.com/file/pgvxh99d78d1537964cd7bd8ae69cc3584c70"

    },
    {
      src: M4,
      link: "https://workdrive.zohoexternal.com/external/c965db67b2b9ec30cd69de4267088de60503c6d89333153cd80e38af793b8e66",
      width: pdfWidth,
      height: pdfHeight,
      bWidth: buttonWidth,
      bHeight: buttonHeight,
      btSrc: watch1,
      linkVideo: "https://workdrive.zohoexternal.com/file/ls9ku5e068af3a9194b4e92cbd4f7554d72e2"

    },
    {
      src: M5,
      link: "https://workdrive.zohoexternal.com/external/1377b0ffb383d319e27082f9316f789da84febf6d85723107704548368e6f759",
      width: pdfWidth,
      height: pdfHeight,
      bWidth: buttonWidth,
      bHeight: buttonHeight,
      btSrc: watch1,
      linkVideo: "https://workdrive.zohoexternal.com/file/ls9kub40e617113574be49c5c7195b283db98"

    },
    {
      src: M6,
      link: "https://workdrive.zohoexternal.com/external/8f3b6fae0f00a457ceee5b39a985cf07765122903f2d783ba30cd097f42dc4af",
      width: pdfWidth,
      height: pdfHeight,
      bWidth: buttonWidth,
      bHeight: buttonHeight,
      btSrc: watch1,
      linkVideo: "https://workdrive.zohoexternal.com/file/ls9ku7e918a7dd55744b294c99f5d6bbdfa3f"

    },
    {
      src: M7,
      link: "https://workdrive.zohoexternal.com/external/703c3dc7e7a3cce5b3cf5db14a64e3be2162d91d6164e6dd1fab9e27c6236a22",
      width: pdfWidth,
      height: pdfHeight,
      bWidth: buttonWidth,
      bHeight: buttonHeight,
      btSrc: watch1,
      linkVideo: "https://workdrive.zohoexternal.com/file/ls9ku382774a5d1e944e49954ccedf7cf3401"

    },
    {
      src: M8,
      link: "https://workdrive.zohoexternal.com/external/402381873032717a332176ba345fe8f0a7d8c14bc4294c9c4c52f289afbac962",
      width: pdfWidth,
      height: pdfHeight,
      bWidth: buttonWidth,
      bHeight: buttonHeight,
      btSrc: watch1

    },
    {
      src: M9,
      link: "https://workdrive.zohoexternal.com/external/7f9aef9bce9bafbc7fd8e1d2219682040e6e063ebb85eee8aa172566c139cb4e",
      width: pdfWidth,
      height: pdfHeight,
      bWidth: buttonWidth,
      bHeight: buttonHeight,
      btSrc: watch1,
      linkVideo: "https://workdrive.zohoexternal.com/file/pgvxhe3790b53d4d84885b84caaf2f8896937"

    },
    {
      src: ELIA,
      link: "https://workdrive.zohoexternal.com/external/93dcd27c59c6b6306470a98e669d13528af98ad8882c3225a4e69ec4028b5971",
      width: pdfWidth,
      height: pdfHeight,
      bWidth: buttonWidth,
      bHeight: buttonHeight,
      btSrc: watch1,
      linkVideo: "https://workdrive.zohoexternal.com/file/ls9ku309377a3b042455cb4c0f73f1f5a18ac"

    },
    {
      src: ELIB,
      link: "https://workdrive.zohoexternal.com/external/58a274fbffc16dbd6239c614286593d13b87a85578d27a02c1787eeb4a0f0e3f",
      width: pdfWidth,
      height: pdfHeight,
      bWidth: buttonWidth,
      bHeight: buttonHeight,
      btSrc: watch1,
      linkVideo: "https://workdrive.zohoexternal.com/file/ls9ku425c49897fde4110b7d429b801bffb01"


    },
    {
      src: ELIC,
      link: "https://workdrive.zohoexternal.com/external/dfda9aba7389124831ee0281e2f2e0c8278f4595f0011d3b7a0c399d47ab3689",
      width: pdfWidth,
      height: pdfHeight,
      bWidth: buttonWidth,
      bHeight: buttonHeight,
      btSrc: watch1,
      linkVideo: ""


    },
    {
      src: ELID,
      link: "https://workdrive.zohoexternal.com/external/6149fbdfe678da332f657f58da90cd754416bd4a6df8a392b6abec9ddda1d969",
      width: pdfWidth,
      height: pdfHeight,
      bWidth: buttonWidth,
      bHeight: buttonHeight,
      btSrc: watch1,
      linkVideo: ""


    },
    {
      src: ELIE,
      link: "https://workdrive.zohoexternal.com/external/8afe8d42af547f1fa8df3979326ae58137b20a073815554e7df68c14d9d1dc89",
      width: pdfWidth,
      height: pdfHeight,
      bWidth: buttonWidth,
      bHeight: buttonHeight,
      btSrc: watch1,
      linkVideo: ""


    }
    
  ]

  return (
    <>
      <NavbarCounsellor />
      <div class="main-root">
        <Sidebar />
        <div className="main-content">
          <div className="content-wrapper">
          
            {/* marketing-resources */}
            <div className="marketing-res white-box">
            <h4>Happy Healthy & Wise sample modules</h4>

            <p>Each of the Following modules form part of a student’s Happy, Healthy & Wise outline. Remember, program length – counted in semesters - determines the number and sequence of modules.  These are described in detail the Resources information. Click on the image to see the relevant module in more detail, or click the button below to watch an explainer video.  There’s much more information available in the Resources section of this portal, and these resources are explained in the StudyVillage Selling Kit and FAQs. 
</p>
            <div className = "row">
                <div className = "col-sm-2">

                </div>
                <div className = "col-sm-8">
                <Carousel prevIcon={arrowLeft} nextIcon = {arrowRight} style={{ height: "40vh", marginTop: "10%", marginBottom: "50%" }}>
                {
                  SliderContent.map((slides)=>{
                    return(
                      <Carousel.Item style = {{ marginLeft: "25%"}}>
                        <div className = "row">
                          <div className = "col-sm-12">
                            <a target="_blank" rel="noreferrer noopener" href = {slides.link}>
                              <Image
                                width ={slides.width}
                                height = {slides.height}
                                src={slides.src}
                                alt="First Slide"
                                />
                            </a>
                          </div>
                          <div className = "col-sm-12">
                          <a style = {{ width: "100%"}} href = {slides.linkVideo} target="_blank" rel="noreferrer noopener" ><Image width={slides.bWidth} height={slides.bHeight} src={watch1}/></a>
                          </div>
                        </div>
                    </Carousel.Item>
                    )
                  })
                }
                    
                  </Carousel>
                </div>
                <div className = "col-sm-2">
                    
                </div>
            </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Outline;
