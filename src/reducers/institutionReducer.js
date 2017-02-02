const defaultState = [
    {id: 1, name: 'Faber College'},
    {id: 2, name: 'Adams College'},
    {id: 3, name: 'South Central Louisiana State University'},
    {id: 4, name: 'Eastern State University'},
    {id: 7, name: 'Greendale Community College'},
    {id: 5, name: 'Harris University'},
    {id: 6, name: 'Columbus University'},
    {id: 7, name: 'Greendale Community College'},
    {id: 8, name: 'University of Los Angeles'},
    {id: 9, name: 'Harrison University'},
    {id: 10, name: 'Port Chester University'},
    {id: 11, name: 'Hillman College'}
];

export default function institutionReducer(state = defaultState, action){
    switch(action.type){
        default:
            return state.sort((a, b) =>{
                return a.name.toLowerCase().localeCompare(b.name.toLowerCase());
            });
    }
}