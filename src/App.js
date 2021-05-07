import React from "react";
import MultiGroup from "./components/multigroup";
import Pages from "./components/pagesexample";

export default function App() {
  return (
    <MultiGroup animTime={1.5}>
      <multiScroll>
        <leftSide>
          <Pages pg="1" side="left" />
        </leftSide>
        <rightSide>
          <Pages pg="1" side="right" />
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
