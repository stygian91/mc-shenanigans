import axios from 'axios';

export default name => axios({
  url: `/api/locations/${name}`,
  method: 'DELETE',
});
