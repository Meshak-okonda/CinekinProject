import React from "react";
import MultiGroup from "./components/multigroup";
import Pages from "./components/pagesexample";
<<<<<<< HEAD

export default function App() {
  return (
    <MultiGroup animTime={1.5}>
      <multiScroll>
        <leftSide>
          <Pages pg="1" side="left" />
        </leftSide>
        <rightSide>
          <Pages pg="1" side="right" />
=======
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
>>>>>>> feature/home
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
