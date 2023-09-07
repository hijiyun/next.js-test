import Link from "next/link";
import { useRouter } from "next/router";


export default function Header():any{
    const router = useRouter();
    console.log("router???",router)
    return <div className="nav">
        <Link href="/" style={{color: router.pathname === '/'?'red':'blue'}}>Home</Link> <br></br>
        <Link href="about" style={{color: router.pathname === '/about'?'red':'blue'}}>About</Link>
    </div>
}