import * as ENGINE from '../engine';

import TestController from './TestController';


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
        this.environment.cameraContainer.position.z = 10;
    }
    canResize(){
        return true;
    }
}