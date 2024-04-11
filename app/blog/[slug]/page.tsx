
export const revalidate = 420;

interface Post {
    title: string,
    content: string,
    slug: string,
}

interface Props {
    params:{slug : string};
   
}

export default async function BlogPostPage({params}: Props){

    // deduped
    const posts: Post[] = await fetch("http://localhost:3000/api/content").then(
        (res) => res. json()
        );
        const post = posts[0]
    return (
        <div>
            <h1>{post.title}</h1>
            <p>{post.content}</p>

        </div>
    )
}