import React, { useEffect } from "react";
import { connect } from 'react-redux'
import { Row, Col } from 'antd';
import RoundTimeLine from './round-time-line';
import FighterProfile from './fighter-profile';
import { FetchCombat } from '../api/lets-fight'
import { SetWinner, SetRounds } from '../redux/actions/combat-action'

const Combat = ({ fighterNames, fighters, roundID, SetWinner, SetRounds }) => {
    const fighterAName = fighterNames[0]
    const fighterBName = fighterNames[1]
    const fighterA = fighters[fighterAName] || {}
    const fighterB = fighters[fighterBName] || {}

    useEffect(() => {
        SetRounds([])
    }, [roundID])

    useEffect(() => {
        if (fighterA.isReady && fighterB.isReady) {

            (async () => {
                const res = await FetchCombat(fighterNames);
                SetRounds(res.data.roundResults)
                SetWinner(res.data.winner)
            })();

        }
    }, [fighterA.isReady, fighterB.isReady, roundID])

    return (
        <Row gutter={[8, 24]} justify="center">
            <Col xs={{ span: 12, order: 1 }} sm={{ span: 12, order: 1 }} md={{ span: 8, order: 1 }}>
                <FighterProfile
                    header="Fighter A"
                    fighterName={fighterAName}
                    hp={fighterA.hp}
                />
            </Col>
            <Col xs={{ span: 22, order: 3 }} sm={{ span: 22, order: 3 }} md={{ span: 8, order: 2 }}>
                <RoundTimeLine />
            </Col>
            <Col xs={{ span: 12, order: 2 }} sm={{ span: 12, order: 2 }} md={{ span: 8, order: 3 }}>
                <FighterProfile
                    header="Fighter B"
                    fighterName={fighterBName}
                    hp={fighterB.hp}
                />
            </Col>
        </Row>
    )
}

const mapStateToProps = ({ fightersReducer, combatReducer }) => {
    return {
        fighterNames: fightersReducer.fighterNames,
        fighters: fightersReducer.fighters,
        roundID: combatReducer.roundID,
    }
}
export default connect(
    mapStateToProps,
    { SetWinner, SetRounds }
)(Combat)