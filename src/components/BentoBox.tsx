import React from "react";

interface BentoBoxProps {
    title : string;
    description? : string;
    color? : string;
    refLink? : string;
}

const BentoBox : React.FC<BentoBoxProps> = (BentoBoxProps) => {
    return (
        <>
            <div className="rounded-2xl p-2 aspect-square" style={{
                backgroundColor: BentoBoxProps.color
            }}>
                <h2 className="">
                    {BentoBoxProps.title}
                </h2>
                <div className="">
                    {BentoBoxProps.description}
                </div>
                <div className="">
                    {BentoBoxProps.refLink}
                </div>
            </div>
        </>
    );
}

export default BentoBox;