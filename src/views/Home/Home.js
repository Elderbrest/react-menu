import React from 'react';
import Menu from '../../components/Menu';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

import {
  Navigation
} from "./styled";

const Home = () => {
  return (
    <div>
      <Navigation>
        <FontAwesomeIcon icon={faBars} />
      </Navigation>
      {/*<Menu />*/}
    </div>
  );
};

export default Home;