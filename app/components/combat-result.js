import React from 'react'
import { connect } from 'react-redux'
import { Alert } from 'antd'
import { FormattedMessage } from 'react-intl';

const CombatResult = ({ winner, isFighting }) => {
    return (!isFighting && winner && <Alert
        message={(
            <strong style={{ fontSize: '20px' }}>
                {winner}
            </strong>
        )}
        description={(
            <div style={{ fontSize: '16px' }}>
                <FormattedMessage id="ItIsYou"/>
            </div>
        )}
        type="success"
        showIcon
    />)
}

const mapStateToProps = ({combatReducer}) => {
    return {
        winner: combatReducer.winner,
        isFighting: combatReducer.isFighting
    }
}
export default connect(mapStateToProps, null)(CombatResult)