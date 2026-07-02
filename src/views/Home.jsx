import Header from "../components/Header"
import Categories from "../components/Categories"
import menu from "../db/menu"

function Home() {
    return (
        <>
            <Header />
            <Categories menu={menu} />
        </>
    )
}

export default Home