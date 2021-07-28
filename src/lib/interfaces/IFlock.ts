import { Vector } from "p5";
import { IPoint3d } from 'lib/interfaces/IPoint3d';
import { IBoid } from 'lib/interfaces/IBoid';
import { IBoidAttractor } from 'lib/interfaces/IBoidAttractor';
import { IBoidAttractorConfig } from 'lib/interfaces/IBoidAttractorConfig';

export interface IFlock {
    boids: IBoid[],
    getPositions(): IPoint3d[],
    setTarget(value: Vector): void,
    getTarget(): Vector,
    setHeight(value: number): void,
    getHeight(): number,
    setWidth(value: number): void,
    getWidth(): number,
    setDepth(value: number): void,
    getDepth(): number,
    addAttractor(config: Partial<IBoidAttractorConfig>): IBoidAttractor,
    removeAttractor(value: IBoidAttractor): void,
    getAttractors(): IBoidAttractor[],
    setBoidCohesionDistance(value: number): void,
    getBoidCohesionDistance(): number,
    setBoidMaxSpeed(value: number): void,
    getBoidMaxSpeed(): number,
    setBoidMaxForce(value: number): void,
    getBoidMaxForce(): number,
    run(): void
}