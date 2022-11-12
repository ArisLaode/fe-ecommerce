import axios from 'axios';

const Rest = {

    async get(url, data) {
		let response = await axios.get(url, data);
		return response.data;
    },

}

export default Rest;