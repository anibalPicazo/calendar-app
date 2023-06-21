import calendarApi from "../../src/api/calendarApi"

describe('Pruebas en el calendarApi', () =>{
    test('la url debe ser correcta',()=>{
        expect(calendarApi.defaults.baseURL).toBe(process.env.VITE_API_URL)
    }) 
    test('debe tener el token el header', async ()=>{
        localStorage.setItem('token','ABC');
        const res = await calendarApi.get('/auth').then((res) => res)
        .catch((res) => res);;
        console.log(res);
        expect(res.config.headers['x-token']).toBe('ABC')
        

    })
}) 