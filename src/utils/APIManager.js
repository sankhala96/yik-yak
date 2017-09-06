import superagent from 'superagent'

export  default {

    get: (url, params, callback) => {
        superagent
            .get(url)
            .query(params)
            .set('Accept', 'application/json')
            .end((err, res) => {

                if(err){
                    callback(err, null);
                    return
                }

                const confirmation = res.body.confirmation;
                if(confirmation != 'success'){
                    callback({message: res.body.message}, null);
                    return
                }

                callback(null, res.body)
            })
    },

    post: (url, body, callback) => {
        superagent
            .post(url)
            .send(body)
            .set('Accept', 'application/json')
            .end((err, response) => {
                if(err){
                    callback(err, null);
                    return
                }

                const confirmation = response.body.confirmation;
                if(confirmation != 'success'){
                    callback({message: response.body.message}, null);
                    return
                }

                callback(null, response.body)

            })

    },

    put: () => {

    },

    delete: () => {

    }

}