import Pips from "./pips"

const FnDDice = {
    'dice': {
        'Boost': {
            name: 'Boost',
            sides: [
                [ Pips.blank ],
                [ Pips.blank ],
                [ Pips.advantage ],
                [ Pips.success, Pips.advantage ],
                [ Pips.advantage, Pips.advantage ],
                [ Pips.advantage ]
            ]
        },
        'Setback': {
            name: 'Setback',
            sides: [
                [ Pips.blank ],
                [ Pips.blank ],
                [ Pips.failure ],
                [ Pips.failure ],
                [ Pips.threat ],
                [ Pips.threat ]
            ]
        },
        'Ability': {
            name: 'Ability',
            sides: [
                [ Pips.blank ],
                [ Pips.success ],
                [ Pips.success ],
                [ Pips.success, Pips.success ],
                [ Pips.advantage ],
                [ Pips.advantage ],
                [ Pips.success, Pips.advantage ],
                [ Pips.advantage, Pips.advantage ]
            ]
        },
        'Difficulty': {
            name: 'Difficulty',
            sides: [
                [ Pips.blank ],
                [ Pips.failure ],
                [ Pips.failure, Pips.failure ],
                [ Pips.threat ],
                [ Pips.threat ],
                [ Pips.threat ],
                [ Pips.threat, Pips.threat ],
                [ Pips.failure, Pips.threat ]
            ]
        },
        'Proficiency': {
            name: 'Difficulty',
            sides: [
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
            ]
        },
        'Challenge': {
            name: 'Difficulty',
            sides: [
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
            ]
        },
        'Force': {
            name: 'Difficulty',
            sides: [
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
        }
    },
    'shorthand': {
        'b': 'Boost',
        's': 'Setback',
        'a': 'Ability',
        'd': 'Difficulty',
        'p': 'Proficiency',
        'c': 'Challenge',
        'f': 'Force'
    }
};

export default (FnDDice);