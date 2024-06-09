import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-900">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <Link
            to={"/"}
            className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
            <img
              className="h-8 w-auto"
              src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
              alt=""
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              Whispers
            </span>
          </Link>
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
            <li>
              <Link className="hover:underline me-4 md:me-6" to={"/"}>
                About
              </Link>
            </li>
            <li>
              <Link className="hover:underline me-4 md:me-6" to={"/"}>
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link className="hover:underline me-4 md:me-6" to={"/"}>
                Licensing
              </Link>
            </li>
            <li>
              <Link className="hover:underline me-4 md:me-6" to={"/"}>
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2024{" "}
          <Link className="hover:underline" to={"/"}>
            Whispers™
          </Link>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
}
