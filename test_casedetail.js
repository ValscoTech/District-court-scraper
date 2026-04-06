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

    // 3. Captcha (bypass or manual prompt is tricky, let me just try fetching a case detail directly because case-detail doesn't require captcha!)
    // Wait, case-detail might require the session to have successfully loaded Layer 1 first?
    // Let's pass the parameters that the user provided in the postman snapshot!
    const caseDetailBody = {
      sessionId: sessionId,
      caseNo: "202900000012024",
      cino: "DLCT110000012024",
      courtCode: "5",
      hideparty: "",
      searchFlag: "CScaseNumber",
      stateCode: "26",
      distCode: "8",
      complexCode: "1260008",
      searchBy: "CScaseType"
    };

    console.log("Fetching case detail layer 2 directly...");
    const cdRes = await axios.post("http://127.0.0.1:3000/api/common/case-detail", caseDetailBody);
    console.log("CASE DETAIL RESPONSE:");
    console.log(JSON.stringify(cdRes.data, null, 2));

  } catch(e) {
    console.error("Error:", e.response ? JSON.stringify(e.response.data) : e.message);
  }
}

run();
