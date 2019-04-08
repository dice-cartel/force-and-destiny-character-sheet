import FnDDice from "@client/config/force-and-destiny-dice"
import {pip, die} from "types/dice"
import logger from "./LoggerService"

class DiceService {
    private diceSet = null;

    public constructor(config: Object) {
        if (config !== null) this.loadDiceFromConfig(config);
    }

    public getDie(die: any) {
        if (typeof die === "number")
            this.getNumericDie(die);
        else if (this.diceSet[die] !== null)
            return this.diceSet[die];
        else
            logger.debug("Die does not exist");
            return null;
    }
    
    public getNumericDie(sides: number): die {
        // Create new die if one doesn't exist
        if (this.diceSet[sides] !== null) {
            this.diceSet[sides] = {
                name: `{sides}`,
                sides: []
            };
            for (let i = 1; i <= sides; i++) {
                let newSide = this.createNumericPip(i);
                this.diceSet[sides].sides.push(newSide);
            }
            return this.diceSet[sides];
        }
        // Return the existing die
        else {
            return this.diceSet[sides];
        }
    }

    private createNumericPip(value: number): pip {
        let side: pip = {
            name: `{value}`,
            group: 'Number',
            value: value
        };
        return side;
    }

    public loadDiceFromConfig(config: Object) {
        let shorthandConfig = config['shorthand'];
        let diceConfig = config['dice'];
        for (let shorthand in shorthandConfig) {
            this.diceSet[shorthand] = diceConfig[shorthandConfig[shorthand]];
        }
    }
}