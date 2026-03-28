# API Response Documentation

## POST `/api/casenumber/case-data`

### Response Format

```json
{
    "success": true,
    "parsedCases": [
        {
            "serialNumber": "1",
            "caseTypeNumberYear": "M.A.C.T/227/2017",
            "petitionerRespondent": "MASTER VIPIN | Vs | NARESH KUMAR AND ORS.",
            "viewDetails": {
                "caseId": "201200002272017",
                "caseNumber": "DLND010127052017",
                "courtId": "1",
                "additionalParam": "",
                "serviceType": "CScaseNumber",
                "param5": "26",
                "param6": "7",
                "param7": "1260007",
                "param8": "CScaseNumber",
                "href": "#",
                "rawOnClick": "viewHistory(201200002272017,'DLND010127052017',1,'','CScaseNumber',26,7,1260007,'CScaseNumber')"
            }
        }
    ],
    "metadata": {
        "totalEstablishments": 1,
        "totalCases": 1,
        "courtName": "District and Sessions Judge,New Delhi, PHC: 1"
    },
    "setCookies": [],
    "rawHtml": "<div class='col border-top pt-1' id='showList2' style=''>\n\t\t\t\t<div class='courtsDiv'>\n\t\t\t\t<h3 class='h2class' tabindex='0'>Total Number of Establishments in Court Complex 1</h3>&nbsp;&nbsp;/&nbsp;&nbsp;\n\t\t\t\t<h4 class='h2class' tabindex='0'>Total number of cases : 1</h4></div><div class='text-center w-100'>\n\t\t\t\t    <a class='noToken' style='color:#559DE7; font-weight:bold;text-decoration: underline;' href='#td_court_name_1'>\tDistrict and Sessions Judge,New Delhi, PHC:&nbsp;1</a></div></div><table id='dispTable' class='table table-fixed table-bordered table-responsive mt-2' id='titlehid'>\n\t\t<thead><tr><th class='col-1' valign='top'>Sr No</th>\n\t\t\t\t\t<th class='col-2' valign='top'>Case Type/Case Number/Case Year</th>\n\t\t\t\t\t<th class='col-2' valign='top'>Petitioner Name versus Respondent Name</th>\n\t\t\t\t\t<th class='col-2' valign='top'>View</th>\n\t\t\t\t\t</tr></thead><tbody><tr><td colspan=3 id='td_court_name_1'>District and Sessions Judge,New Delhi, PHC<td></tr><tr><td>1</td>\n\t\t\t\t\t\t\t\t<td>M.A.C.T/227/2017</td>\n\t\t\t\t\t\t\t\t<td>MASTER VIPIN<br>Vs</br>NARESH KUMAR AND ORS.</td>\n\t\t\t\t\t\t\t\t<td><a class='someclass' href='#' onClick=\"viewHistory(201200002272017,'DLND010127052017',1,'','CScaseNumber',26,7,1260007,'CScaseNumber')\">View</a></td>\t\t\n\t\t\t\t\t\t\t\t</tr></tbody></table>"
}
```

### Response Fields

- **success**: Boolean indicating if the request was successful
- **parsedCases**: Array of case objects with details
- **metadata**: Information about total establishments and cases
- **setCookies**: Array of cookies to be set
- **rawHtml**: Raw HTML content from the source