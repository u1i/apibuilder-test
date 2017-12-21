var Arrow = require('arrow');
var Model = Arrow.createModel('customer', {
    "connector": "appc.arrowdb",
    "fields": {
        "cname": {
            "type": "string"
        },
        "ccity": {
            "type": "string"
        },
        "ccountry": {
            "type": "string"
        },
        "cemail": {
            "type": "string"
        }
    },
    "actions": [
        "create",
        "read",
        "update",
        "delete",
        "deleteAll"
    ]
});
module.exports = Model;