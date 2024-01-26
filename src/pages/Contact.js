import { useState } from "react";
import "./Contact.css";
import { FaInstagram, FaLinkedin, FaGithub, FaCopy } from "react-icons/fa";

const Contact = () => {
  const emailText = "thiago33fb@gmail.com";
  const [isCopied, setIsCopied] = useState(false);

  const copyToClipboard = () => {
    const textField = document.createElement("textarea");
    textField.innerText = emailText;
    document.body.appendChild(textField);
    textField.select();
    document.execCommand("copy");
    textField.remove();

    setIsCopied(true);

    setTimeout(() => {
      setIsCopied(false);
    }, 2600);
  };

  return (
    <div className="contact">
      <h2>Redes sociais</h2>
      <ul className="social">
        <li>
          <a
            href="https://www.linkedin.com/in/thiago-barcelo-3197b2206/"
            target="blank"
          >
            <span>
              <FaLinkedin />
            </span>
          </a>
        </li>
        <li>
          <a href="https://github.com/Thiago31fb" target="blank">
            <FaGithub />
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/thiago_barcelo_/" target="blank">
            <FaInstagram />
          </a>
        </li>
      </ul>
      <h2>Email</h2>
      <ul className="email">
        <li>{emailText}</li>
        <FaCopy onClick={copyToClipboard} style={{ cursor: "pointer" }} />
        {isCopied && <span className="copy">Copiado!</span>}
      </ul>
    </div>
  );
};

export default Contact;
