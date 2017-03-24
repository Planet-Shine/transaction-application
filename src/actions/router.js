
export const ROUTER_STATE_CHANGE = 'ROUTER_STATE_CHANGE';

export const routerStateChange = ({state}) => {
    return {
        type: ROUTER_STATE_CHANGE,
        payload: {state}
    };
};