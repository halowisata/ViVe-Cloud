const { SecretManagerServiceClient } = require('@google-cloud/secret-manager');

async function getSecret(secretName) {
  const client = new SecretManagerServiceClient();
  const [version] = await client.accessSecretVersion({
    name: `projects/viveteam/secrets/${secretName}/versions/latest`,
  });

  return version.payload.data.toString('utf8');
}

module.exports = getSecret;
