import React, { useState } from 'react';
import Menu from '../../components/Menu';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

import {
  Navigation
} from "./styled";

const Home = () => {
  const [isActive, toggleMenu] = useState(false)
  return (
    <div>
      <Navigation>
        <FontAwesomeIcon onClick={() => toggleMenu(true)} icon={faBars} />
      </Navigation>
      <Menu isActive={isActive} toggleMenu={toggleMenu} />
    </div>
  );
};

export default Home;