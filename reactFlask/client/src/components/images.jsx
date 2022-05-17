import React, {useState } from "react";

const Images = props => {
    return (
        <div>
            <img src={props.imgUrl} alt={props.name} />
            <h2>{props.name}</h2>
        </div>
    );
};

export default Images;