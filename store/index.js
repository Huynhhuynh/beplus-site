export const state = () => {
    return {
        body_classes: []
    }
}

export const mutations = {
    body_add_class ( state, classes ) {
        state.body_classes.push( classes )
    },
    body_remove_class ( state, classes ) {
        let index = state.body_classes.indexOf( classes );
        if( index <= -1 ) return;
        state.body_classes.splice( index, 1 );
    }
}