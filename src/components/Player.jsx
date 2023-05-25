import { useState, useEffect } from "react"

export default function Player() {
    const [ mousePosition, setMousePosition ] = useState({x: null, y: null})

    useEffect(() => {
        const updateMousePosition = (e) => {
            setMousePosition({x: e.clientX, y: e.clientY})
        }
        window.addEventListener("mousemove", updateMousePosition);

        return () => {
        window.removeEventListener("mousemove", updateMousePosition);
        };
    }, []);

  return (
    <div className="player" style={{left: mousePosition.x - 265, top: mousePosition.y - 230 }}>
        <div className="butterfly-container">
            <div className="wing left-wing">
                <div className="wing-part upper-wing left-upper-wing"></div>
                <div className="wing-part lower-wing left-lower-wing"></div>
            </div>
            <div className="butterfly-body">
                <div className="butterfly-body butterfly-body-3d"></div>
            </div>
            <div className="wing right-wing">
                <div className="wing-part upper-wing right-upper-wing"></div>
                <div className="wing-part lower-wing right-lower-wing"></div>
            </div>
        </div>
    </div>
  )
}
