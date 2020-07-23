import React from 'react';

import {isEmail} from 'validator';

export default {
    checkEmail: (val) => {
        if(!isEmail(val))
        return 'Must be a valid email address!'
    },
    checkPassword: (val) => {
        if(val.length < 8)
        return 'Must be 8 chars long!'
    }
}