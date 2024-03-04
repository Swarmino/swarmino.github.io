import React from "react";

const About: React.FC = () => {
    return (
        <div className="w-[428px] h-[926px] relative bg-gradient-to-b from-purple-900 to-slate-950">
            <div className="w-[57.98px] h-[57.98px] left-[338px] top-[704px] absolute origin-top-left -rotate-45 bg-green-500 rounded-[13px] blur-[21.20px]" />
            <div className="w-[57.98px] h-[57.98px] left-[107.50px] top-[22.49px] absolute origin-top-left rotate-[15deg] bg-green-500 rounded-[13px] blur-[21.20px]" />
            <img className="w-[280.52px] h-[280.52px] left-[11.26px] top-[636px] absolute origin-top-left rotate-[30deg] rounded-full blur-[12.20px]" src="https://via.placeholder.com/281x281" />
            <img className="w-[83.99px] h-[83.99px] left-[41.99px] top-[168px] absolute origin-top-left rotate-[30deg] rounded-full blur-[27.40px]" src="https://via.placeholder.com/84x84" />
            <img className="w-[280.52px] h-[280.52px] left-[376.26px] top-[-87px] absolute origin-top-left rotate-[30deg] rounded-full shadow blur-[1.50px]" src="https://via.placeholder.com/281x281" />
            <div className="w-[381px] h-[427px] left-[24px] top-[249px] absolute">
                <img className="w-[381px] h-[427px] left-0 top-0 absolute rounded-[19px] border backdrop-blur-[27.60px]" src="https://via.placeholder.com/381x427" />
                <div className="w-[347px] h-[214px] left-[17px] top-[18px] absolute">
                    <img className="w-[137px] h-[137px] left-[105px] top-0 absolute rounded-full shadow border border-white" src="https://via.placeholder.com/137x137" />
                    <div className="w-[347px] h-[68px] left-0 top-[146px] absolute">
                        <div className="w-[343.61px] left-0 top-0 absolute text-center"><span style="text-white text-4xl font-bold font-['Inter']">Victor </span><span style="text-white text-4xl font-normal font-['Inter']">Falck-Næss</span></div>
                        <div className="w-[343.61px] left-0 top-[50px] absolute text-center text-white text-[15px] font-normal font-['Inter']">Developer & Designer</div>
                        <div className="w-[345.31px] h-[0px] left-[1.69px] top-[47px] absolute border border-white"></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;