import { useState } from "react";
import { RiAccountCircleFill } from "react-icons/ri";


const BlogsDetails = ({ blog }) => {
    const [showFullDescription, setShowFullDescription] = useState(true);

    const { image, questions, answers, authorName, comments, topic } = blog;
    return (
        <div className="flex gap-8 p-8 m-8 border-2 border-cyan-950 rounded-xl">
            <img className="w-1/2 h-52" src={image} alt="" />
            <div className="">
                <h1 className="font-bold text-xl font-serif hover:text-blue-900">{questions}</h1>
                {
                    showFullDescription ?
                        <p>{answers.slice(0, 400)} <button onClick={() => (setShowFullDescription(!showFullDescription))} className="font-semibold text-red-800">read more...</button></p> : <p>{answers} <button onClick={() => (setShowFullDescription(!showFullDescription))} className="font-semibold text-red-800">show less...</button></p>
                }
                <div className="flex gap-4 items-center text-gray-800 font-semibold">
                    <p className="flex gap-1 items-center"><RiAccountCircleFill />{authorName}</p>
                    <p>Comments: {comments}</p>
                </div>
                <p className="text-gray-800">#{topic}</p>
            </div>
        </div>
    );
};

export default BlogsDetails;