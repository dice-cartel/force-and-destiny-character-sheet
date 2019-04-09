import Pips from "./pips"

const FnDDice = {
    'Boost': [
        [ Pips.blank ],
        [ Pips.blank ],
        [ Pips.advantage ],
        [ Pips.success, Pips.advantage ],
        [ Pips.advantage, Pips.advantage ],
        [ Pips.advantage ]
    ],
    'Setback': [
        [ Pips.blank ],
        [ Pips.blank ],
        [ Pips.failure ],
        [ Pips.failure ],
        [ Pips.threat ],
        [ Pips.threat ]
    ],
    'Ability': [
        [ Pips.blank ],
        [ Pips.success ],
        [ Pips.success ],
        [ Pips.success, Pips.success ],
        [ Pips.advantage ],
        [ Pips.advantage ],
        [ Pips.success, Pips.advantage ],
        [ Pips.advantage, Pips.advantage ]
    ],
    'Difficulty': [
        [ Pips.blank ],
        [ Pips.failure ],
        [ Pips.failure, Pips.failure ],
        [ Pips.threat ],
        [ Pips.threat ],
        [ Pips.threat ],
        [ Pips.threat, Pips.threat ],
        [ Pips.failure, Pips.threat ]
    ],
    'Proficiency': [
        [ Pips.blank ],
        [ Pips.success ],
        [ Pips.success ],
        [ Pips.success, Pips.success ],
        [ Pips.advantage ],
        [ Pips.success, Pips.advantage ],
        [ Pips.success, Pips.advantage ],
        [ Pips.success, Pips.advantage ],
        [ Pips.advantage, Pips.advantage ],
        [ Pips.advantage, Pips.advantage ],
        [ Pips.triumph ]
    ],
    'Challenge': [
        [ Pips.blank ],
        [ Pips.failure ],
        [ Pips.failure ],
        [ Pips.failure, Pips.failure ],
        [ Pips.failure, Pips.failure ],
        [ Pips.threat ],
        [ Pips.threat ],
        [ Pips.failure, Pips.threat ],
        [ Pips.failure, Pips.threat ],
        [ Pips.failure, Pips.threat ],
        [ Pips.threat, Pips.threat ],
        [ Pips.threat, Pips.threat ],
        [ Pips.despair ]
    ],
    'Force': [
        [ Pips.dark ],
        [ Pips.dark ],
        [ Pips.dark ],
        [ Pips.dark ],
        [ Pips.dark ],
        [ Pips.dark, Pips.dark ],
        [ Pips.light ],
        [ Pips.light ],
        [ Pips.light, Pips.light ],
        [ Pips.light, Pips.light ],
        [ Pips.light, Pips.light ]
    ]
};

const shorthand = {
    'b': 'Boost',
    's': 'Setback',
    'a': 'Ability',
    'd': 'Difficulty',
    'p': 'Proficiency',
    'c': 'Challenge',
    'f': 'Force'
}

export default (FnDDice);