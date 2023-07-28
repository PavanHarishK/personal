import { Component } from "react";
import BlogItem from "../BlogItem";
import "./index.css";

const blogsData = [
  {
    id: 1,
    title: "Blog 1",
    imageUrl:
      "https://tse2.mm.bing.net/th/id/OIP.oun_JdJAfeVDKkjdv_X4rgHaE8?pid=ImgDet&rs=1",
    avatarUrl:
      "https://tse2.mm.bing.net/th/id/OIP.oun_JdJAfeVDKkjdv_X4rgHaE8?pid=ImgDet&rs=1",
    author: "Author Name",
    topic: "React Js",
  },
  {
    id: 2,
    title: "Blog 1",
    imageUrl:
      "https://tse2.mm.bing.net/th/id/OIP.oun_JdJAfeVDKkjdv_X4rgHaE8?pid=ImgDet&rs=1",
    avatarUrl:
      "https://tse2.mm.bing.net/th/id/OIP.oun_JdJAfeVDKkjdv_X4rgHaE8?pid=ImgDet&rs=1",
    author: "Author Name",
    topic: "React Js",
  },
];

class BlogsList extends Component {
  render() {
    return (
      <div>
        {blogsData.map((item) => (
          <BlogItem blogsData={item} key={item.id} />
        ))}
      </div>
    );
  }
}
export default BlogsList;
