
export default function Blog() {
  const posts = [
    {
      title: "Early Detection Saves Lives",
      image: "https://source.unsplash.com/600x400/?breast-cancer,health",
      excerpt: "Early screening can significantly reduce mortality."
    },
    {
      title: "Breast Self Examination Guide",
      image: "https://source.unsplash.com/600x400/?health,woman",
      excerpt: "Learn how to examine yourself correctly."
    },
    {
      title: "Nutrition & Breast Health",
      image: "https://source.unsplash.com/600x400/?healthy-food,woman",
      excerpt: "Healthy eating supports prevention and recovery."
    }
  ];

  return (
    <div className="p-8 grid md:grid-cols-3 gap-6">
      {posts.map((p, i) => (
        <div key={i} className="border rounded shadow">
          <img src={p.image} className="h-48 w-full object-cover"/>
          <div className="p-4">
            <h3 className="font-bold">{p.title}</h3>
            <p>{p.excerpt}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
