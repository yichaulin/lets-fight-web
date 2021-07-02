import React from "react";
import { Timeline } from 'antd';

const RoundTimeLine = (rounds=[]) => {
    rounds = [
        'Create a services site 2015-09-01',
        'Solve initial network problems 2015-09-01',
        'Technical testing 2015-09-01',
        'Network problems being solved 2015-09-01',
    ]

    return (
        <Timeline>
            {rounds.map((round) => {
                return <Timeline.Item>{round}</Timeline.Item>
            })}
        </Timeline>
    );
}
export default RoundTimeLine