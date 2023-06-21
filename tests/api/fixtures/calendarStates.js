
export const  events = [
    {
            id: '1',
            title: 'Cumpleaños del Jefe',
            notes: 'Hay que comprar el pastel',
            start: new Date('2022-10-21 13:00:00'),
            end:  new Date('2022-10-21 15:00:00'),
           
        },
        {
            id: '2',
            title: 'Cumpleaños del Jefe 2',
            notes: 'Hay que comprar el pastel 2',
            start: new Date('2022-11-09 13:00:00'),
            end:  new Date('2022-11-09 15:00:00'),
           
        },
]
export const initialState = {
    events: [],
    activeEvent: null
}

export const initialStateWithEvents = {
    events: [...events],
    activeEvent: null
}
export const initialStateWithEventActive = {
    events: [...events],
    activeEvent: {...events[0]}
}