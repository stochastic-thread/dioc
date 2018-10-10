const curl = new (require( 'curl-request' ))();

curl.setHeaders([
    'user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/62.0.3202.94 Safari/537.36'
])
.get('https://www.google.com')
.then(({statusCode, body, headers}) => {
    console.log(statusCode, body, headers)
})
.catch((e) => {
    console.log(e);
});
curl
.setBody({
 'input-arr[0]': 'input-arr-val0',
 'input-arr[1]': 'input-arr-val1',
 'input-arr[2]': 'input-arr-val2',
 'input-name': 'input-val'
})
.post('https://www.google.com')
.then(({statusCode, body, headers}) => {
    console.log(statusCode, body, headers)
})
.catch((e) => {
    console.log(e);
});
