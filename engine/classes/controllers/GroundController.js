import BaseController from './BaseController';
import { basicImageMaterial } from '../../utils/THREEHelpers';
export default class GroundController extends BaseController{
    constructor(data, material){
        super(data);
        const groundMat = material;
        this.ground = this.environment.createPlane({size: {x: 50, y: 50, z: 0}, rotation: { x: -90, y: 0, z: 0 }, mass: 0, material: groundMat, orientation: { x: 1, y: 0, z: 0 } });
        this.environment.physics.floors.push(this.ground.body);
    }
}