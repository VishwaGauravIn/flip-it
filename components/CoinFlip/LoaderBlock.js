import Loader from "react-loader-spinner"
export default function LoaderBlock(params) {
    return(
        <>
        <div className="flex flex-col justify-center items-center z-20 absolute w-80 h-80 lg:w-96 lg:h-96 dark:bg-red-400 bg-gray-800 rounded-3xl m-4 lg:m-10 shadow-xl">
        <Loader
        type="Grid"
        color="white"
        height={100}
        width={100}
      />
        </div>
        </>
    )
};
