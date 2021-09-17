using System.Threading.Tasks;
using Amazon.DynamoDBv2;
using Amazon.DynamoDBv2.DataModel;

namespace PtoleCore.Store
{
    public class DynamoStore<K, V> : Store<K, V>
    {
        private static AmazonDynamoDBClient dynamoDBClient = new AmazonDynamoDBClient();
        private readonly DynamoDBContext context = new DynamoDBContext(dynamoDBClient);
        private readonly string tableName;

        public DynamoStore(string tableName)
        {
            this.tableName = tableName;
        }

        public Task<V> Get(K key)
        {
            return context.LoadAsync<V>(key, new DynamoDBOperationConfig
            {
                OverrideTableName = tableName
            });
        }

        public Task Put(V item)
        {
            return context.SaveAsync<V>(item, new DynamoDBOperationConfig
            {
                OverrideTableName = tableName
            });
        }
    }
}
