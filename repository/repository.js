const fetch = require('node-fetch');

let url = process.env.VRK_API_URL;

let settings = { method: "Get" };

exports.getData = async () => {

    let response = await fetch(url, settings)
                .then(res => {
                    return res.json()
                })
                .catch(err => {
                    console.error(err);
                });

    if(response) {
        return response.data;
    }
}
    