import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export async function getStaticProps() {
  const files = fs.readdirSync('posts');
  const blogs = files.map((filename) => {
    const markdown = fs.readFileSync(path.join('posts', filename), 'utf-8');
    const { data } = matter(markdown);
    return {
      title: data.title,
      date: data.date,
    };
  });

  return { props: { blogs } };
}

export default function Blog({ blogs }) {
  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold mb-6">📰 Blog</h1>
      {blogs.map((blog, idx) => (
        <div key={idx} className="mb-4">
          <h2 className="text-xl font-semibold">{blog.title}</h2>
          <p className="text-gray-500">{blog.date}</p>
        </div>
      ))}
    </div>
  );
}
