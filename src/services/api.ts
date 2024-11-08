import axios from "axios";
const api = axios.create({
    baseURL: import.meta.env.VITE_BASE_URL
})

export default api;

api.interceptors.request.use((config)=>{
    const accessToken = localStorage.getItem('access_token');
    if(accessToken && accessToken != null) {
        config.headers['Authorization'] = `Bearer ${accessToken}`
    }
    return config;
}, (error)=>{ console.log(error);})

async function refreshToken() {
    try {
        const refreshT = localStorage.getItem('refresh_token')
        const result = await api.post('/auth/login/refresh', {
            refresh: refreshT
        })
        // console.log(result.data.access);
        return result.data.access
    } catch (error) {
        console.log('Ошибка обновления токена ', error);
    }
}

api.interceptors.response.use((config)=>config, async (error)=>{
    const originalConfig = error.config;
    if(error.response.status == 401 && !originalConfig._retry){
        originalConfig._retry = true;
        try {
            const accessToken = await refreshToken();
            localStorage.setItem('access_token', accessToken);
            api.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`
            return api(originalConfig)
        } catch (error) {
            console.log('Ошибка при обновлении токена ', error);
        }
    }
    return Promise.reject(error);
    // console.log(error);
})