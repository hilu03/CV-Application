import "../../styles/GeneralDisplay.css";
import { FaPhone } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaLink } from "react-icons/fa6";

function GeneralDisplay({info}) {
  return (
    <>
      <div className="general-container">
        <div className="left-side">
          <h1 className="name">{info.name}</h1>
          <p>{info.position}</p>
        </div>
        <div className="contact">
          <div className="phone-container line">
            <FaPhone />
            <div className="content">{info.phone}</div>
          </div>
          <div className="mail-container line">
            <IoIosMail />
            <a className="content" href={`mailto:${info.email}`}>{info.email}</a>
          </div>
          {info.portfolio.trim().length > 0 && (
            <div className="link-container line">
            <FaLink />
            <a className="content" href={info.portfolio} target="_blank">{info.portfolio}</a>
          </div>
          )}
          <div className="address-container line">
            <FaMapMarkerAlt />
            <div className="content">{info.address}</div>
          </div>
        </div>
      </div>
      <h2>Summary</h2>
      <p>{info.summary}</p>
    </>
  );
}

export default GeneralDisplay;