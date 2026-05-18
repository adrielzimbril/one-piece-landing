export type Member = {
  id: string;
  name: string;
  alias: string;
  jp: string;
  role: string;
  fruit: string;
  bounty: string;
  quote: string;
  bio: string;
  color: string;
  colorDeep: string;
  bg?: string;
};

export const members: Member[] = [
  {
    id: "luffy",
    name: "Monkey D. Luffy",
    alias: "Straw Hat",
    jp: "ルフィ",
    role: "Captain",
    fruit: "Gomu Gomu no Mi",
    bounty: "3,000,000,000",
    quote: "I'm gonna be King of the Pirates!",
    bio: "Reckless, loyal, and rubber-limbed. Luffy chases freedom across every sea and stops for nothing short of the One Piece itself.",
    color: "#E2231A",
    colorDeep: "#8A0E0A",
  },
  {
    id: "zoro",
    name: "Roronoa Zoro",
    alias: "Pirate Hunter",
    jp: "ゾロ",
    role: "Swordsman",
    fruit: "—",
    bounty: "1,111,000,000",
    quote: "Nothing happened.",
    bio: "Three-sword style master, chasing the title of the World's Greatest Swordsman. Sleeps as hard as he fights.",
    color: "#1F7A3A",
    colorDeep: "#0E3F1F",
  },
  {
    id: "nami",
    name: "Nami",
    alias: "Cat Burglar",
    jp: "ナミ",
    role: "Navigator",
    fruit: "—",
    bounty: "366,000,000",
    quote: "I'll draw a map of the whole world.",
    bio: "Reads the weather like a book and the room twice as fast. The Straw Hats sail by her wind.",
    color: "#F08A1C",
    colorDeep: "#9C4F08",
  },
  {
    id: "usopp",
    name: "Usopp",
    alias: "God Usopp",
    jp: "ウソップ",
    role: "Sniper",
    fruit: "—",
    bounty: "500,000,000",
    quote: "I am a brave warrior of the sea!",
    bio: "Tall tales, sharp aim. The sniper who lies his way into truth — and out of every certain death.",
    color: "#B8861A",
    colorDeep: "#6E4D08",
  },
  {
    id: "sanji",
    name: "Vinsmoke Sanji",
    alias: "Black Leg",
    jp: "サンジ",
    role: "Cook",
    fruit: "—",
    bounty: "1,032,000,000",
    quote: "A cook who doesn't help a lady is no man at all.",
    bio: "Hands for food, feet for fights. Cooks for anyone who's starving, kicks anyone who isn't worth it.",
    color: "#1E3A8A",
    colorDeep: "#0B1E54",
  },
  {
    id: "chopper",
    name: "Tony Tony Chopper",
    alias: "Cotton Candy Lover",
    jp: "チョッパー",
    role: "Doctor",
    fruit: "Hito Hito no Mi",
    bounty: "1,000",
    quote: "Shut up! That doesn't make me happy at all, you idiot!",
    bio: "A reindeer who became a doctor to save the lives medicine never could. Small body, vast heart.",
    color: "#E879A6",
    colorDeep: "#8B3361",
  },
  {
    id: "robin",
    name: "Nico Robin",
    alias: "Devil Child",
    jp: "ロビン",
    role: "Archaeologist",
    fruit: "Hana Hana no Mi",
    bounty: "930,000,000",
    quote: "I want to live!",
    bio: "Keeper of forbidden history, hunted by the world for knowing too much. Found a home by choosing one.",
    color: "#7C3AED",
    colorDeep: "#3F1373",
  },
  {
    id: "franky",
    name: "Franky",
    alias: "Iron Man",
    jp: "フランキー",
    role: "Shipwright",
    fruit: "—",
    bounty: "394,000,000",
    quote: "SUPER!",
    bio: "Cyborg shipwright with cola for blood. Built the Thousand Sunny — built himself, too.",
    color: "#06B6D4",
    colorDeep: "#085E6E",
  },
  {
    id: "brook",
    name: "Brook",
    alias: "Soul King",
    jp: "ブルック",
    role: "Musician",
    fruit: "Yomi Yomi no Mi",
    bounty: "383,000,000",
    quote: "Yohohoho!",
    bio: "A skeleton with a song and a sword. Promised a whale he'd come back — and he did, fifty years late.",
    color: "#E85B1A",
    colorDeep: "#7A2F08",
  },
  {
    id: "jinbe",
    name: "Jinbe",
    alias: "First Son of the Sea",
    jp: "ジンベエ",
    role: "Helmsman",
    fruit: "—",
    bounty: "1,100,000,000",
    quote: "Bushido is the heart of a man.",
    bio: "Fish-Man Karate master, former Warlord, now the hand on the wheel of the Sunny. Calm in any storm.",
    color: "#0E7490",
    colorDeep: "#063B4A",
  },
];

export const findMember = (id: string) => members.find((m) => m.id === id);
