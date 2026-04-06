const axios = require('axios');

async function run() {
  try {
    // 1. Init
    const initRes = await axios.post("http://127.0.0.1:3000/api/common/init");
    const sessionId = initRes.data.result.sessionId;
    
    // 2. Set fields
    await axios.post("http://127.0.0.1:3000/api/common/set-fields", {
      sessionId,
      complexCode: "1260008",
      stateCode: "26",
      distCode: "8",
      estCode: "null"
    });

    // We need to fetch case detail to get valid PDF params
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

    const cdRes = await axios.post("http://127.0.0.1:3000/api/common/case-detail", caseDetailBody);
    const pdfProxyStr = cdRes.data.result.interim_orders[0].pdfProxy;
    console.log("Got pdfProxy from Layer 2:", pdfProxyStr);

    // Call it normally (single encoded URL)
    console.log("Testing normal fetch...");
    try {
      const pdfRes1 = await axios.get(`http://127.0.0.1:3000${pdfProxyStr}`, { responseType: 'arraybuffer' });
      console.log("Success! PDF size:", pdfRes1.data.length);
    } catch(e) {
      console.error("Normal fetch failed:", e.response ? e.response.data.toString() : e.message);
    }

    // Call it double encoded to simulate Postman behavior
    console.log("Testing double encoded fetch...");
    const urlParts = pdfProxyStr.split('?');
    const params = new URLSearchParams(urlParts[1]);
    const doubleEncodedParams = new URLSearchParams();
    for (const [k, v] of params.entries()) {
      // simulate postman putting `%3D%3D` into the value field
      doubleEncodedParams.append(k, encodeURIComponent(v)); 
    }
    try {
      const pdfRes2 = await axios.get(`http://127.0.0.1:3000${urlParts[0]}?${doubleEncodedParams.toString()}`);
      console.log("Success! PDF size:", pdfRes2.data.length);
    } catch(e) {
      console.error("Double encoded fetch failed:", e.response ? e.response.data.toString() : e.message);
    }


  } catch(e) {
    console.error("Error:", e.response ? e.response.data : e.message);
  }
}

run();
