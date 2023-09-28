import { useLoaderData } from "react-router-dom";

function Github() {
  const data = useLoaderData();

  return <div className="max-w-6xl mx-auto py-5 px-3">
    <div className="w-full p-5 pb-7 flex flex-col items-center bg-slate-700 text-white gap-4 rounded-xl">
      <h2 className="text-3xl">Followers: {data.followers}</h2>
      <img src={data.avatar_url} alt="" className="w-full max-w-xs rounded-3xl" />
    </div>
  </div>;
}

export default Github;
