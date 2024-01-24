import { Link } from "react-router-dom";

export default function PostCard({ data }) {
  return (
    <Link className="bg-transparent border-2 border-black/60 dark:border-white/40 hover:border-black hover:dark:border-white w-full h-64 rounded-2xl flex  items-center justify-between dark:text-white font-Main ">
      <img
        src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fdifundir.org%2Fwp-content%2Fuploads%2F2018%2F02%2Fmorning_picdump_2745_640_22.jpg&f=1&nofb=1&ipt=e1bf4cd095c96026329d8549ba459411fac365718de4cd72f05ab30030aa5f0e&ipo=images"
        className="h-60 pl-1 rounded-2xl p-0"
        alt="Post"
      />
      <div className="flex flex-col justify-between w-10/12 ">
        <h3 className="px-8 pt-8 pb-2 text-5xl">Title</h3>
        <h5 className=" text-gray-800 px-8 pb-6 text-lg">Subtitle</h5>
        <div className="px-8 pb-6 overflow-hidden">
          <p className="text-gray-600 text-sm  line-clamp-3 max-w-full">
            contenido contenido contenido contenido contenido contenido
            contenido contenido contenido contenido contenido contenido
            contenido contenido contenido contenido contenido contenido
            contenido contenido contenido contenido contenido contenido
            contenido contenidofdasfadfadsfdasfasfadfd afasfafaf a
            fasfasfasdfasfas fafafad
          </p>
        </div>
      </div>
    </Link>
  );
}
