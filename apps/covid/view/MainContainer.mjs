import Viewport from '../../../node_modules/neo.mjs/src/container/Viewport.mjs';

/**
 * @class Covid.view.MainContainer
 * @extends Neo.container.Viewport
 */
class MainContainer extends Viewport {
    static getConfig() {return {
        className: 'Covid.view.MainContainer',
        ntype    : 'main-container',

        autoMount: true,
        layout   : {ntype: 'fit'},

        items: []
    }}
}

Neo.applyClassConfig(MainContainer);

export {MainContainer as default};