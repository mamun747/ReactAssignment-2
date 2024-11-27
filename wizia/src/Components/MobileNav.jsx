const MobileNav = ({event}) => {
  return (
    <>
    <ul className="text-white pl-5 space-y-1 pb-3 md:hidden">
        <li><a href="#" className="hover:text-text2 transition-all">About Us</a></li>
        <li><a href="#" className="hover:text-text2 transition-all">Pricing</a></li>
        <li><a href="#" className="hover:text-text2 transition-all">Customers</a></li>
        <li><a href="#" className="hover:text-text2 transition-all">Solutions</a></li>
    </ul>
    </>
  )
}

export default MobileNav;