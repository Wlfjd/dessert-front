import axios from 'axios';

const serverUrl = `${process.env.NEXT_PUBLIC_SERVER_URL}/api/v1`;

async function get<T>(endpoint: string): Promise<T> {
    return axios.get(serverUrl + endpoint, {
        headers: {
            // Authorization: `Bearer ${sessionStorage.getItem('token')}`
            Authorization:
                'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJiYmFuZ2xlYmJhbmdsZSIsImlhdCI6MTcwNzcxNjcwNywiZXhwIjoxNzA3NzI3NTA3LCJpZCI6NH0.zJ6r9dS2zmKQmyOW2fm3gPRgfWFJ1rwNv8XipSOBEn0'
        }
    });
}

async function post<T, D>(endpoint: string, data: D): Promise<T> {
    const bodyData = JSON.stringify(data);

    return axios.post(serverUrl + endpoint, bodyData, {
        headers: {
            'Content-Type': 'application/json',
            // Authorization: `Bearer ${sessionStorage.getItem('token')}`
            Authorization:
                'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJiYmFuZ2xlYmJhbmdsZSIsImlhdCI6MTcwNzcxNjcwNywiZXhwIjoxNzA3NzI3NTA3LCJpZCI6NH0.zJ6r9dS2zmKQmyOW2fm3gPRgfWFJ1rwNv8XipSOBEn0'
        }
    });
}

async function formPost<T, D>(endpoint: string, data: D): Promise<T> {
    return axios.post(serverUrl + endpoint, data, {
        headers: {
            'Content-Type': 'multipart/form-data',
            Authorization: `Bearer ${sessionStorage.getItem('token')}`
        }
    });
}

async function put<T, D>(endpoint: string, data: D): Promise<T> {
    const bodyData = JSON.stringify(data);

    return axios.put(serverUrl + endpoint, bodyData, {
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${sessionStorage.getItem('token')}`
        }
    });
}

async function patch<T, D>(endpoint: string, data: D): Promise<T> {
    const bodyData = JSON.stringify(data);

    return axios.patch(serverUrl + endpoint, bodyData, {
        headers: {
            'Content-Type': 'application/json',
            // Authorization: `Bearer ${sessionStorage.getItem('token')}`
            Authorization:
                'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJiYmFuZ2xlYmJhbmdsZSIsImlhdCI6MTcwNzcxNjcwNywiZXhwIjoxNzA3NzI3NTA3LCJpZCI6NH0.zJ6r9dS2zmKQmyOW2fm3gPRgfWFJ1rwNv8XipSOBEn0'
        }
    });
}

async function formPatch<T, D>(endpoint: string, data: D): Promise<T> {
    return axios.patch(serverUrl + endpoint, data, {
        headers: {
            'Content-Type': 'multipart/form-data',
            Authorization: `Bearer ${sessionStorage.getItem('token')}`
        }
    });
}

async function del<T>(endpoint: string, params = ''): Promise<T> {
    return axios.delete(serverUrl + endpoint + '/' + params, {
        headers: {
            Authorization: `Bearer ${sessionStorage.getItem('token')}`
        }
    });
}

export { serverUrl, get, post, formPost, put, patch, formPatch, del as delete };
