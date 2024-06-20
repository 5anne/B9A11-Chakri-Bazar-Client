

const Process = () => {
    return (
        <div>
            <p className="text-center uppercase text-red-800 font-semibold mt-28">Process</p>
            <h1 className="font-bold text-center text-xl md:text-3xl font-display border-2 px-6 py-4 uppercase my-8 w-1/2 mx-auto border-b-2 border-teal-950 pb-4">How Chakri Bazar Works For You</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 w-11/12 mx-auto mb-10">
                <div className="flex flex-col justify-center shadow-xl p-6 hover:border-2 border-teal-950">
                    <img className="w-16 mx-auto" src="https://i.postimg.cc/5t15dCcM/job-search-384581.png" alt="" />
                    <p className="font-bold text-center font-display text-xl text-blue-900 mt-4">Finding an Appropriate Job</p>
                </div>
                <div className="flex flex-col justify-center shadow-xl p-6 hover:border-2 border-teal-950 lg:mt-12">
                    <img className="w-16 mx-auto" src="https://i.postimg.cc/nzhvMfcR/chat-2488783.png" alt="" />
                    <p className="font-bold text-center font-display text-xl text-blue-900 mt-4">Ensuring a Handsome Salary</p>
                </div>
                <div className="flex flex-col justify-center shadow-xl p-6 hover:border-2 border-teal-950">
                    <img className="w-16 mx-auto" src="https://i.postimg.cc/25zWXNvk/building-197719.png" alt="" />
                    <p className="font-bold text-center font-display text-xl text-blue-900 mt-4">Recommendation to Top Companies</p>
                </div>
                <div className="flex flex-col justify-center shadow-xl p-6 hover:border-2 border-teal-950 lg:mt-12">
                    <img className="w-16 mx-auto" src="https://i.postimg.cc/hjvdc8pN/wayfinding-sign-11024054.png" alt="" />
                    <p className="font-bold text-center font-display text-xl text-blue-900 mt-4">Guidance to Crack the Job Interview</p>
                </div>
                <div className="flex flex-col justify-center shadow-xl p-6 hover:border-2 border-teal-950">
                    <img className="w-16 mx-auto" src="https://i.postimg.cc/NGydxRBN/technical-support-11796978.png" alt="" />
                    <p className="font-bold text-center font-display text-xl text-blue-900 mt-4">All types of Support</p>
                </div>
            </div>
        </div >
    );
};

export default Process;