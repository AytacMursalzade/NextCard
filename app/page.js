import BlogCard from "../components/BlogCard";
import styles from "./styles.module.css"

async function getPosts(){
  const response = await fetch('https://dummyjson.com/products?limit=10')
  return response.json();
}

export default async function Home() {
  const {posts} = await getPosts();

  

  return (
    <div className={styles.blogContainer}>
      {posts.map((posts) => {
          <BlogCard key={posts.id} {...posts} />
        })}
     
    </div>
  );
}
