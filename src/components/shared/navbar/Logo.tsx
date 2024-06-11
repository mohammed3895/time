import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <div>
      <Link
        to="/"
        className="text-base uppercase font-normal text-primary flex items-center justify-center gap-1"
      >
        <img src="/logo.svg" className="w-7 h-7" />
        TikTuk
      </Link>
    </div>
  );
};

export default Logo;
