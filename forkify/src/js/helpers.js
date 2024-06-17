import {TIMEOUT_SEC} from './config.js'

const timeout = function (sec) {
    return new Promise(function (_, reject) {
        setTimeout(function () {
            reject(new Error(`Request took too long! Timeout after ${sec} seconds`));
        }, sec * 1000);
    })
}

export const AJAX = async function (url, uploadData = undefined) {
    try {
        
        const ud = {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(uploadData)
        }
        const fetchPro = uploadData ? fetch(url, ud): fetch(url);

        const res = await Promise.race([fetchPro, timeout(TIMEOUT_SEC)]);
        const data = await res.json();

        if(!res.ok) throw new Error(`${data.message} (${res.status})`);
        return data;
    } catch (err) {
        throw err;
    }
}