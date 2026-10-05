import {
  useEffect,
  useState
} from "react";

function CustomCursor() {

  const [
    position,
    setPosition
  ] = useState({
    x: -100,
    y: -100
  });

  const [active, setActive] =
    useState(false);

  useEffect(() => {

    const handleMouseMove = (event) => {

      setPosition({
        x: event.clientX,
        y: event.clientY
      });

    };

    const handleEnter = () => {
      setActive(true);
    };

    const handleLeave = () => {
      setActive(false);
    };

    window.addEventListener(
      "mousemove",
      handleMouseMove
    );

    const elements =
      document.querySelectorAll(
        "a, button, [data-cursor]"
      );

    elements.forEach((element) => {

      element.addEventListener(
        "mouseenter",
        handleEnter
      );

      element.addEventListener(
        "mouseleave",
        handleLeave
      );

    });

    return () => {

      window.removeEventListener(
        "mousemove",
        handleMouseMove
      );

      elements.forEach((element) => {

        element.removeEventListener(
          "mouseenter",
          handleEnter
        );

        element.removeEventListener(
          "mouseleave",
          handleLeave
        );

      });

    };

  }, []);

  return (
    <div
      className={`
        pointer-events-none
        fixed
        z-[110]
        hidden
        h-8
        w-8
        -translate-x-1/2
        -translate-y-1/2
        rounded-full
        border
        transition-all
        duration-200
        lg:block

        ${
          active
            ? "scale-150 border-[#d9ff5b] bg-[#d9ff5b]/20"
            : "border-white/70"
        }
      `}
      style={{
        left: position.x,
        top: position.y
      }}
    />
  );
}

export default CustomCursor;