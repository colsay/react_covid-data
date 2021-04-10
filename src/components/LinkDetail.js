import React from "react";
import { useHistory, useParams, useLocation } from "react-router-dom";
import { links } from "./links";

export const LinkDetail = () => {
    const history = useHistory();
    const params = useParams();
    const { id } = params;
    const location = useLocation();
    const goBack = () => {
        history.goBack();
    };

    return (
        <div>
            <h2>{links[params.id].title}</h2>
            <p>{links[id].url}</p>
            <p>State: {JSON.stringify(location.state)}</p>
            <button onClick={goBack}>Go Back</button>
        </div>
    );
};
