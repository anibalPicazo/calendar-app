import { onCloseDateModal, onOpenDateModal, uiSlice } from "../../../src/store/ui/uiSlice";

describe('Pruebas el uiSlice', () =>{
    test('debe regresar el estado por defecto',()=>{
        expect(uiSlice.getInitialState()).toEqual({isDateModalOpen: false});
    }) 
    test('debe de cambiar el isDateModalOpen a true',()=>{
        let state = uiSlice.getInitialState()
        state = uiSlice.reducer(state, onOpenDateModal())
        expect(state.isDateModalOpen).toBeTruthy()
    })  
    test('debe de cambiar el isDateModalOpen a false',()=>{
        let state = uiSlice.getInitialState()
        state = uiSlice.reducer(state, onCloseDateModal())
        expect(state.isDateModalOpen).toBeFalsy()
    }) 
}) 