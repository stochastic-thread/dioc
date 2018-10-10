const auth_token = process.env.DO_TOKEN_ABC;

const DigitalOcean = require('do-wrapper').default,
    api = new DigitalOcean(auth_token, 1024);

console.log(" -- Retrieving account info. -- ");
api.account((err, res, body) => {
  console.log(body);
}i);

console.log("\n");
console.log("\n");
console.log(" -- Creating a droplet. -- ");

configuration={
  "name": "example.com",
  "region": "nyc3",
  "size": "s-1vcpu-1gb",
  "image": "ubuntu-16-04-x64",
  "ssh_keys": null,
  "backups": false,
  "ipv6": true,
  "user_data": null,
  "private_networking": null,
  "volumes": null,
  "tags": [
    "web"
  ]
i}

let id = null;

api.dropletsCreate(configuration,(err, res, body) => {
    console.log('err:');
    console.log(err);
    console.log('res:');
    console.log(res);
    console.log('body:');
    console.log(body);

    if(id === null){
      id = body.droplet.id;
    } else {
      console.log(`id: #{id}`)
    };
});

console.log(id);

