import Layout from "../components/layout";

interface Post {
    id: number;
    title: string;
    body: string;
}
interface BlogProps {
    dataBlog: Post[];
}
export default function Index(props: BlogProps) {
    const { dataBlog } = props;
    return (
        <div>
            <Layout>
                <div>Blog Page</div>
                {dataBlog.map((blog) => {
                    return (
                        <div>
                            <h3>{blog.title}</h3>
                            <p>{blog.body}</p>
                        </div>
                    );
                })}
            </Layout>
        </div>
    );
}

export async function getServerSideProps() {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const dataBlog = await res.json();
    return {
        props: {
            dataBlog,
        },
    };
}
