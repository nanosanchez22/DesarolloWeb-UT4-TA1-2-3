import React from "react";

const TextButton = () => {

    const [textIsVisible, setTextIsVisible] = React.useState(false);

    const handleOnClick = () => { setTextIsVisible(!textIsVisible) };


    return (
        <div>
            {textIsVisible && <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, ad maxime. Illo unde saepe consequuntur dignissimos, eligendi nesciunt ut provident nisi, nulla aliquam repudiandae quos ducimus fugiat, facere magnam illum!</p>}
            <button onClick={handleOnClick}>Click</button>
        </div>
    );
};

export default TextButton;