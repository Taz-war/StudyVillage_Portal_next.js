import React, {useEffect, useState} from "react";
import Sidebar from "../../components/Shared/Sidebar/Sidebar";
import NavbarCounsellor from "../../components/Shared/Navbar/Navbar-Counsellor";

const Resources = () => {

  return (
    <>
      <NavbarCounsellor />
      <div class="main-root">
        <Sidebar />
        <div className="main-content">
          <div className="content-wrapper">
          
            {/* marketing-resources */}
            <div className="marketing-res white-box">
            <h4>StudyVillage Representatives Promotional Resources</h4>

            <p>The resources below will assist you understand and promote StudyVillage programs and build your business. The Sales Kit and FAQ Guide also helps explain how use each resource.  You’ll note, most of the explainer videos are available to our agents and enrolled students and their parents.  ‘The Guide’ is a comprehensive description to the Happy, Healthy & Wise program.  We will continue to add new resources to this page. </p>
            <div className = "col-sm-8 mx-auto">
            <table style={{width: '1000px'}} className = "table-res table table-striped table-bordered">
            <colgroup>
              <col colspan="1" style = {{ width: "30%" }}></col>
              <col colspan="1" style = {{ width: "30%" }}></col>
              <col span="1" style = {{ width: "30%" }}></col>
            </colgroup>
                        <thead>
                          <tr className = "table-sv">
                            <td style = {{ width: "35%" }}>Promotional Tools</td>
                            <td>Instructional Guides for Students & Agents</td>
                            <td>Agent Resources</td>
                          </tr>
                        </thead>
                        <tbody>
                        <tr>
                        <td  style = {{ width: "35%" }}><a href = "https://workdrive.zohoexternal.com/external/caa05ee22bafdbe8ac225f369c2692daa062acac6c431e7535a07f556e7ff99c" target="_blank" rel="noreferrer noopener">Parents Brochure</a><br/><i>PDF Format for sharing with Parents</i></td>
                        <td><a href = "https://workdrive.zohoexternal.com/external/100c3ce41b4040750f029b96181b52fd944b0ab61250c3febb073d2b71ed5fbb">Happy, Healthy & Wise Overview Video</a><br/><i>A quick overview/program explainer on video</i></td>
                        <td>Counsellor Training<br/><i>Certificate course for counsellors to become StudyVillage experts!</i></td>
                        </tr>
                        <tr>
                        <td  style = {{ width: "35%" }}><a href="https://workdrive.zohoexternal.com/external/2c64a613e7be273182689ddd14d6f266c4c147c1884136617104e8d144835a20" target="_blank" rel="noreferrer noopener">Parents Video Explainer</a><br/><i>Video format for sharing with parents</i></td>
                        <td><a href="https://workdrive.zohoexternal.com/external/e6ed5e8f928e8dee16ad0289ebbf0378533a63b5b6375cd03f767e55a10d7a55" target="_blank" rel="noreferrer noopener">StudyVillage Student Guide</a><br/><i>Everything a student needs to know about their StudyVillage Program –  A handy reference in PDF format</i></td>
                        <td><a href="https://workdrive.zohoexternal.com/external/878bbb7950079043a3649ffe04662085a4762f6f317db8650963b784cd5031ac" target="_blank" rel="noreferrer noopener">Parent FAQs</a><br/><i>Typical parent questions answered</i></td>
                        </tr>
                        <tr>
                        <td  style = {{ width: "35%" }}><a href = "https://workdrive.zohoexternal.com/external/54321a0814823f6a7e0570356e7fb2183710fede08d0e574cff4d9ec189365d6" target="_blank" rel="noreferrer noopener">Sales Kit & FAQs</a><br/><i>Scripts and guides to talking about StudyVillage</i></td>
                        <td><a href = "https://workdrive.zohoexternal.com/external/bcd0c2132dc49ddabb52108b34a99ff170372867be708429d9fba6aa327fcf05" target="_blank" rel="noreferrer noopener">Your Student Supporter</a><br/><i>A quick video explainer</i></td>
                        <td>Interacting with StudyVillage<br/><i>A quick guide to the portal and working with the team</i></td>
                        </tr>
                        <tr>
                        <td  style = {{ width: "35%" }}><a href = "https://workdrive.zohoexternal.com/external/54321a0814823f6a7e0570356e7fb2183710fede08d0e574cff4d9ec189365d6" target="_blank" rel="noreferrer noopener">Parrent Letter</a><br/><i>A letter from your agency introducing StudyVillage. Amend the text and place your logo over the top.</i></td>  
                        <td><a href = "https://workdrive.zohoexternal.com/external/34488db5b29e697f7b5f22e57814a76e1c082db13f18d54d20acd991199a0a38" target="_blank" rel="noreferrer noopener">Open Hours</a><br/><i>A quick video explainer</i></td>
                        <td><a href = "https://workdrive.zohoexternal.com/external/5e78a200d1c81e475307a19c36c7ce515da9edfed56ed6d39cbc0d70228e2901" target="_blank" rel="noreferrer noopener">Portal Intro and Meeting Family Instructions</a><br/><i>A training video explaining the Meeting the Family component to each module</i></td>
                        </tr>
                        <tr>
                        <td  style = {{ width: "35%" }}><a href = "https://workdrive.zohoexternal.com/external/dd32c97010477f95b77ad1398d44fd6150ddbb217731b7d4765ba566c89695f4" target="_blank" rel="noreferrer noopener">Resolve Magazine</a><br/><i>PDF format for sharing with student & parents</i></td>
                        
                        <td><a href="https://workdrive.zohoexternal.com/external/0dc7c2094014beb9fe7dc76a508de2a7473d33f577c22cb55a0dbf5a866c8d37" target="_blank" rel="noreferrer noopener">Connectivity & Independence</a><br/><i>A quick video explainer</i></td>
                        <td></td>
                        </tr>
                        <tr>
                        <td  style = {{ width: "35%" }}><a href="https://studyvillage.org/register-aus-prep/" target="_blank" rel="noreferrer noopener">Australia PREP</a><br/><i>Free Pre-departure courseware for your Australia-bound student</i></td>
                        
                        <td><a href="https://workdrive.zohoexternal.com/external/15a6a27003ca670b41f1bc36b92d1632e738266bc7f6a768def9911127fee71d" target="_blank" rel="noreferrer noopener">Self-surveys</a><br/><i>A quick video explainer</i></td>
                        <td></td>
                        </tr>
                        <tr >
                        <td  style = {{ width: "35%" }}><a href="https://studyvillage.org/register-for-uk-prep/" target="_blank" rel="noreferrer noopener">UK PREP</a><br/><i>Free Pre-departure courseware for your UK-bound student</i></td>
                        
                        <td><a href = "https://workdrive.zohoexternal.com/external/07ec9ad35dcf172ccc45f93519fbbbe80f6b680372cbb895ab01d0bce747a424" target="_blank" rel="noreferrer noopener"></a>Settling In<br/><i>A quick video explainer</i></td>
                        <td></td>
                        </tr>
                        <tr>
                        <td  style = {{ width: "35%" }}><a href="https://studyvillage.org/register-ca-prep/" target="_blank" rel="noreferrer noopener">Canada PREP</a><br/><i>Free Pre-departure courseware for your Canada-bound student</i></td>
                        
                        <td><a href="https://workdrive.zohoexternal.com/external/fbee00707fcf237916f5e5e797c98a040170d1c547922a53eaebf820f05a7d41" target="_blank" rel="noreferrer noopener">Consolidating Studies</a><br/><i>A quick video explainer</i></td>
                        <td></td>
                        </tr>
                        <tr>
                        <td  style = {{ width: "35%" }}><a href ="https://workdrive.zohoexternal.com/external/562e2558ddc5732efb7a582faa61e97154ac95298dd7ccc42ed530498bbf057d" target="_blank" rel="noreferrer noopener">StudyVillage Slidedeck</a><br/><i>Powerpoint Slides for Student/Parents</i></td>
                        
                        <td><a href="https://workdrive.zohoexternal.com/external/420dd5ff376c5dc076fa41292f4390c7fee46fbb427a828384271cc153c14ac4" target="_blank" rel="noreferrer noopener">Tracking Progress</a><br/><i>A quick video explainer</i></td>
                        <td></td>
                        </tr>
                        <tr>
                        <td  style = {{ width: "35%" }}><a href = "https://workdrive.zohoexternal.com/external/7564738b3f927294105fcba624aa29ad744cf51872ab5a28fd9e2ca98c4391ae" target="_blank" rel="noreferrer noopener">Sample Modules</a><br/><i>Consolidating studies explained in a 5 minute video</i></td>
                        
                        <td><a href="https://workdrive.zohoexternal.com/external/56f87abf8f85587e169e1833374586caede37458acf0fd9801fe16a18082ccd1" target="_blank" rel="noreferrer noopener">Goal Setting</a><br/><i>A quick video explainer</i></td>
                        <td></td>
                        </tr>
                        <tr>
                        <td  style = {{ width: "35%" }}><a href="https://studyvillage.org/why" rel="noreferrer noopener" target="_blank">The “Why File” </a><br/><i>A new model to deal with an enduring challenge –a quick explainer</i></td>
                        
                        <td><a href="https://workdrive.zohoexternal.com/external/536b1a674fb7de4da4301721a49735a342336313dee8e306309d45e61fe449c5" target="_blank" rel="noreferrer noopener">Goal Setting B</a><br/><i>A quick video explainer</i></td>
                        <td></td>
                        </tr>
                        <tr>
                        <td  style = {{ width: "35%" }}><a href="https://studyvillage.org/story" rel="noreferrer noopener" target="_blank">The StudyVillage Backstory<br/></a><i>How we came to be</i></td>
                        <td><a href = "https://workdrive.zohoexternal.com/external/2a775366d0f7ad2c4f9d5adda0a9033b9c68b383eee5ead042ed15446fc22ac7" target="_blank" rel="noreferrer noopener">Goaltracking</a><br/><i>A quick video explainer</i></td>
                        <td></td>
                        </tr>
                        <tr>
                        <td  style = {{ width: "35%" }}></td>
                        <td><a href = "https://workdrive.zohoexternal.com/external/e4103febc8f8153932a47c0853469ee8317f75838327230b8fc3d9db810bab28" target="_blank" rel="noreferrer noopener">Transition</a><br/><i>A quick video explainer</i></td>
                        <td></td>
                        </tr>
                        <tr>
                          <td></td>
                          <td><a href = "https://workdrive.zohoexternal.com/external/8040399fcb1e276492caba6ed1477be044eb1fd65edf307d7754e15ea6850eb5" target="_blank" rel="noreferrer noopener">Accelerator A</a><br/><i>A quick video explainer</i></td>
                          <td></td>
                        </tr>
                        <tr>
                          <td></td>
                          <td>Accelerator B<br/><i>A quick video explainer</i></td>
                          <td></td>
                        </tr>
                        <tr>
                          <td></td>
                          <td><a href = "https://workdrive.zohoexternal.com/external/60c42e4df04038d1ae672f9e0df5c4cacba66b67657e9f18231ec57b674239ce" target="_blank" rel="noreferrer noopener"></a>ELICOS A<br/><i>A quick video explainer</i></td>
                          <td></td>
                        </tr>
                        <tr>
                          <td></td>
                          <td><a href = "https://workdrive.zohoexternal.com/external/c0c97554f24063539312709dfb71d17536f629bafbbdbd62990c68e70e6cbc8d" target="_blank" rel="noreferrer noopener">ELICOS B</a><br/><i>A quick video explainer</i></td>
                          <td></td>
                        </tr>
                        <tr>
                          <td></td>
                          <td>ELICOS C<br/><i>A quick video explainer</i></td>
                          <td></td>
                        </tr>
                        <tr>
                          <td></td>
                          <td>ELICOS D<br/><i>A quick video explainer</i></td>
                          <td></td>
                        </tr>
                        <tr>
                          <td></td>
                          <td>ELICOS E<br/><i>A quick video explainer</i></td>
                          <td></td>
                        </tr>
                        </tbody>   
                  </table>
            </div>
          </div> 
          </div>
        </div>
      </div>
    </>
  );
};

export default Resources;
