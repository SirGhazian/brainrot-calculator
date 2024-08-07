export default function Navbar({
  pageType,
}: {
  pageType: string;
}) {
  return (
    <>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css"
      />

      <div className="group absolute p-3 mr-3 right-0 top-0 justify-end">
        <i className="fa-solid fa-arrow-right sm:mr-2 md:mr-3 group-hover:mr-2 ease-in-out duration-300" />
        <a
          className="group-hover:font-semibold ease-in-out duration-300"
          href={
            pageType === "home" ? "/about" : "/"
          }
        >
          {pageType == "home" ? " About" : "Back"}
        </a>
      </div>
    </>
  );
}
