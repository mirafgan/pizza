import { fetchData } from "@/utils"
import Link from "next/link"

const Menu = async () => {
    const { menu } = await fetchData("https://api.mirafgan.me/papajohns/menu")
    console.log(menu);
    return (
        <ul className="flex gap-x-10 mt-5 pl-5">
            {menu?.map(item => <Link key={item.name} href={item.slug}>
                <li >
                    {item.name}
                </li>
            </Link>)}
        </ul>
    )
}

export default Menu