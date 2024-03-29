import Layout from "../components/MyLayout";
import loadDB from "../lib/load-db";

const Post = ({ item }) => (
  <Layout>
    <h1>{item.title}</h1>
    <p>
      URL:{" "}
      <a target="_blank" href={item.url}>
        {item.url}
      </a>
    </p>
  </Layout>
);

Post.getInitialProps = async ({ query }) => {
  console.log("XXX", query.id);
  const db = await loadDB();
  
  let item = await db
    .child("item")
    .child(query.id)
    .once("value");
  item = item.val();

  return { item };
};

export default Post;
