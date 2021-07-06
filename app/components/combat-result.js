import React from 'react'
import { Alert } from 'antd'

const CombatResult = ({ winner, isShow }) => {
    return (isShow && winner && <Alert
        message={(
            <strong style={{ fontSize: '1.5rem' }}>
                {winner}
            </strong>
        )}
        description={(
            <div style={{ fontSize: '1.25rem' }}>
                就決定是你了！！！
            </div>
        )}
        type="success"
        showIcon
    />)
}

export default CombatResult