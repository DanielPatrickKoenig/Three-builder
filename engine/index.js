import BaseScene from "./classes/BaseScene";
import Environment3d from "./classes/Environment3d";
import InterctionManager from './classes/InteractionManager';
import ModelLoader, { LoadStates } from "./classes/ModelLoader";
import Navigator from './classes/Navigator';
import Physics from "./classes/Physics";
import POVManager, { POVModes } from "./classes/POVManager";
import RigManager from './classes/RigManager';

import AutoNavigationController from './classes/controllers/AutoNavigationController';
import BaseController, { ControllerTypes } from "./classes/controllers/BaseController";
import CharacterController from './classes/controllers/CharacterController';
import CheckpointController from './classes/controllers/CheckpointController';
import CustomMeshController from "./classes/controllers/CustomMeshController";
import GroundController from './classes/controllers/GroundController';
import JunctionController from './classes/controllers/JunctionController';
import LightController, { LightTypes } from "./classes/controllers/LightController";
import LiftController from './classes/controllers/LiftController';
import LocatableController from "./classes/controllers/LocatableController";
import PlayerController from './classes/controllers/PlayerController';
import ShadowController from './classes/controllers/ShadowController';
import VehicleController from './classes/controllers/VehicleController';

import {setRotation, RotationAxis, getRaycastIntersections, object3DSelector, createPrimitive, getCollisions, getDistance, basicImageMaterial, basicColorMaterial, createEmptyContainer, getCanvasPosition} from './utils/THREEHelpers';

import {nextTick, degreesToRadians, radiansToDegrees, ShapeTypes, defaultDimensionValues, processPointerEvent, generateID, getInheritanceChain, getParameterByName, cubicBezier, inside} from './utils/Utilities';

export {
    AutoNavigationController,
    BaseController, CharacterController,
    CheckpointController,
    CustomMeshController,
    GroundController,
    JunctionController,
    LightController,
    LiftController,
    LocatableController,
    PlayerController,
    ShadowController,
    VehicleController,
    BaseScene,
    Environment3d,
    InterctionManager,
    ModelLoader,
    Navigator,
    Physics,
    POVManager,
    RigManager, 
    setRotation,
    RotationAxis,
    getRaycastIntersections,
    object3DSelector,
    createPrimitive,
    getCollisions,
    getDistance,
    basicImageMaterial,
    basicColorMaterial,
    createEmptyContainer,
    getCanvasPosition,
    nextTick,
    degreesToRadians,
    radiansToDegrees,
    ShapeTypes,
    defaultDimensionValues,
    processPointerEvent,
    generateID,
    getInheritanceChain,
    getParameterByName,
    cubicBezier,
    inside,
    LoadStates,
    POVModes,
    ControllerTypes,
    LightTypes
};

// export BaseScene