import React from "react";
import MultiGroup from "./components/multigroup";
import Pages from "./components/pagesexample";
import Home_left from "./component/home/Home_left";
import Home_right from "./component/home/Home_right";

export default function App() {
  return (
    <MultiGroup animTime={1.3}>
      <multiScroll>
        <leftSide>
          <Home_left />
        </leftSide>
        <rightSide>
          <Home_right />
        </rightSide>
      </multiScroll>

      <multiScroll>
        <leftSide>
          <Pages pg="2" side="left" />
        </leftSide>
        <rightSide>
          <Pages pg="2" side="right" />
        </rightSide>
      </multiScroll>

      <multiScroll>
        <leftSide>
          <Pages pg="3" side="left" />
        </leftSide>
        <rightSide></rightSide>
      </multiScroll>

      <multiScroll>
        <leftSide>
          <Pages pg="4" side="left" />
        </leftSide>
        <rightSide></rightSide>
      </multiScroll>

      <multiScroll>
        <leftSide>
          <Pages pg="5" side="left" />
        </leftSide>
        <rightSide></rightSide>
      </multiScroll>
    </MultiGroup>
  );
}
