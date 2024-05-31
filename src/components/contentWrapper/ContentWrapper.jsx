import React from "react";

const ContentWrapper = ({ children }) => {
    return <div className="m-auto p-5 w-[100%] max-w-[1200px] align-middle contentWrapper">{children}</div>;
};

export default ContentWrapper;
