import React from "react";
import { Timeline } from 'antd';

const RoundTimeLine = ({rounds}) => {
    return (
        <Timeline>
            {rounds.map((round, i) => {
                return <Timeline.Item key={`round-${i}`}>{round}</Timeline.Item>
            })}
        </Timeline>
    );
}
export default RoundTimeLine