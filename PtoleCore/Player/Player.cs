using System.Collections.Generic;

namespace PtoleCore.Player
{
    public class Player
    {
        public string Id
        {
            get;
            set;
        }
        public string Name
        {
            get;
            set;
        }
        public List<LoadableReference<string, Character>> Characters
        {
            get;
        }
    }
}
