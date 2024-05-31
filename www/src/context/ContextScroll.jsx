import { createContext, useContext, useEffect, useRef, useState } from "react";
import { TeauiNavigationContext } from "teaui-components";
import SimpleBar from "simplebar-react";
import "simplebar-react/dist/simplebar.min.css";

export const ScrollContext = createContext();

const ScrollProvider = ({ children }) => {
  const { appNavigationPage } = useContext(TeauiNavigationContext);
  const [scrollElement, setScrollElement] = useState("");

  const scroll = useRef();

  useEffect(() => {
    const scrollElement = scroll.current.getScrollElement();
    scrollElement.scrollTop = 0;
  }, [appNavigationPage]);

  useEffect(() => {
    setScrollElement(scroll.current.getScrollElement());
  }, [scroll]);

  return (
    <ScrollContext.Provider value={scrollElement}>
      <SimpleBar
        ref={scroll}
        style={{ maxHeight: "100vh", minHeight: "100vh" }}
      >
        {children}
      </SimpleBar>
    </ScrollContext.Provider>
  );
};

export default ScrollProvider;
