import { CosmosClient } from "@azure/cosmos";

const endpoint = process.env.COSMOS_ENDPOINT || "";
const key = process.env.COSMOS_KEY || "";
const databaseId = "SparkHubDB";
const containerId = "Chats";

let client: CosmosClient | null = null;

if (endpoint && key) {
    client = new CosmosClient({ endpoint, key });
    // Initialize DB and Container if they don't exist
    // Note: In production, these should be pre-provisioned via IaC, but for dev we check lazily.
    // We swallow errors here to avoid crashing if config is bad, but operations will fail later.
    try {
        client.databases.createIfNotExists({ id: databaseId }).then(({ database }) => {
            database.containers.createIfNotExists({ id: containerId }).catch(console.error);
        }).catch(console.error);
    } catch (e) {
        console.error("Failed to initialize Cosmos DB client", e);
    }
} else {
    console.warn("COSMOS_ENDPOINT and COSMOS_KEY are not set. Chat history will not be saved.");
}

export const cosmosContainer = client ? client.database(databaseId).container(containerId) : null;
