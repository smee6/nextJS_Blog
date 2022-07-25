import Link from "next/link";
import Button from '@mui/material/Button';

export default function Sample({ user_data }) {
    return (
        <>
            <h1>First Post</h1>
            <h2>
                <div>
                    {user_data.map(e =>
                        e.name + " " + e.money + "원을 가지고 있다.\n"
                    )}
                    <Link href='/'>
                        <Button variant="outlined">
                            Back to home
                        </Button>
                    </Link>
                </div>
            </h2>
        </>
    );
}

export async function getServerSideProps() {
    const res = await fetch('http://localhost:3000/api/apitemplate');
    const data = await res.json()
    return {
        props: {
            user_data: data
        },
    }
}