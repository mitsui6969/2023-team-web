
import React, { useState } from 'react';
import './styles/Timetable.css';

export const Timetable = () => {
const [timetable, setTimetable] = useState([
    ['', '', '', '', ''], // 月曜日
    ['', '', '', '', ''], // 火曜日
    ['', '', '', '', ''], // 水曜日
    ['', '', '', '', ''], // 木曜日
    ['', '', '', '', ''], // 金曜日
]);

const handleInputChange = (e, dayIndex, periodIndex) => {
    const updatedTimetable = [...timetable];
    updatedTimetable[dayIndex][periodIndex] = e.target.value;
    setTimetable(updatedTimetable);
};

return (
    <table border="1" width="60%" height="60%">
    <thead>
        <tr>
            <th>月曜日</th>
            <th>火曜日</th>
            <th>水曜日</th>
            <th>木曜日</th>
            <th>金曜日</th>
        </tr>
    </thead>
    <tbody>
        {timetable.map((day, dayIndex) => (
            <tr key={dayIndex}>
            {day.map((period, periodIndex) => (
                <td key={periodIndex}>
                <input
                    type="text"
                    value={period}
                    onChange={(e) => handleInputChange(e, dayIndex, periodIndex)}
                />
                </td>
            ))}
            </tr>
        ))}
        </tbody>
    </table>
    );
};
