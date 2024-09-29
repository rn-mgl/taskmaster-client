import Link from "next/link";

const Hero = () => {
  return (
    <div className="w-full min-h-screen h-screen flex flex-col items-center justify-start bg-gradient-to-b from-primary-main to-primary-dark">
      <div className="w-full h-full flex flex-col items-center justify-center my-auto max-w-screen-l-l p-4 gap-4 t:p-8 t:gap-8 pb-0 t:pb-0">
        <div className="w-full flex flex-col items-start justify-center text-default-light gap-2 t:items-center l-s:gap-4 mt-auto">
          <p
            className="font-black font-header text-4xl l-s:text-6xl text-default-white p-3
                      drop-shadow-md"
          >
            Organize. <br className="t:hidden" /> Track.{" "}
            <br className="t:hidden" /> Accomplish.
          </p>

          <p className="text-sm font-body w-full t:text-base t:text-center max-w-screen-t l-s:text-lg">
            The ultimate project management tool to boost your productivity and
            streamline your workflow. Keep your team on track and your projects
            running smoothly.
          </p>
        </div>

        <div
          className="w-full flex flex-col items-center justify-center gap-2 font-header
                    t:flex-row t:max-w-80 l-s:gap-4"
        >
          <Link
            href="/register"
            className="w-full font-extrabold bg-secondary-main p-2 rounded-sm text-center text-primary-dark border-2 border-secondary-main"
          >
            Register
          </Link>
          <Link
            href="/login"
            className="w-full font-extrabold p-2 rounded-sm text-center border-default-light border-2 text-default-light"
          >
            Log In
          </Link>
        </div>

        <div
          className="w-full flex flex-col items-center justify-center aspect-video bg-gradient-to-b from-primary-light to-accent-light/50 mt-auto rounded-t-md
                    max-w-screen-t"
        ></div>
      </div>
    </div>
  );
};

export default Hero;
