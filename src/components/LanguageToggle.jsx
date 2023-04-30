import React from "react";

function LanguageToggle(props) {

    return(
        <div className="language">
            <div className="lang-label">{props.langIsToggled ? "English" : "日本語" }</div>
            <label className="toggle">
                <input type="checkbox" name="language" id="lang-toggle" defaultChecked={props.langIsToggled} 
                onChange={() => {props.setLang(props.langToggle)}} />
                <span className="slider"></span>
            </label>
        </div>
    )
}

export default LanguageToggle