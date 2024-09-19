import React, { useState } from "react";
import {
  TETabs,
  TETabsContent,
  TETabsItem,
  TETabsPane,
} from "tw-elements-react";
import LessonCard from "./LessonCard";
import Completed from "./Completed";
import Cancelled from "./Cancelled";

export default function RoutingSession() {
  const [colorsActive, setColorsActive] = useState({
    tab1: "tab1",
    tab2: "tab1",
    tab3: "tab1",
    tab4: "tab1",
    tab5: "tab1",
    tab6: "tab1",
    tab7: "tab1",
    tab8: "tab1",
  });

  const handleColorsClick = (value) => {
    if (value === colorsActive) {
      return;
    }
    setColorsActive({ ...colorsActive, ...value });
  };

  const tabButtonStyles =
    "tabsOfRoute";

  return (
    <div className="mb-3">
      {/* Centered Tabs */}
      <div className="flex justify-center">
        <TETabs>
          <TETabsItem
            onClick={() => handleColorsClick({ ...colorsActive, tab8: "tab1" })}
            active={colorsActive.tab8 === "tab1"}
            className={`${tabButtonStyles} ${
              colorsActive.tab8 === "tab1" ? "ActivetabsOfRoute" : ""
            }`}
          >
            Lessons
          </TETabsItem>
          <TETabsItem
            onClick={() => handleColorsClick({ ...colorsActive, tab8: "tab2" })}
            active={colorsActive.tab8 === "tab2"}
            className={`${tabButtonStyles} ${
              colorsActive.tab8 === "tab2" ? "ActivetabsOfRoute" : ""
            }`}
          >
            Completed
          </TETabsItem>
          <TETabsItem
            onClick={() => handleColorsClick({ ...colorsActive, tab8: "tab3" })}
            active={colorsActive.tab8 === "tab3"}
            className={`${tabButtonStyles} ${
              colorsActive.tab8 === "tab3" ? "ActivetabsOfRoute" : ""
            }`}
          >
            Cancelled
          </TETabsItem>
        </TETabs>
      </div>

      {/* Tab Content */}
      <div className="mt-5">
        <TETabsContent>
          <TETabsPane show={colorsActive.tab8 === "tab1"}>
            <LessonCard />
          </TETabsPane>
          <TETabsPane show={colorsActive.tab8 === "tab2"}>
            <Completed />
          </TETabsPane>
          <TETabsPane show={colorsActive.tab8 === "tab3"}>
            <Cancelled />
          </TETabsPane>
        </TETabsContent>
      </div>
    </div>
  );
}
