import axios from 'axios';

export default ({ name, ...coords }) => axios({
  url: `/api/locations/${name}`,
  method: 'POST',
  data: coords,
});

