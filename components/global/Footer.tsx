export default function Footer() {
  return (
    <footer className="border-t-2 border-zinc-800">
      <div className="max-w-7xl mx-auto flex lg:flex-row flex-col items-center lg:justify-between justify-center gap-y-4 md:px-16 px-6 py-16 text-zinc-400">
        <small className=" duration-200 font-mono">
          All rights reserved &copy; {new Date().getFullYear()}
        </small>

        <small className="hover:text-white duration-200">
          <a
            href="https://github.com/hammadurrehman2006"
            target="_blank"
            rel="noreferrer noopener"
          >
            Prepared by <span className="text-green-400">Muhammad Hammad ur Rehman</span>
          </a>
        </small>
      </div>
    </footer>
  );
}
