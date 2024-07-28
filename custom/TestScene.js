import * as ENGINE from '../engine';

import TestController from './TestController';

import Walker1Controller from './Walker1Controller';
import Walker2Controller from './Walker2Controller';

export default class TestScene extends ENGINE.BaseScene{
    constructor(el){
        super(el);
    }
    initialize(){
        // this.environment.cameraContainer.position.y = 4;
        const lightCon = new ENGINE.LightController({ environment: this.environment });
        lightCon.addLight({ type: ENGINE.LightTypes.DIRECTIONAL, intensity: 2 })
        const testCon = new TestController({ environment: this.environment });
        const ground = new ENGINE.GroundController({ environment: this.environment }, ENGINE.basicColorMaterial('00cc00'));

        const walker1 = new Walker1Controller({ environment: this.environment });
        const walker2 = new Walker2Controller({ environment: this.environment });
    }
    canResize(){
        return true;
    }
}