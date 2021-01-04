import React, { useState } from 'react'


const SkillBar = ({ name, percent }) => {

    const [percentage, setPercentage] = useState(0)

    const increasePercent = (percent) => {

        let duration = 1700; // 3 seconds to finish

        let delay = duration / percent

        setTimeout(function () {
            if (percentage < percent) {
                setPercentage(percentage + 1)
            }

        }, delay)


    }

    increasePercent(percent)


    return (
        <div className="skills__bar skills__bar--1">
            <div className="skills__bar__name">{name}</div>
            <div className="skills__bar__progress" style={{ width: `${percentage}%` }}></div>
            <div className="skills__bar__percentage">{`${percentage}%`}</div>
        </div>
    );
}

export default SkillBar;
