using System.Threading.Tasks;

namespace PtoleCore
{
    public interface LoadableReference<R, V>
    {
        public R Reference
        {
            get;
        }
        public V Value
        {
            get;
        }
        public bool IsLoaded
        {
            get;
        }
        public Task Load();
    }
}
