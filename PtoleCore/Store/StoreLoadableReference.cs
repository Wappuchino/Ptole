using System.Threading.Tasks;

namespace PtoleCore.Store
{
    public class StoreLoadableReference<R, V> : LoadableReference<R, V>
    {
        private readonly Store<R, V> store;

        public StoreLoadableReference(Store<R, V> store, R reference)
        {
            this.store = store;

            Reference = reference;
        }

        public R Reference
        {
            get;
            private set;
        }

        public V Value
        {
            get;
            private set;
        }

        public bool IsLoaded
        {
            get;
            private set;
        }

        public async Task Load()
        {
            if (!IsLoaded)
            {
                Value = await store.Get(Reference);
                IsLoaded = true;
            }
        }
    }
}
