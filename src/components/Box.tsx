import React from "react";

interface BoxProps {
    linkTo: string;
    label: string;
}

const Box: React.FC<BoxProps> = ({ linkTo, label }) => {
    return (
            <a href={linkTo}>
                <div className="aspect-square w-40 bg-gray-200 text-gray-800 font-bold rounded m-2 p-2 flex flex-col justify-end">
                    <a href={linkTo}>
                        <span className="">{label}</span>
                    </a>
                </div>
            </a>
    );
}

export default Box;