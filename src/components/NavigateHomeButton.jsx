import { useState } from 'react';
import { Navigate } from 'react-router-dom';

export default function NavigateHomeButton() {
    const [shouldRedirect, setRedirect] = useState(false);

    const changeRedirect = () => setRedirect(true);

    return(
        <div>
            <div className="navigate-home" onClick={changeRedirect}>Return to Homepage</div>
            {shouldRedirect && <Navigate to="/" />}
        </div>
    )
}