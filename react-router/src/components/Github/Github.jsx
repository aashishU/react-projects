import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

function Github() {
	const data = useLoaderData();

	// const [data, setData] = useState([]);
	// useEffect(() => {
	// 	fetch("https://api.github.com/users/aashishU")
	// 		.then((response) => response.json())
	// 		.then((data) => {
	// 			console.log(data);
	// 			setData(data);
	// 		});
	// }, []);

	return (
		<div className="w-screen h-full text-center m-0 bg-gray-600 text-white p-4 text-3xl flex flex-col">
			<span className="underline underline-offset-4">Github</span>
			<div className="flex justify-evenly md:flex-row flex-col my-20 border-4 rounded-lg border-gray-200 md:w-3/4 w-100 mx-auto py-6">
				<div className="flex justify-center sm:my-4">
					<img
						src={data.avatar_url}
						alt="image"
						className="rounded-full md:w-60 w-40"
					/>
				</div>

				<div className="px-4 flex flex-col md:h-48 h-20 my-auto py-4 justify-center ">
					<div className="text-2xl drop-shadow-md">Name: {data.name}</div>
					<div className="text-2xl drop-shadow-md">
						Location: {data.location}
					</div>
				</div>
			</div>
		</div>
	);
}

export default Github;

export const githubInfoLoader = async () => {
	const response = await fetch("https://api.github.com/users/aashishU");
	return response.json();
};
