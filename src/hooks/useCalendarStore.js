import { useDispatch, useSelector } from 'react-redux';
import { onAddNewEvent, onDeleteEvent, onSetActiveEvent, onUpdateEvent, onUpdateEvents } from '../store';
import calendarApi from '../api/calendarApi';
import { convertEventDates } from '../helpers/convertEventDates';


export const useCalendarStore = () => {
  
    const dispatch = useDispatch();
    const { events, activeEvent } = useSelector( state => state.calendar );
    const { user } = useSelector( state => state.auth );

    const setActiveEvent = ( calendarEvent ) => {
        dispatch( onSetActiveEvent( calendarEvent ) )
    }

    const startSavingEvent = async( calendarEvent ) => {
        // TODO: llegar al backend

        // Todo bien
        if( calendarEvent.id ) {
            // Actualizando
            try {
                const { data } = await calendarApi.put(`/events/${calendarEvent.id}`,calendarEvent) 

            } catch (error) {
                console.log(error);
            }
            dispatch( onUpdateEvent({ ...calendarEvent,user }) );
        } else {
            // Creando
            const { data } = await calendarApi.post('/events',calendarEvent)
            dispatch( onAddNewEvent({ ...calendarEvent, id: data.event.id, user }) );
        }
    }

    const startDeletingEvent = async () => {
        // Todo: Llegar al backend

        const { data } = await calendarApi.delete(`/events/${activeEvent.id}`)
        dispatch( onDeleteEvent() );
    }
    const startLoadingEvents = async () => {
        const {data} = await calendarApi.get('/events')
        
        dispatch(onUpdateEvents(convertEventDates(data.events)))
    }

    return {
        //* Propiedades
        activeEvent,
        events,
        hasEventSelected: !!activeEvent,

        //* Métodos
        startDeletingEvent,
        setActiveEvent,
        startSavingEvent,
        startLoadingEvents
    }
}
