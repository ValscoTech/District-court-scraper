const axios = require('axios');

async function run() {
  try {
    // 1. Init
    const initRes = await axios.post("http://127.0.0.1:3000/api/common/init");
    const sessionId = initRes.data.result.sessionId;
    console.log("Session ID:", sessionId);

    // 2. Set fields
    await axios.post("http://127.0.0.1:3000/api/common/set-fields", {
      sessionId,
      complexCode: "1260008",
      stateCode: "26",
      distCode: "8",
      estCode: "null"
    });
    console.log("Fields set.");

    // We need captcha for layer 1. Oh no!
    // I can't bypass captcha for Layer 1. Layer 1 literally sends captcha to eCourts.
    // However, I can look at the output of the user's manual tests if there are any left.
  } catch(e) {
    console.error(e.message);
  }
}
run();
