import Logo from "@/public/next.svg";

const Features = () => {
  return (
    <footer className="bg-secondary py-16">
      <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
        <div className="mt-16 basis-1/2 md:mt-0">
          <img
            className="h-8 w-auto"
            alt="logo"
            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
          />
          <p className="my-5">
            Lorem vitae ut augue auctor faucibus eget eget ut libero. Elementum
            purus et arcu massa dictum condimentum. Augue scelerisque iaculis
            orci ut habitant laoreet. Iaculis tristique.
          </p>
          <p>© LuizDev All Rights Reserved.</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Links</h4>
          <p className="my-5">Massa orci senectus</p>
          <p className="my-5">Et gravida id et etiam</p>
          <p>Ullamcorper vivamus</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Contact Us</h4>
          <p className="my-5">Tempus matus mattis risus volutpad egestas.</p>
          <p>(333)425-6825</p>
        </div>
      </div>
    </footer>
  );
};
export default Features;