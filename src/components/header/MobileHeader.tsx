export default function MobileHeader() {
    return (
        <div className="block lg:hidden mt-4">
            <div className="flex justify-between items-center">
                <a href="/" className="flex items-center">
                    <img src="/assets/imgs/footer-1/logo.svg" alt="zelio" />
                    <span className="text-xl ml-2 text-black">william.design</span>
                </a>
                <div className="burger-icon border rounded-2xl cursor-pointer">
                    <span className="block w-5 h-[2px] bg-black my-[4px]"></span>
                    <span className="block w-5 h-[2px] bg-black my-[4px]"></span>
                    <span className="block w-5 h-[2px] bg-black my-[4px]"></span>
                </div>
            </div>

            <nav className="mt-4">
                <ul className="space-y-2">
                    <li><a href="index.html">Landing page</a></li>
                    <li><a href="index-1.html">Home 1 - Designer</a></li>
                    <li><a href="index-2.html">Home 2 - Developer</a></li>
                    <li><a href="index-3.html">Home 3 - Author</a></li>
                    <li><a href="services.html">Services</a></li>
                    <li><a href="work.html">Portfolio</a></li>
                    <li><a href="pricing.html">Pricing</a></li>
                    <li><a href="blog-list.html">Blog</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>
        </div>
    )
}
