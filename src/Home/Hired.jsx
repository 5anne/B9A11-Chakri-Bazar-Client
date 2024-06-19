

const Hired = () => {
    return (
        <div>
            <p className="text-center uppercase text-red-800 font-semibold mt-28">Hired</p>
            <h1 className="font-bold text-center text-3xl font-display border-2 px-6 py-4 border-orange-800 uppercase my-8 w-1/2 mx-auto pb-4">Hired Applicants</h1>
            <div className="flex justify-between mx-10 mt-10 mb-28">
                <div className="p-8 shadow-2xl hover:animate-pulse">
                    <img className="w-48 h-48 rounded-full" src="https://i.postimg.cc/zvcm4N39/portrait-businesswoman-isolated-home-23-2148813223.jpg" alt="" />
                    <p className="text-center font-bold text-xl mt-4 mb-2">Daffodil Clara</p>
                    <p className="text-center">Software Engineer</p>
                </div>
                <div className="p-8 shadow-2xl hover:animate-pulse">
                    <img className="w-48 h-48 rounded-full" src="https://i.postimg.cc/s2rKzbhT/portrait-smiley-business-man-23-2148514859.jpg" alt="" />
                    <p className="text-center font-bold text-xl mt-4 mb-2">David Johnson</p>
                    <p className="text-center">Web Developer</p>
                </div>
                <div className="p-8 shadow-2xl hover:animate-pulse">
                    <img className="w-48 h-48 rounded-full" src="https://i.postimg.cc/63Hhd31P/smiling-happy-businessman-looking-camera-23-2148113005.jpg" alt="" />
                    <p className="text-center font-bold text-xl mt-4 mb-2">Jet Noah</p>
                    <p className="text-center">UX/UI Designer</p>
                </div>
                <div className="p-8 shadow-2xl hover:animate-pulse">
                    <img className="w-48 h-48 rounded-full" src="https://i.postimg.cc/ZY7hW8jV/portrait-beautiful-smiling-blond-model-dressed-summer-hipster-clothes-158538-5481.jpg" alt="" />
                    <p className="text-center font-bold text-xl mt-4 mb-2">Zara Rahman</p>
                    <p className="text-center">Web Developer</p>
                </div>
            </div>
        </div>
    );
};

export default Hired;