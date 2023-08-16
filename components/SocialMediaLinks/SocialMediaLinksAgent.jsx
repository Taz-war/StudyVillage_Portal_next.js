import fb from "../../assets/img/facebook-fix-green.svg";
import supportImg from "../../assets/agents/img/Picture1.png";
import yt from "../../assets/img/youtube-green.svg";
import ig from "../../assets/img/instagram-fix-green.svg";
import lkin from "../../assets/img/linkedin-fix-green.svg";
import Image from "next/image";
import book from "../../assets/agents/img/resolve-page2.png";
import {
  Button,
  Menu,
  MenuItem,
  styled,
  Typography,
  alpha,
} from "@mui/material";
import { useState } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const StyledMenu = styled((props) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "right",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "right",
    }}
    {...props}
  />
))(({ theme }) => ({
  "& .MuiPaper-root": {
    borderRadius: 6,
    marginTop: theme.spacing(1),
    width: "313px",
    color:
      theme.palette.mode === "light"
        ? "rgb(55, 65, 81)"
        : theme.palette.grey[300],
    boxShadow:
      "rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
    "& .MuiMenu-list": {
      padding: "4px 0",
    },
    "& .MuiMenuItem-root": {
      "& .MuiSvgIcon-root": {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
      },
      "&:active": {
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity
        ),
      },
    },
  },
}));

export default function SocialMediaLinksAgent() {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div
          className="row"
          style={{
            height: "155.5px",
            width: "470px",
            borderRadius: "9px",
            backgroundColor: "white",
            boxShadow: "0px 10px 22px rgba(0, 0, 0, 0.1)",
          }}
        >
          <div className="col-3 my-2">
            <Image width={105} height={160} src={book} alt="resolve icon" />
          </div>
          <div className="col-8" style={{ padding: "4px" }}>
            <Typography sx={{ mt: 0.8, fontSize: "16px", fontWeight: "bold" }}>
              Resolve
            </Typography>
            <Typography sx={{ fontSize: "14px", mt: 0.5 }}>
              Our journal talks in depth about the challenges of studying
              overseas, in an accessible, practical and light-hearted way.
            </Typography>
            <button className="readBtn">Read</button>
          </div>
        </div>

        <div>
          <a
            href="https://learn.studyvillage.org/unlock/P3sVzJ7#/"
            target="_blank"
            rel="noreferrer noopener"
          >
            <Image width="200" height="180" src={supportImg} alt="" />
          </a>
        </div>

        <div style={{ display: "flex", flexDirection: "column", marginTop: "30px" }}>
          <a
            href="https://studyvillage.zohobookings.com/#/customer/4048492000001753048"
            target="_blank"
            rel="noreferrer noopener"
            style={{
              marginBottom: "7px",
              width: "313px",
              color: "white",
              padding: "5px 14px",
              fontSize: "12px",
            }}
            className="formSubmitBtn"
          >
            BOOK A  STUDENT INFO SESSION
          </a>

          <Button
            id="demo-customized-button"
            aria-controls={open ? "demo-customized-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            variant="contained"
            disableElevation
            sx={{
              ml: 1,
              mb: 1,
              fontSize: "12px",
              bgcolor: "#a9becc",
              "&:hover": { bgcolor: "#a9becc" },
            }}
            onClick={handleClick}
            endIcon={<KeyboardArrowDownIcon />}
          >
            REGISTER A STUDENT FOR COUNTRY PREP
          </Button>
          <StyledMenu
            id="demo-customized-menu"
            MenuListProps={{
              "aria-labelledby": "demo-customized-button",
            }}
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
          >
            <MenuItem disableRipple>
              <a href="https://studyvillage.org/register-for-uk-prep/" target="_blank" rel="noreferrer noopener" style={{ color: "black" }}>UK PREP</a>
            </MenuItem>
            <MenuItem disableRipple>
              <a href="https://studyvillage.org/register-aus-prep/" target="_blank" rel="noreferrer noopener" style={{ color: "black" }}>Australia PREP</a>
            </MenuItem>
            <MenuItem disableRipple>
              <a href="https://studyvillage.org/register-ca-prep/" target="_blank" rel="noreferrer noopener"  style={{ color: "black" }}>Canada PREP</a>
            </MenuItem>
          </StyledMenu>

          <a
            href="http://startstudyvillage.org/html/"
            target="_blank"
            rel="noreferrer noopener"
            style={{
              width: "313px",
              color: "white",
              padding: "5px 14px",
              fontSize: "12px",
            }}
            className="formSubmitBtn"
          >
            STARTSTUDYVILLAGE.ORG FOR STUDENTS
          </a>
        </div>

        <div
          style={{
            textAlign: "center",
            width: "250px",
            height: "155.5px",
            borderRadius: "5px",
            padding: "40px 2px 30px 2px",
            backgroundColor: "white",
            boxShadow: "0px 10px 22px rgba(0, 0, 0, 0.1)",
          }}
        >
          <p style={{ fontSize: "21px", fontWeight: "600" }}>Follow Us</p>
          <div className="followUp">
            <a
              href="https://www.facebook.com/105113841330878"
              target="_blank"
              rel="noreferrer noopener"
            >
              <Image
                width="40"
                height="40"
                className="socmed-image"
                src={fb}
                alt=""
              />
            </a>
            <a
              href="https://www.youtube.com/channel/UCbzNF9F-uZDotmUWL_p8vhQ"
              target="_blank"
              rel="noreferrer noopener"
            >
              <Image
                width="40"
                height="40"
                className="socmed-image-yt"
                src={yt}
                alt=""
              />
            </a>
            <a
              href="https://www.linkedin.com/company/69714823"
              target="_blank"
              rel="noreferrer noopener"
            >
              <Image
                width="40"
                height="40"
                className="socmed-image"
                src={lkin}
                alt=""
              />
            </a>
            <a
              href="https://instagram.com/study_village"
              target="_blank"
              rel="noreferrer noopener"
            >
              <Image
                width="40"
                height="40"
                className="socmed-image"
                src={ig}
                alt=""
              />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
