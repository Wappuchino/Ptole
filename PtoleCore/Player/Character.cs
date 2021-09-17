namespace PtoleCore.Player
{
    public class Character
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
        public LoadableReference<string, Player> Player
        {
            get;
        }

    }
}
