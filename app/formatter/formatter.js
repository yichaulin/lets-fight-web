import React, { Fragment } from "react";
import { FormattedMessage } from 'react-intl'

const FormatRoundResults = (roundResult) => {
    const castAbilityFormatID = `CastAbility.${roundResult.castAbility.type}`
    const roundResultFormatID = `RoundResult.${roundResult.castAbility.effect}`

    return (
        <Fragment>
            <FormattedMessage
                id={castAbilityFormatID}
                values={{
                    attacker: roundResult.attacker,
                    abilityName: roundResult.castAbility.name,
                }}
            />
            <br />
            <FormattedMessage
                id={roundResultFormatID}
                values={{
                    receiver: roundResult.defender,
                    value: roundResult.castAbility.value,
                }}
            />
        </Fragment>
    )
}

export { FormatRoundResults }
