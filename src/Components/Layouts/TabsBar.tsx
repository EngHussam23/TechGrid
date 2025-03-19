import Grid from "../Icons/Grid";
import Home from "../Icons/Home";
import Heart from "../Icons/Heart";

const TabsBar = () => {
  return (
    <div className="TabsBar">
      <div className="TabsBarItem">
        <Home color="#AAAAAA" size={24} className="Icon" />
        <p>Label</p>
      </div>
      <div className="TabsBarItem">
        <Heart color="#AAAAAA" size={24} className="Icon" />
        <p>Label</p>
      </div>
      <div className="TabsBarItem">
        <Grid color="#AAAAAA" size={24} className="Icon" />
        <p>Label</p>
      </div>
    </div>
  );
};

export default TabsBar;
