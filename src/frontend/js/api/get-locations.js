import axios from 'axios';

export default ({page}) => {
    return axios({
        url: '/api/locations/',
        method: 'GET',
        params: { page },
    });
}
