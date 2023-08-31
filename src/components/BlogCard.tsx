interface propsTyps {
  img: string;
  title: string;
  comment: string;
  date: string;
}

const BlogCard: React.FC<propsTyps> = ({ img, title, comment, date }) => {
  return (
    <div className=" space-y-4">
      <img
        src={img}
        alt="post"
        className=" cursor-pointer  rounded-lg hover:scale-105 transition-transform"
      />

      <div className=" text-accent font-medium">
        <span>{date} </span>
        <span>{comment} Comments </span>
      </div>
      <h2 className=" font-bold text-xl"> {title}</h2>
    </div>
  );
};

export default BlogCard;
