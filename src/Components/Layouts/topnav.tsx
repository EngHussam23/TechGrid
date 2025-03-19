import BurgerMenu from "../Icons/BurgerMenu";
import Cart from "../Icons/Cart";
import Profile from "../Icons/Profile";
import Search from "../Icons/Search";

const TopNav = () => {
  return (
    <nav>
      <div>
        <BurgerMenu color="#AAAAAA" size={24} className="Icon" />
        <img
          src="src\assets\Icon & Text Logo - Horizontal.png"
          alt="TechGrid Logo"
        />
      </div>
      <div>
        <Search color="#AAAAAA" size={24} className="Icon" />
        <Cart color="#AAAAAA" size={28} className="Icon" />
        <Profile color="#AAAAAA" size={24} className="Icon" />
      </div>
    </nav>
  );
};

export default TopNav;
