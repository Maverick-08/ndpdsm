const FooterComponent = () => {
  return (
    <div className="border-t border-gray-200 pt-8">
      <p className="text-center text-gray-500 text-sm">
        &copy; 2026 NDPDSM. All rights reserved. New Product Development and
 Smart Manufacturing.
      </p>
      <p className="pt-2 text-center text-gray-500 text-sm cursor-pointer">
        Built by{" "}
        <a className="underline" href="https://vivekojha.vercel.app/">
          Vivek Ojha
        </a>
      </p>
    </div>
  );
};

export default FooterComponent;
