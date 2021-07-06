import React, { Fragment } from "react";
import { FormattedMessage } from 'react-intl';
import { Typography } from 'antd';

const { Text } = Typography

const FormatRoundResults = (roundResult) => {
    const castAbilityFormatID = `CastAbility.${roundResult.castAbility.type}`
    const roundResultFormatID = `RoundResult.${roundResult.castAbility.effect}`

    let AbilityName
    let AbilityValue
    switch (roundResult.castAbility.type) {
        case 'General':
            AbilityName = (<Text strong>{roundResult.castAbility.name}</Text>)
            AbilityValue = (<Text strong>{roundResult.castAbility.value}</Text>)
            break;
        case 'Skill':
            AbilityName = (<Text type="warning" strong>
                <div style={{fontSize: '1.25rem'}}>
                    {roundResult.castAbility.name}
                </div>
            </Text>)
            AbilityValue = (<Text type="warning">{roundResult.castAbility.value}</Text>)
            break;
        case 'Ultimate':
            AbilityName = (<Text type="danger" strong italic>
                <div style={{fontSize: '1.5rem'}}>
                    {roundResult.castAbility.name} ！！！
                </div>
            </Text>)
            AbilityValue = (<Text type="danger">{roundResult.castAbility.value}</Text>)
            break;
        default:
            AbilityName = roundResult.castAbility.name
            AbilityValue = roundResult.castAbility.value
            break;
    }

    return (
        <Fragment>
            <FormattedMessage
                id={castAbilityFormatID}
                values={{
                    attacker: roundResult.attacker,
                    abilityName: AbilityName
                }}
            />
            <br />
            <FormattedMessage
                id={roundResultFormatID}
                values={{ value: AbilityValue }}
            />
        </Fragment>
    )
}

export { FormatRoundResults }
