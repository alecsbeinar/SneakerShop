import axios from 'axios';


const facebookLogin = (accesstoken) => {
    console.log(accesstoken);
    // TODO: get client_id and client_secret from api
    axios
        .post('http://127.0.0.1:8000/auth/convert-token', {
            token: accesstoken,
            backend: 'facebook',
            grant_type: 'convert_token',
            client_id: 'VAfL1wKZ3WVdfJzrzdmLaYGiqBanzsTVkG9NhaFn',
            client_secret:
                'EiT080xhH4hY8rg9yHfFXqcDRmTLqjizkAa2YYvZAq3CRrbrTYf0XbYC6vWHRcHE3cROBGvA2b2DyQ2htzWKJRykbmk68uZWYnNws1dmPq2aKcwJI4Mq3uRZt2hPILLZ',
        })
        .then((res) => {
            localStorage.setItem('access_token', res.data.access_token);
            localStorage.setItem('refresh_token', res.data.refresh_token);
        });
};

export default facebookLogin;