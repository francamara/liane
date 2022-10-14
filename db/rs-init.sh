#!/bin/bash

mongosh <<EOF
var config = {
    "_id": "mongo-set",
    "members": [
        {
            "_id": 0,
            "host": "mongo1:27017"
        },
        {
            "_id": 1,
            "host": "mongo2:27017"
        },
        {
            "_id": 2,
            "host": "mongo3:27017"
        }
    ]
};
rs.initiate(config);
rs.status();
EOF
