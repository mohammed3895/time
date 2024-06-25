import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="w-full p-6 flex items-center justify-center text-xs md:text-sm font-normal gap-2">
      Designed & Developed By{"  "}
      <Link
        to="https://www.linkedin.com/in/mohammed-sameer-bb81b3151/"
        target="_blank"
        className="text-primary"
      >
        Mohammed Sameer
      </Link>
    </div>
  );
};

export default Footer;
