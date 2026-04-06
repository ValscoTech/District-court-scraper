const axios = require('axios');
const fs = require('fs');
const https = require('https');
const { buildForm } = require('./src/shared/utils/common.util');

const instance = axios.create({
  baseURL: 'https://services.ecourts.gov.in/ecourtindia_v6/',
  httpsAgent: new https.Agent({ rejectUnauthorized: false }),
  headers: {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36',
  }
});

async function run() {
  try {
    // 1. init
    let res = await instance.get('', { params: { p: 'casestatus/index', app_token: '' }});
    const match = res.data.match(/app_token['":\s]+([a-zA-Z0-9+/=_-]{20,})/);
    const appToken = match ? match[1] : '';
    console.log('Token:', appToken);
    
    const cookie = res.headers['set-cookie'];
    instance.defaults.headers.common['Cookie'] = cookie;

    // 2. Set Context
    const setBody = buildForm({
      p: 'casestatus/set_data',
      complex_code: '1260008',
      selected_state_code: '26',
      selected_dist_code: '8',
      selected_est_code: 'null'
    }, appToken);
    
    res = await instance.post('', setBody, { params: { p: 'casestatus/set_data' } });
    console.log('Set Data:', res.data);

    // 3. Captcha
    let getCaptchaBody = buildForm({}, appToken);
    await instance.post('', getCaptchaBody, { params: { p: 'casestatus/getCaptcha' }});
    res = await instance.get('vendor/securimage/securimage_show.php', {
      params: { t: Date.now() },
      responseType: 'arraybuffer'
    });
    fs.writeFileSync('test_captcha.png', res.data);
    console.log('Captcha saved to test_captcha.png. Please solve it.');
    
  } catch (e) {
    console.error(e);
  }
}

run();
