import React from "react";

import {MainHeader} from "../main-header/main-header";
import {MainContent} from "../main-content/main-content";
import {MainFooter} from "../main-footer/main-footer";
import "./css/app.css";

export const App = () => {
  return (
	  <div className="container">
	  	<MainHeader />
	  	<MainContent />
	  	<MainFooter />
	  </div>
  );
};
