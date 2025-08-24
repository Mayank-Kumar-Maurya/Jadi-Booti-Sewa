const OpenAI = require('openai');
const  path = require("path");

const ai = new OpenAI(
    {
        apiKey: process.env.OPEN_AI_KEY,
    }
);

let textAi = async(message)=>
{
    const response = await ai.chat.completions.create(
        {
            messages: [{role: "system", content: "As a medical expert tell the user about the urgent treatment, cure, medicines, ointment and consultant without any 'unnessesary speech' about the problem given in this prompt"},
                {role: "user", content: `prompt: "${message}"`}],
            model: "gpt-4.1-mini",
        }
    );

    return response.choices[0].message;
}

let imageIdentification = async(imageUrl)=>
{
    const response = await ai.responses.create(
        {
            model: "gpt-4.1-mini",
            input: [
                {
                    role: "user",
                    content: [
                        { type: 'input_text', text: "As a medical expert tell, What's in this image? Tell the user about the urgent treatment, cure, medicines, ointment and consultant"},
                        {
                            type: 'input_image',
                            image_url: imageUrl,
                            
                        }
                    ]
                }
            ]
        }
    );

    return response.output[0].content;
}

let speechAi = async()=>
{
   console.log("TODO");
}


module.exports = {textAi, imageIdentification, speechAi};