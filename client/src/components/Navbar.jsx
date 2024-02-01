import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { useStateContext } from "../context";
import { CustomButton } from "./";
import { navlinks } from "../constants";

const Navbar = () => {
  const navigate = useNavigate();
  const [isActive, setIsActive] = useState("dashboard");
  const [toggleDrawer, setToggleDrawer] = useState(false);
  const { connect, address } = useStateContext();

  return (
    <div className="flex md:flex-row flex-col-reverse justify-center mb-[35px] gap-6">
      <div className="sm:flex hidden flex-row justify-end gap-4">
        <CustomButton
          btnType="button"
          title={address ? "Create a campaign" : "Login with MetaMask"}
          styles={address ? "bg-[#6161ff]" : "bg-[#6161ff]"}
          handleClick={() => {
            if (address) navigate("create-campaign");
            else connect();
          }}
        />
      </div>
    </div>
  );
};

export default Navbar;
