import React, { useState } from "react";

function LanguageToggle() {
    const [isToggled, setToggled] = useState(false);
    const [lang, setLang] = useState("EN");

    const toggleLang = () => {
        setToggled(!isToggled);
        setLang(isToggled ? "JP" : "EN")
    }

    return(
        <div className="language">
            <div className="lang-label">{isToggled ? "English" : "日本語" }</div>
            <label className="toggle">
                <input type="checkbox" name="language" id="lang-toggle" checked={isToggled} onChange={toggleLang} />
                <span className="slider"></span>
            </label>
        </div>
    )
}

export default LanguageToggle