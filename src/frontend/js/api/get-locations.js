import axios from 'axios';

export default ({ page }) => axios({
  url: '/api/locations/',
  method: 'GET',
  params: { page },
});
