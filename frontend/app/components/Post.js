import Link from 'next/link';

const Post = ({ post }) => {
	return (
		<>
			<Link href={'/'}>Назад</Link>
			<br />
			<h2>{post.testName}</h2>
			<p>{post.testBody}</p>
			<strong>Author ID: {post.id}</strong>
		</>
	);
};

export default Post;
