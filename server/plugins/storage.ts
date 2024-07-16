import mongoDriver from "unstorage/drivers/mongodb"

export default defineNitroPlugin(async () => {
  const config = useRuntimeConfig()
  const storage = useStorage()

  const driver = mongoDriver({
    connectionString: config.mongoDB,
    collectionName: "todos",
    databaseName: "nuxt_todo"
  })

  storage.mount('mongo:todos', driver)
})
