'use stict';

function Route(name, htmlName, defaultRoute,state,cvaState) {
    try {
        if(!name || !htmlName) {
            throw 'error: name and htmlName params are mandatories';
        }
        this.constructor(name, htmlName, defaultRoute,state,cvaState);
    } catch (e) {
        console.error(e);
    }
}

Route.prototype = {
    name: undefined,
    htmlName: undefined,
    default: undefined,
    state:undefined,
    cvaState:true,
    constructor: function (name, htmlName, defaultRoute,state,cvaState) {
        this.name = name;
        this.htmlName = htmlName;
        this.default = defaultRoute;
        this.state= state;
        this.cvaState=cvaState;
    },
    isActiveRoute: function (hashedPath) {
        return hashedPath.replace('#', '') === this.name; 
    }
}