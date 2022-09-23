import axios from "axios";
import { Post } from "../../types/posts/Post";
import useSWR from "swr";
import SharedConfigContext from "../../context/SharedConfigContext";
import { useContext } from "react";

export type UsePostsType = {
  data?: Post[];
};

const usePosts = (): UsePostsType => {
  const { serverURL } = useContext(SharedConfigContext);
  const fetcher = (url: string) => axios.get(url).then((res) => res.data);
  const { data } = useSWR(`${serverURL}/platform/posts`, fetcher, {
    refreshInterval: 2000000,
  });

  return { data: data?.posts };
};

export default usePosts;
