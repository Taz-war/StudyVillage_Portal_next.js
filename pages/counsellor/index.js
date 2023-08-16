import React, { useEffect, useState } from "react";
import Sidebar from "../../components/Shared/Sidebar/Sidebar";
import useTrackedStore from "../../store/useTrackedStore";
import { getSession } from "next-auth/client";
import * as cookie from "cookie";
import axios from "axios";
import _ from "lodash";
import moment from "moment";
import {
  styled,
  Table,
  TableBody,
  TableCell,
  tableCellClasses,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  Typography,
} from "@mui/material";
import SocialMediaLinksAgent from "../../components/SocialMediaLinks/SocialMediaLinksAgent";
import NavbarCounsellor from "../../components/Shared/Navbar/Navbar-Counsellor";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: "#EEEEEE",
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

const AgentDashboard = ({ portalUserResp, agentsResp, studentsResp }) => {
  const state = useTrackedStore();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(
    state?.studentsResp?.length < 25 ? state?.studentsResp?.length : 25
  );

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const emptyRows =
    page > 0
      ? Math.max(0, (1 + page) * rowsPerPage - state?.studentsResp?.length)
      : 0;

  state.setAgentsResp(agentsResp);
  state.setPortalUserResp(portalUserResp);
  state.setStudentsResp(studentsResp);

  // return <>Internal Server Error, Please check with Administrator</>;
  return (
    <>
      <NavbarCounsellor />
      <div class="main-root">
        <Sidebar />
        <div className="main-content">
          <div className="content-wrapper">
            <div className="content-title">
              <Typography sx={{ fontSize: "20px", fontWeight: "bold" }}>
                Welcome to your StudyVillage Portal for Representative
              </Typography>
            </div>
            <div className="row" style={{ marginTop: "2%" }}>
              <div className="col-md-5 apply-section">
                <a
                  href={`https://forms.zohopublic.com/studyvillage/form/C1StudyVillageprogramapplicationforAgentPortal/formperma/avLZwfvjgtvfVp_2V4H7S9qlY2W2IGwI4OwlVVStMfs?id=${state?.agentsResp?.[0]?.Crm_ID}`}
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <button className="applyBtn">APPLY FOR STUDYVILLAGE</button>
                </a>
              </div>
              <div
                className="col-md-6"
                style={{
                  borderRadius: "10px",
                  padding: "20px 15px",
                  backgroundColor: "white",
                  boxShadow: "0px 10px 22px rgba(0, 0, 0, 0.1)",
                }}
              >
                <Typography
                  sx={{ fontSize: "26px", fontWeight: "bold", mt: 2 }}
                >
                  StudyVillage News Feed
                </Typography>
                <Typography
                  sx={{ fontSize: "16px", fontWeight: "bold", my: 1.8 }}
                >
                  June 2022
                </Typography>
                <Typography sx={{ color: "#4E4E4E", lineHeight: 1.5 }}>
                  StudyVillage is expanding beyond its pilot group of agents and
                  now has representatives in 9 countries throughout the world.
                  We are working with a number of institutional partners,
                  including the Sri Lankan government, to drastically improve
                  the international student experience. Watch this space, your
                  portal will be regularly updated with a series of new tools to
                  improve the student experience. We'll inform of you of key
                  updates via email.
                </Typography>
              </div>
            </div>

            <div className="card-block-area">
              <div style={{ width: "200%" }}></div>
            </div>
            <div className="register-lead-area d-grid"></div>
            <Typography sx={{ fontSize: "20px", fontWeight: "bold" }}>
              Your StudyVillage Students
            </Typography>
            <TableContainer
              sx={{
                borderRadius: "10px",
                bgcolor: "white",
                boxShadow: "0px 10px 22px rgba(0, 0, 0, 0.1)",
              }}
            >
              <Table
                sx={{ minWidth: 750, my: 2 }}
                aria-labelledby="tableTitle"
                size="medium"
              >
                <TableHead>
                  <StyledTableRow>
                    <StyledTableCell
                      sx={{ borderRadius: "10px 0 0 0" }}
                      align="center"
                    >
                      Name
                    </StyledTableCell>
                    <StyledTableCell align="center">Country</StyledTableCell>
                    <StyledTableCell align="center">University</StyledTableCell>
                    <StyledTableCell align="center">Start Date</StyledTableCell>
                    <StyledTableCell align="center">
                      Estimated End Date
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      Total Semester
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      Email Address
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      Contact Number
                    </StyledTableCell>
                    <StyledTableCell
                      sx={{ borderRadius: "0 10px 0 0" }}
                      align="center"
                    >
                      Status
                    </StyledTableCell>
                  </StyledTableRow>
                </TableHead>

                <TableBody>
                  {state?.studentsResp.length === 0 ||
                  state?.studentsResp ===
                    "Request failed with status code 401" ? (
                    <div>You currently don't have any students registered</div>
                  ) : (
                    state?.studentsResp
                      .slice(
                        page * rowsPerPage,
                        page * rowsPerPage + rowsPerPage
                      )
                      .map((student, index) => {
                        const labelId = `enhanced-table-checkbox-${index}`;

                        return (
                          <StyledTableRow
                            hover
                            tabIndex={-1}
                            key={student.index}
                          >
                            <StyledTableCell
                              align="center"
                              component="th"
                              id={labelId}
                              scope="row"
                              padding="none"
                            >
                              {student.Full_Name}
                            </StyledTableCell>
                            <StyledTableCell align="center">
                              {student.Nationality}
                            </StyledTableCell>
                            <StyledTableCell align="center">
                              {student.Institution}
                            </StyledTableCell>
                            <StyledTableCell align="center">
                              {student.Institution_Semester_start_date &&
                                moment(
                                  student.Institution_Semester_start_date
                                ).format("DD-MM-YYYY")}
                            </StyledTableCell>
                            <StyledTableCell align="center">
                              {student.Estimated_Completion_date &&
                                moment(
                                  student.Estimated_Completion_date
                                ).format("DD-MM-YYYY")}
                            </StyledTableCell>
                            <StyledTableCell align="center">
                              {
                                student.How_many_total_semesters_will_this_course_take_to
                              }
                            </StyledTableCell>
                            <StyledTableCell align="center">
                              {student.Email}
                            </StyledTableCell>
                            <StyledTableCell align="center">
                              {student.Phone}
                            </StyledTableCell>
                            <StyledTableCell align="center"></StyledTableCell>
                          </StyledTableRow>
                        );
                      })
                  )}
                  {emptyRows > 0 && (
                    <TableRow
                      style={{
                        height: 53 * emptyRows,
                      }}
                    >
                      <TableCell colSpan={6} />
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            </TableContainer>

            <TablePagination
              sx={{ my: 2 }}
              rowsPerPageOptions={[]}
              component="div"
              count={state?.studentsResp.length}
              rowsPerPage={rowsPerPage}
              page={page}
              onPageChange={handleChangePage}
            />
            <SocialMediaLinksAgent />
          </div>
        </div>
      </div>
    </>
  );
};

export default AgentDashboard;

export async function getServerSideProps(context) {
  const session = await getSession(context);

  console.log({ sessionData: session });

  const parsedCookies = cookie.parse(context.req.headers.cookie || "");

  // if seesion not found then navigate him to the login
  if (!session) {
    return {
      redirect: {
        destination: "/login",
      },
      props: {
        session: null,
      },
    };
  }

  // when user sign in using credential provider and uncheck the remember option
  if (session && session.remember === false) {
    // when the user signin first time, remember variable in cookie will be empty but session variable will contain exp thats why we have to check it first
    let expired = Date.now() > (parsedCookies.expiredTime ?? session.exp);

    if (expired) {
      //remove remember from cookie
      if (parsedCookies.expiredTime) {
        context.res.setHeader(
          "Set-Cookie",
          cookie.serialize("expiredTime", String(parsedCookies.expiredTime), {
            httpOnly: true,
            maxAge: 0,
          })
        );
      }
      return {
        redirect: {
          destination: "/login",
        },
        props: {
          session: null,
        },
      };
    }
  }
  //* Everyting is now OK, do your additional Code Here
  let portalUserResp = {};
  let studentsResp = [];
  let agentsResp = [];
  const {
    data: { access_token: accessToken },
  } = await axios.get(process.env.ACCESSTOKEN_URL);

  // //todo Fetching Portal User Details
  const { data: portResp } = await axios.post(
    `${process.env.NEXTAUTH_URL}/api/getZohoData`,
    {
      moduleApiName: "Portal_Users",
      criteria: `(Email:equals:${session?.user?.email})`,
    }
  );
  portalUserResp = portResp?.data?.[0];

  // //todo FetchingAgents Details
  if (portalUserResp.Agent_Primary_Email) {
    const { data: agentResp } = await axios.post(
      `${process.env.NEXTAUTH_URL}/api/getZohoData`,
      {
        moduleApiName: "Agents1",
        criteria: `(Email:equals:${portalUserResp.Agent_Primary_Email})`,
      }
    );
    agentsResp = agentResp?.data;
  }

  if (agentsResp?.[0]?.id) {
    const { data: stuResp } = await axios.post(
      `${process.env.NEXTAUTH_URL}/api/getZohoData`,
      {
        moduleApiName: "Contacts",
        criteria: `(Agent_Name:equals:${agentsResp?.[0]?.id})`,
      }
    );
    studentsResp = stuResp?.data !== undefined ? stuResp?.data : [];
  }
  return {
    props: {
      portalUserResp,
      agentsResp,
      studentsResp,
    },
  };
}
