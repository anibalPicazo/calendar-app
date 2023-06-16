export const convertEventDates = (events) =>{
    events.map((event)=>{
        event.start = new Date (event.start)
        event.end = new Date (event.end)
    })
    return events
}