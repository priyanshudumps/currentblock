export const config = {
  name: "dataverse app", // app name should NOT contain "-"
  logo: "https://bafybeifozdhcbbfydy2rs6vbkbbtj3wc4vjlz5zg2cnqhb2g4rm2o5ldna.ipfs.w3s.link/dataverse.svg",
  website: ["https://658483321eb6072ee5c8b33c--grand-panda-230253.netlify.app/","http://localhost:3867/","https://main--grand-panda-230253.netlify.app/","https://currentblock.netlify.app/","https://658483321eb6072ee5c8b33c--grand-panda-230253.netlify.app/"], // you can use localhost:(port) for testing
  defaultFolderName: "Main",
  description: "This is a news publishing platform",
  models: [
    {
      isPublicDomain: true, // default
      schemaName: "post.graphql",
      encryptable: [], // strings within the schema and within the array represent fields that may be encrypted, while fields within the schema but not within the array represent fields that will definitely not be encrypted
    },
  ],
  ceramicUrl: null, // leave null to use dataverse test Ceramic node. Set to {Your Ceramic node Url} for mainnet, should start with "https://".
};
