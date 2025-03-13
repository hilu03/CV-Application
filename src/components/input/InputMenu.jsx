import { MdExpandMore, MdExpandLess  } from "react-icons/md";
import { useState } from "react";
import "../../styles/InputMenu.css";

function InputMenu({title, children}) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section className="input-menu">
      <div className="title" onClick={() => {
        setIsExpanded(!isExpanded);
      }}>
        <h3>{title}</h3>
        {isExpanded ? <MdExpandLess /> : <MdExpandMore />}
      </div>
      {isExpanded && <>{children}</>}
    </section>
  );
}

export default InputMenu;