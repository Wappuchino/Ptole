using System.Threading.Tasks;

namespace PtoleCore.Store
{
    public interface Store<K, V>
    {
        Task Put(V item);
        Task<V> Get(K key);
    }
}
