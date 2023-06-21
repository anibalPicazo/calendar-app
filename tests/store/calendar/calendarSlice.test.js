import { calendarSlice, onAddNewEvent, onDeleteEvent, onSetActiveEvent, onUpdateEvent, onUpdateEvents } from "../../../src/store/calendar/calendarSlice";
import { initialState, initialStateWithEventActive, initialStateWithEvents } from "../../api/fixtures/calendarStates";


describe('Pruebas el calendarSlice', () =>{
    test('debe regresar el estado por defecto',()=>{
        expect(calendarSlice.getInitialState()).toEqual(initialState);
    }) 
     test('debe seleccionar el evento',()=>{
        
        let state = calendarSlice.reducer(initialStateWithEvents, onSetActiveEvent(initialStateWithEvents.events[0]))
        expect(initialStateWithEventActive.activeEvent).toEqual(state.activeEvent);
    }) 
    test('debe añadir el evento',()=>{
        
        let state = calendarSlice.reducer(initialState, onAddNewEvent(initialStateWithEvents.events[0]))
        expect(state).toEqual({events:[initialStateWithEvents.events[0]],activeEvent: null});
    }) 
    test('debe actualizar el evento',()=>{
        let event = {...initialStateWithEvents.events[0]}
        event.notes = 'nota modificada'
        const events = initialStateWithEvents.events.map((eventInterno)=>{
            if ( event.id === eventInterno.id ) {
                return event;
            }

            return eventInterno;
        });
        let state = calendarSlice.reducer(initialStateWithEvents, onUpdateEvent(event))
        expect(state.events).toEqual(events);
    }) 
    test('debe eliminar el evento',()=>{
        
        let state = calendarSlice.reducer(initialStateWithEventActive, onDeleteEvent())
        let removedEvents = initialStateWithEventActive.events.filter( eventInterno => eventInterno.id !== initialStateWithEventActive.activeEvent.id );
        expect(state.events).toEqual(removedEvents);
    }) 
    test('debe actualizar los eventos',()=>{
        
        let state = calendarSlice.reducer(initialState, onUpdateEvents(initialStateWithEvents.events))
        expect(state.events).toEqual(initialStateWithEvents.events);
    }) 
   
}) 