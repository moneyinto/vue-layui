import axios from 'axios';

const baseUrl = '/api';

const _get = async (url) => {
    url = baseUrl + url;
    let response = await axios.get(url);
    return response.data;
};

const _post = async (url, data) => {
    url = baseUrl + url;
    let response = await axios.post(url, data);
    return response.data;
};

export default {
    get: _get,
    post: _post
};
