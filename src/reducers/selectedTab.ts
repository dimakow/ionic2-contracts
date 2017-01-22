import {ActionReducer, Action} from '@ngrx/store';

export function selectedTab(state: any = null, {type, payload}) {
    switch(type) {
        case "SELECTED_TAB_CONTRACTS":
            return "contracts";
        case "SELECTED_TAB_GRAPH":
            return "graph";
        case "SELECTED_TAB_SETTINGS":
            return "settings";
        default:
            return "contracts";
    };
}
