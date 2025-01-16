const OpenAI = require('openai');
const Transcend = require('../transcend.min');

const client = new OpenAI({
    apiKey: process.env['AEVOS_API_KEY'], // This is the default and can be omitted
    baseURL: "https://api.aevos.com/v1/verified",
});

async function main() {
    const chatCompletion = await client.chat.completions.create({
        messages: [{role: 'user', content: 'Say this is a test'}],
        model: 'gpt-4o',
    });

    const result = Transcend.verifySignature(chatCompletion)
    console.log("Signature is valid: " + result)
}

main();
