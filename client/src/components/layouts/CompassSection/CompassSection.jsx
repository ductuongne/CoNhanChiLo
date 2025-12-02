import React, { useMemo } from "react";
import { compassData } from "../../../data/CompassData.js";
import useHeading from "./RequestPermission .js";
import "./CompassSection.css";

const CompassSection = ( { labanso }) => {
    const heading = useHeading();

    const ticks = useMemo(() => {
        const tickArray = [];
        for (let i = 0; i < 360; i += 15) {
            tickArray.push(i);
        }
        return tickArray;
    }, []);

    const sectorsWithAngles = useMemo(() => {
        return compassData[labanso].sectors.map((sec, i) => ({
            ...sec,
            angle: i * 45,
        }));
    }, []);

    return (
        <div className="compass-container">
            <h1 className="compass-title">La Bàn Năng Lượng số {labanso + 1}</h1>
            <p className="compass-description">Dựa trên năng lượng số của bạn, chúng tôi đã tạo ra La Bàn Năng Lượng số, bạn có thể quay người về hướng hợp lý nhất cho bạn</p>
            <div className="compass-wrapper">
                <div className="compass-pointer" />

                <div className="compass-circle">
                    <div 
                        className="compass-rotor" 
                        style={{ 
                            transform: `rotate(${-heading}deg)`,
                            transition: 'transform 0.3s ease-out'
                        }}
                    >
                        <div className="compass-ring" />

                        <div className="compass-ticks">
                            {ticks.map((deg) => (
                                <span
                                    key={deg}
                                    className={`tick ${deg % 90 === 0 ? "tick-lg" : deg % 30 === 0 ? "tick-md" : "tick-sm"}`}
                                    style={{ transform: `rotate(${deg}deg)` }}
                                />
                            ))}
                        </div>

                        <div className="compass-sectors">
                            {sectorsWithAngles.map((sec, i) => (
                                <div key={i} className="sector" style={{ transform: `rotate(${sec.angle}deg)` }}>
                                    <div className="direction-label" style={{ transform: `translateX(-50%) rotate(${-sec.angle}deg)` }}>
                                        {sec.direction}
                                    </div>
                                    {sec.meaning && (
                                        <div className="meaning-label" style={{ transform: `translateX(-50%) rotate(${90}deg)` }}>
                                            {sec.meaning}
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="compass-center">
                        <div className="compass-center-number">{compassData[labanso].center.number}</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CompassSection;
