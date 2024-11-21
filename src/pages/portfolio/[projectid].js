import {useRouter} from "next/router";

/**
 * 你有相同类型的页面，为不同数据的加载
 * @returns {JSX.Element}
 * @constructor
 */
function PortfolioPage(){
    const router = useRouter();
    console.log(router.pathname)
    console.log(router.query)

    return (
        <div>
            <h1>This is Portfolio Page</h1>
            <li>占位符</li>
        </div>
    )
}
export default PortfolioPage