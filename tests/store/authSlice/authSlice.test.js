import { authSlice, onChecking, onLogOut, onLogin, onResetError } from "../../../src/store/authSlice/authSlice";
import { initialState, notAuthenticatedState } from "../../api/fixtures/authStates";
import { testUserCredentials } from "../../api/fixtures/testUser";

describe('Pruebas el authSlice', () =>{
    test('debe regresar el estado por defecto',()=>{
        expect(authSlice.getInitialState()).toEqual(initialState);
    }) 
    test('debe realizar un login',()=>{
      let  state = authSlice.reducer(initialState, onLogin(testUserCredentials))
        expect(state).toEqual({
            status: 'authenticated',
            user: testUserCredentials,
            errorMessage: undefined
        })
    })  
     test('debe realizar un logOut',()=>{
      let  state = authSlice.reducer(initialState, onLogOut('credenciales'))
        expect(state).toEqual({
            status: 'not-authenticated',
            user: {},
            errorMessage: 'credenciales'
        })
    })  
     test('debe realizar un checking',()=>{
      let  state = authSlice.reducer(initialState, onChecking())
        expect(state).toEqual(initialState)
    })   
    test('debe realizar un resetMessage',()=>{
        let state = authSlice.reducer(initialState,onLogOut('credenciales'))
        let  newState = authSlice.reducer(state, onResetError())
        expect(newState).toEqual({
            status: 'not-authenticated',
            user: {},
            errorMessage: undefined
        })
    })  
    // test('debe de cambiar el isDateModalOpen a false',()=>{
    //     let state = uiSlice.getInitialState()
    //     state = uiSlice.reducer(state, onCloseDateModal())
    //     expect(state.isDateModalOpen).toBeFalsy()
    // }) 
}) 