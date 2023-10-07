import { _decorator, Component, Node, Widget } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('Test')
export class Test extends Component {

    @property
    public num =100;

    @property({
        type:Widget
    })
    public trans : Widget

    start() {
        console.info("start")
    }

    update(deltaTime: number) {
        console.info("update :"+ deltaTime);
    }
}

