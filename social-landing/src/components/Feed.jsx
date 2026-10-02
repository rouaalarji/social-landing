import Post from './Post';

const posts = [
  {
    id: 1,
    author: "Chronicle News",
    avatar: "https://i.pravatar.cc/100?img=8",
    time: "2 h",
    verified: true,
    text: "Les personnes en situation de handicap sont de plus en plus nombreuses à réaliser leur rêve de devenir parents. Quelles sont les aides qui existent pour ces familles ?",
    image: "https://picsum.photos/seed/post1/600/400",
    likes: "4,2 K",
    comments: 87,
  },
  {
    id: 2,
    author: "Super Cycling Enthusiasts",
    avatar: "https://i.pravatar.cc/100?img=30",
    time: "3 h",
    verified: false,
    text: "Petite balade à vélo ce matin, le groupe était au complet ! 🚴‍♂️",
    video: "https://www.w3schools.com/html/mov_bbb.mp4",
    image: "https://picsum.photos/seed/videoposter/600/400",
    likes: "890",
    comments: 45,
  },
  {
    id: 3,
    author: "Sami Ben Ali",
    avatar: "https://i.pravatar.cc/100?img=12",
    time: "4 h",
    verified: false,
    text: "Bonne journée à tous 🌞",
    background: "linear-gradient(135deg, #667eea, #764ba2)",
    likes: "126",
    comments: 14,
  },
  {
    id: 4,
    author: "Cook With Leons",
    avatar: "https://i.pravatar.cc/100?img=20",
    time: "5 h",
    verified: true,
    text: "Journée nationale du chocolat aujourd'hui ! Partagez votre recette préférée en commentaire. 🍫",
    image: "https://picsum.photos/seed/chocolat/600/400",
    likes: "233 K",
    comments: 432,
  },
  {
    id: 5,
    author: "Voyage Tunisie",
    avatar: "https://i.pravatar.cc/100?img=45",
    time: "7 h",
    verified: true,
    text: "Les plus beaux coins de Tunisie : Sidi Bou Saïd, Djerba, Tozeur, Tabarka... Lequel est votre préféré ? 🇹🇳",
    images: [
      "https://picsum.photos/seed/tn1/600/400",
      "https://picsum.photos/seed/tn2/600/400",
      "https://picsum.photos/seed/tn3/600/400",
      "https://picsum.photos/seed/tn4/600/400",
    ],
    likes: "12 K",
    comments: 356,
  },
  {
    id: 6,
    author: "Tech Daily",
    avatar: "https://i.pravatar.cc/100?img=52",
    time: "9 h",
    verified: true,
    text: "Démo rapide : voici comment fonctionne ce nouvel outil de développement.",
    video: "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4",
    image: "https://picsum.photos/seed/techvideo/600/400",
    likes: "5,8 K",
    comments: 129,
  },
  {
    id: 7,
    author: "Nour Gharbi",
    avatar: "https://i.pravatar.cc/100?img=47",
    time: "11 h",
    verified: false,
    text: "Qui a déjà essayé de coder une application React ? Je cherche des conseils pour bien démarrer ! 💻",
    likes: "58",
    comments: 31,
  },
  {
    id: 8,
    author: "Astuce Jardinage",
    avatar: "https://i.pravatar.cc/100?img=15",
    time: "13 h",
    verified: false,
    text: "Notre communauté partage ses conseils pour cultiver un joli carré potager, même en appartement. 🌱",
    image: "https://picsum.photos/seed/jardin/600/400",
    likes: "1,4 K",
    comments: 62,
  },
  {
    id: 9,
    author: "Football Live",
    avatar: "https://i.pravatar.cc/100?img=33",
    time: "1 j",
    verified: true,
    text: "Le meilleur but de la semaine ! Qu'en pensez-vous ? ⚽",
    video: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
    image: "https://picsum.photos/seed/foot/600/400",
    likes: "48 K",
    comments: 1200,
  },
  {
    id: 10,
    author: "Rania Jebali",
    avatar: "https://i.pravatar.cc/100?img=25",
    time: "1 j",
    verified: false,
    text: "Nouvelle semaine, nouveaux objectifs. On avance ! 💪",
    background: "linear-gradient(135deg, #f093fb, #f5576c)",
    likes: "210",
    comments: 22,
  },
];

function Feed() {
  return (
    <div className="feed">
      {posts.map((post) => (
        <Post key={post.id} {...post} />
      ))}
    </div>
  );
}
export default Feed;