import profile from "../../assets/images/profile.png";

const Header = () => {
  return (
    <div>
      <div className="max-w-7xl mx-auto">
      <div className="navbar ">
        <div className="flex-1">
          <a className="text-4xl font-bold">Konwledge Cafe</a>
        </div>
        <div className="">
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar">
              <div className="w-12 rounded-full">
                <img
                  alt="Tailwind CSS Navbar component"
                  src={profile}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr />
      </div>
    </div>
    
  );
};

export default Header;
