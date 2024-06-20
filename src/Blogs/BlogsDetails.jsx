import { useState } from "react";
import { RiAccountCircleFill } from "react-icons/ri";


const BlogsDetails = ({ blog }) => {
    const [showFullDescription, setShowFullDescription] = useState(true);

    const { image, questions, answers, authorName, comments, topic } = blog;
    return (
        <div className="flex gap-8 p-8 m-8 border-2 border-cyan-950 bg-teal-950 hover:bg-teal-800 rounded-xl">
            <img className="w-1/2 h-52" src={image} alt="" />
            <div className="">
                <h1 className="font-bold text-xl text-gray-300 font-serif hover:text-blue-900">{questions}</h1>
                {
                    showFullDescription ?
                        <p className="text-gray-400">{answers.slice(0, 400)} <button onClick={() => (setShowFullDescription(!showFullDescription))} className="font-semibold text-red-800">read more...</button></p> : <p className="text-gray-400">{answers} <button onClick={() => (setShowFullDescription(!showFullDescription))} className="font-semibold text-red-800">show less...</button></p>
                }
                <div className="flex gap-4 items-center text-gray-300 font-semibold">
                    <p className="flex gap-1 items-center"><RiAccountCircleFill />{authorName}</p>
                    <p>Comments: {comments}</p>
                </div>
                <p className="text-gray-400">#{topic}</p>
            </div>
        </div>
    );
};

export default BlogsDetails;