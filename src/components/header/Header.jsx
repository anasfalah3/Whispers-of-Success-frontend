import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="bg-white">
  <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
    <div className="flex lg:flex-1">
      <a href="#" className="-m-1.5 p-1.5">
        <span className="sr-only">Your Company</span>
        <img className="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt=""/>
      </a>
    </div>
    
    <div className="hidden lg:flex lg:gap-x-12">
      <Link className="text-sm font-semibold leading-6 text-gray-900" to={'/'}>Home</Link>
      <Link className="text-sm font-semibold leading-6 text-gray-900" to={'/Podcasts'}>Podcasts</Link>
      <Link className="text-sm font-semibold leading-6 text-gray-900" to={'/Marketplace'}>Podcasts</Link>
      <Link className="text-sm font-semibold leading-6 text-gray-900" to={'/Company'}>Podcasts</Link>
      
    </div>
    <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:align-middle">
      <a href="#" className="text-sm mx-4 font-semibold leading-6 py-1 px-2 rounded-md text-gray-900 hover:bg-gray-200 transition">Switch Mode</a>
      <Link className="text-sm mx-1 font-semibold leading-6 py-1 px-2 rounded-md text-gray-900 hover:bg-gray-200 transition" to={'/Login'}>Log in</Link>
      <Link className="text-sm mx-1 font-semibold leading-6 py-1 px-2 rounded-md text-white bg-blue-400 hover:bg-blue-700 transition" to={'/Register'}>Register</Link>
    </div>
  </nav>
  {/* Mobile menu, show/hide based on menu open state.  */}
  <div className="lg:hidden" role="dialog" aria-modal="true">
     {/* Background backdrop, show/hide based on slide-over state. */}
    <div className="fixed inset-0 z-10"></div>
    <div className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
      <div className="flex items-center justify-between">
        <a href="#" className="-m-1.5 p-1.5">
          <span className="sr-only">Your Company</span>
          <img className="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt=""/>
        </a>
        <button type="button" className="-m-2.5 rounded-md p-2.5 text-gray-700">
          <span className="sr-only">Close menu</span>
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
      <div className="mt-6 flow-root">
        <div className="-my-6 divide-y divide-gray-500/10">
          <div className="space-y-2 py-6">
            <Link className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50" to={'/'}>Home</Link>
            <Link className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50" to={'/Podcasts'}>Podcasts</Link>
            <Link className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50" to={'/Marketplace'}>Marketplace</Link>
            <Link className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50" to={'/Company'}>Company</Link>
          </div>
          <div className="py-6">
            <Link className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50" to={'/Login'}>Log in</Link>
            <Link className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50" to={'/Register'}>Register</Link>
          </div>
        </div>
      </div>
    </div>
  </div>
</header>

  );
}
