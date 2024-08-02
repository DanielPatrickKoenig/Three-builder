import * as ENGINE from '../engine';

export default class TestController extends ENGINE.BaseController{
    constructor(data){
        super(data);
    }

    init () {
        const mat = ENGINE.basicColorMaterial('cc0000');
        const box = this.environment.createBox({ type: ENGINE.ShapeTypes.BOX, position: {x: 0, y: 0, z: -5}, size: { x: 2, y: 2, z: 2 }, material: mat });
        console.log(box);

        const model = new ENGINE.CustomMeshController({ environment: this.environment }, 'https://danielpatrickkoenig.github.io/shared-app-resources/waterBlock.glb');


    }

}