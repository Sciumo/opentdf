import ProtectEntitleAuthImage from "../opentdf-protect-entitle-auth.png";


function Info() {
    return (
      <div className="info-section">
        <h1>What is OpenTDF?</h1>
        <img
          src={ProtectEntitleAuthImage}
          className="ProtectEntitleAuthImage"
          alt="protect, entitle and authorize with OpenTDF"
        />
        <div>
          <h3>
            The OpenTDF project is an open set of standards, libraries, and
            services that allow you to enable zero-trust protection across your
            ecosystem to ensure complete data protection and access control. For
            more information and to get started using OpenTDF, please see the
            OpentDF Github Organization page.
          </h3>
        </div>
      </div>
    );
  }
  
  export default Info;