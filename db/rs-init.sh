#!/bin/bash

mongosh <<EOF
var config = {
    "_id": "mongo-set",
    "members": [
        {
            "_id": 0,
;            "host": "mongo1:"${DB_1_PORT}""
        },
        {
            "_id": 1,
            "host": "mongo2:"${DB_2_PORT}""
        },
        {
            "_id": 2,
            "host": "mongo3:"${DB_3_PORT}""
        }
    ]
};
rs.initiate(config);
rs.status();
EOF
