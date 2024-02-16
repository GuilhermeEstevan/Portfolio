import Wrapper from "../assets/Wrappers/sharedLayout";
import Navbar from "../Components/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import SmallSidebar from "../Components/smallSideBar/SmallSidebar";
import { TiThMenu } from "react-icons/ti"
import { useGlobalContext } from "../Context/Context";


const SharedLayout = () => {

  const { openSidebar } = useGlobalContext()

  return (
    <Wrapper>
      <main className="dashboard">
        <SmallSidebar />
        <Navbar />
        <div>
          <div className="dashboard-page">
            <span className="toggle-btn" onClick={openSidebar}>
              <TiThMenu />
            </span>
            <Outlet />
          </div>
        </div>
      </main>
    </Wrapper>
  );
};

export default SharedLayout;
