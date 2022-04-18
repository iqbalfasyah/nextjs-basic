import Layout from "../../components/layout";
import { useRouter } from "next/router";

interface UserProps {
    dataUsers: Array<any>;
}
export default function Index(props: UserProps) {
    const { dataUsers } = props;
    const router = useRouter();
    return (
        <div>
            <Layout>
                <div>User Index</div>
                {dataUsers.map((user) => {
                    return (
                        <>
                            <div
                                key={user.id}
                                onClick={() => {
                                    router.push(`/users/${user.id}`);
                                }}
                            >
                                <hr />
                                <p>{user.name}</p>
                                <p>{user.email}</p>
                                <hr />
                            </div>
                        </>
                    );
                })}
            </Layout>
        </div>
    );
}

export async function getStaticProps() {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const dataUsers = await res.json();
    return {
        props: {
            dataUsers: dataUsers,
        },
    };
}
