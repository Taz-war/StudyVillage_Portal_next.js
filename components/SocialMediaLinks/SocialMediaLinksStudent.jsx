import fb from "../../assets/img/facebook-fix-green.svg";
import yt from "../../assets/img/youtube-green.svg";
import ig from "../../assets/img/instagram-fix-green.svg";
import lkin from "../../assets/img/linkedin-fix-green.svg";
import Image from "next/image";

export default function SocialMediaLinksStudent() {
  return (
    <>
      <div
        style={{
          textAlign: "center",
          width: "250px",
          height: "150px",
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
      
    </>
  );
}
