import { BsArrowRightShort } from 'react-icons/bs'
import { useEffect, useState } from 'react'


const Header = () => {

	const [toggle, setToggle] = useState(false) // Toggle burger menu
	const [background, setBackground] = useState(false) // Set navbar background
	
	// Change opacity of navbar on scroll
	const scrollHandler = () => { 
		if(window.scrollY > 20) {
			setBackground(true);
		} else {
			setBackground(false);
		}
	}

	useEffect(() => {

		window.addEventListener("DOMContentLoaded", scrollHandler); // Check on load (in case of already scrolled page)
		window.addEventListener('scroll', scrollHandler);
		return () => {
			window.removeEventListener('scroll', scrollHandler);
		};
	},[]);

	const handleLogin = () => {
		window.location.replace('https://app.partymeet.me');
	}
	

    return(
		<div className={background ? "fixed top-0 w-full z-[100] transition duration-200 bg-[#1a1a1a]" : "fixed top-0 w-full z-[100] transition duration-200"}>
			<nav className="navbar relative px-4 py-4 flex justify-between items-center justify-center bg-none">
				<a className="navbar-brand lg:inline-block md:ml-[100px] lg:ml-24" href="/">
					PartyMeet.me
				</a>
				<div className="lg:hidden">
					<button className="navbar-burger flex items-center text-white p-6" onClick={() => setToggle(!toggle)}>
						<svg className="block h-4 w-4 fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
							<title>Burger menu</title>
							<path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
						</svg>
					</button>
				</div>
				<ul className="hidden lg:ml-[75px] lg:flex lg:mx-auto lg:flex lg:items-center lg:w-auto lg:space-x-6">
					<li><a className="nav-link text-sm hover:text-gray-500 transition duration 200" href="#read-about-app">Magia Aplikacji</a></li>
					<li><a className="nav-link text-sm hover:text-gray-500 transition duration 200" href="#read-about-earnings">Zarabiaj</a></li>
					<li><a className="nav-link text-sm hover:text-gray-500 transition duration 200" href="#contact-us">Kontakt</a></li>
				</ul>
				<a className="nav-btn lg:flex hidden lg:inline-block lg:ml-auto lg:mr-12 transition duration-200 hover:pointer" style={{cursor: 'pointer'}} onClick={handleLogin}>Zaloguj się</a>
				<a className="hover:bg-[#f1b18e] nav-btn lg:flex hidden lg:inline-block w-[175px] lg:mr-24 h-[60px] bg-[#E77C40] transition duration-200 hover:pointer" style={{cursor: 'pointer'}} onClick={handleLogin}>Zarejestruj się!&emsp;<BsArrowRightShort size={24} fontWeight={700}/></a>
			</nav>
			<div className={toggle ? 'navbar-menu relative z-50' : 'navbar-menu relative z-50 hidden'}>
				<div onClick={() => setToggle(!toggle)} className="navbar-backdrop fixed inset-0 bg-gray-800 opacity-25"></div>
				<nav className="fixed top-0 left-0 bottom-0 flex flex-col w-5/6 max-w-sm py-6 px-6 bg-white border-r overflow-y-auto">
					<div className="flex items-center mb-8">
						<a className="text-[#262626] font-black text-[24px] mr-auto leading-none" href="#">
							PartyMeet.me
						</a>
						<button className="navbar-close" onClick={() => setToggle(!toggle)}>
							<svg className="h-6 w-6 text-gray-400 cursor-pointer hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
							</svg>
						</button>
					</div>
					<div>
						<ul>
							<li className="mb-1">
								<a onClick={() => setToggle(!toggle)} className="block p-4 text-sm font-semibold text-gray-400 hover:bg-slate-50 hover:text-[#E77C40] rounded" href="#read-about-app">Magia Aplikacji</a>
							</li>
							<li onClick={() => setToggle(!toggle)} className="mb-1">
								<a className="block p-4 text-sm font-semibold text-gray-400 hover:bg-slate-50 hover:text-[#E77C40] rounded" href="#read-about-earnings">Zarabiaj</a>
							</li>
							<li onClick={() => setToggle(!toggle)} className="mb-1">
								<a className="block p-4 text-sm font-semibold text-gray-400 hover:bg-slate-50 hover:text-[#E77C40] rounded" href="#contact-us">Kontakt</a>
							</li>
						</ul>
					</div>
					<div className="mt-auto">
						<div className="pt-6">
							<a className="block px-4 py-[12px] mb-3 leading-loose text-xs text-center font-semibold leading-none bg-gray-50 hover:bg-gray-100" style={{cursor: 'pointer'}} onClick={handleLogin}>Zaloguj się</a>
							<a className="flex items-center justify-center py-[12px] hover:py-[10px] mb-2 leading-loose text-xs text-white font-semibold bg-[#E77C40] hover:bg-[#FAFAFA] hover:text-[#E77C40] hover:border-2 hover:border-[#E77C40] transition duration-200" style={{cursor: 'pointer'}} onClick={handleLogin}>Zarejestruj się!&emsp;<BsArrowRightShort size={16} fontWeight={700}/></a>
						</div>
					</div>
				</nav>
			</div>
		</div>
    )
}

export default Header