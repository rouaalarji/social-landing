import { FaPlus } from 'react-icons/fa';

const stories = [
  { id: 1, name: "Ta story", isOwn: true, image: "https://i.pravatar.cc/150?img=1" },
  { id: 2, name: "Sami Ben Ali", image: "https://i.pravatar.cc/150?img=12" },
  { id: 3, name: "Amine Trabelsi", image: "https://i.pravatar.cc/150?img=33" },
  { id: 4, name: "Nour Gharbi", image: "https://i.pravatar.cc/150?img=47" },
  { id: 5, name: "Yassine Hammami", image: "https://i.pravatar.cc/150?img=52" },
  { id: 6, name: "Rania Jebali", image: "https://i.pravatar.cc/150?img=25" },
  { id: 7, name: "Mehdi Khelifi", image: "https://i.pravatar.cc/150?img=15" },
  { id: 8, name: "Salma Mejri", image: "https://i.pravatar.cc/150?img=32" },
  { id: 9, name: "Oussama Chaabane", image: "https://i.pravatar.cc/150?img=59" },
  { id: 10, name: "Ines Bouazizi", image: "https://i.pravatar.cc/150?img=44" },
  { id: 11, name: "Walid Sassi", image: "https://i.pravatar.cc/150?img=60" },
  { id: 12, name: "Mariem Toumi", image: "https://i.pravatar.cc/150?img=20" },
];

function Stories() {
  return (
    <div className="stories-track">
      {stories.map((story) => (
        <div className="story-card" key={story.id}>
          <img className="story-image" src={story.image} alt={story.name} />

          {story.isOwn && (
            <span className="story-add-btn">
              <FaPlus />
            </span>
          )}

          <div className="story-overlay"></div>
          <span className="story-name">{story.name}</span>
        </div>
      ))}
    </div>
  );
}

export default Stories;