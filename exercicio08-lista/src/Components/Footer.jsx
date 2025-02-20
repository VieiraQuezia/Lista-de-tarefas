import "./Footer.css";

function Footer(props) {
  return (
    <>
      <div className="Footer">
        <ul>
          <li>{props.nome}</li>
        </ul>
      </div>
    </>
  );
}

export default Footer;
