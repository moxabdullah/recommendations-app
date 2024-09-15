import { openai, supabase } from "../../config/config.js"


const chatMessages = [{
    role: "system",
    content: `You are an enthusiastic movie expert who loves recommending movies to people. You will be given two pieces of information - some context about movies and a question. Your main job is to formulate a short answer to the question using what you understand from the provided context. If the answer is not given in the context, find the answer in the conversation history if possible. If you are unsure and cannot find the answer, say, "Sorry, I don't know the answer." Please do not make up the answer. Always speak as if you were chatting to a friend.`
}]


export async function main(userQuery) {
    return createUserQueryEmbedding(userQuery)
        .then(userQueryEmbedding => findNearestMatch(userQueryEmbedding))
        .then(matchUserQuery => getChatCompletion(matchUserQuery, userQuery))
        .then(modelOutput => modelOutput);
}

// main(query).then(data => console.log(data));

async function createUserQueryEmbedding(userQuery) {
    const embeddingResponse = await openai.embeddings.create({
        model: "text-embedding-ada-002",
        input: userQuery
    })

    return embeddingResponse.data[0].embedding
}

async function findNearestMatch(embedding) {
    const { data } = await supabase.rpc('match_movies', {
        query_embedding: embedding,
        match_threshold: 0.7,
        match_count: 4
    })
    const match = data.map((suggestions) => suggestions.content).join()

    return match
}

async function getChatCompletion(text, query) {
    chatMessages.push(
        {
            role: "user",
            content: `Context: ${text}, Question: ${query}`
        }
    )
    const completion = await openai.chat.completions.create({
        messages: chatMessages,
        model: "gpt-4o",
    });

    return completion.choices[0].message.content
}

// const agentResponse = await getChatCompletion(matchUserQuery, query)
// console.log(agentResponse)

// export { classicNormal, userMood, movieGenre, favMovie, favActor }