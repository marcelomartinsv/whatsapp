import axios from 'axios';

export default async (info) => {
    const response = await axios.get('http://localhost:8080/' + info);
    return response.data;
}