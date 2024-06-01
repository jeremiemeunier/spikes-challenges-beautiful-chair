import { useState } from "react";
import { Link } from "react-router-dom";

const SlideShow = ({ data }) => {
  const [activeView, setActiveView] = useState(0);

  return (
    <div className="slideshow">
      <div className="slideshow-progress">
        <p>
          <strong>{(activeView + 1).toString().padStart(2, "0")}</strong>/
          {data.length.toString().padStart(2, "0")}
        </p>
        <SlideShowArrow
          setActiveView={setActiveView}
          activeView={activeView}
          length={data.length}
        />
      </div>
      <div className="slideshow-view">
        <img src={data[activeView].media.original} alt="" />
      </div>
      <div className="slideshow-nav">
        {data.map((element, index) => (
          <SlideShowCard
            key={index}
            index={index}
            element={element}
            setActiveView={setActiveView}
            activeView={activeView}
          />
        ))}
      </div>
    </div>
  );
};

export default SlideShow;

const SlideShowCard = ({ index, element, setActiveView, activeView }) => {
  const navigateHandler = () => {
    setActiveView(index);
  };

  return (
    <Link
      className={`slideshow-nav-item ${activeView === index ? "active" : ""}`}
      onClick={navigateHandler}
    >
      <img src={element.media.thumbnail} alt="" />
    </Link>
  );
};

const SlideShowArrow = ({ setActiveView, activeView, length }) => {
  const nextHandler = () => {
    if (activeView + 1 < length) {
      setActiveView(activeView + 1);
    } else {
      setActiveView(0);
    }
  };

  const prevHandler = () => {
    if (activeView - 1 >= 0) {
      setActiveView(activeView - 1);
    } else {
      setActiveView(length - 1);
    }
  };

  return (
    <div className="slideshow-arrow">
      <button onClick={prevHandler}>
        <i className="icon teaui-icon-chevron-left"></i>
      </button>
      <button onClick={nextHandler}>
        <i className="icon teaui-icon-chevron-right"></i>
      </button>
    </div>
  );
};
