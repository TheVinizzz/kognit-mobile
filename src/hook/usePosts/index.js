import {useState, useEffect} from "react"
import {getPosts} from "../../services/posts"

const usePosts = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const handleGet = async () => {
            const data = await getPosts();
            setPosts(data);
        };
        handleGet();
    }, []);

    return {posts}
}

export default usePosts