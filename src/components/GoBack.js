import React from "react";
import { useHistory } from "react-router-dom";

const GoBack = () => {
    const history = useHistory();
    const goBack = () => {
        history.goBack();
    };

    return (
        <div>
            <button onClick={goBack}>Go Back</button>
        </div>
    );
};

export default GoBack;
