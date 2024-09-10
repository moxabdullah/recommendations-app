import { RecursiveCharacterTextSplitter } from "langchain/text_splitter";
import { TextLoader } from "langchain/document_loaders/fs/text";
import { openai, supabase } from "../../config/config.js"

async function splitDocuments(fileName) {
    const loader = new TextLoader(`public/${fileName}`);
    // const docs = await loader.load();
    const text = await loader.load();;
    // console.log(text[0].pageContent)
    const splitter = new RecursiveCharacterTextSplitter({
        chunkSize: 256,
        chunkOverlap: 20,
    });

    const output = await splitter.createDocuments([text[0].pageContent]);
    const pageContent = output.map((requiredContent) => requiredContent.pageContent)

    return pageContent
}

async function createEmbeddingAndStore(fileName) {
    let totalEmbeddings = []
    const dataChunk = await splitDocuments(fileName)
    console.log(`Number of dataChunks: ${dataChunk.length}`)

    await Promise.all(
        dataChunk.map(async (textChunk) => {
            const embeddingResponse = await openai.embeddings.create({
                model: "text-embedding-ada-002",
                input: textChunk
            });
            totalEmbeddings.push(embeddingResponse.data[0].embedding)
            const data = {
                content: textChunk,
                embedding: embeddingResponse.data[0].embedding
            }
            await supabase.from('movies').insert(data) 
        })
    )
    console.log(`Number of embeddingResponse: ${totalEmbeddings.length}`)
}
createEmbeddingAndStore('movies.txt')