import api_call_mock_post from "./mock/api_call_mock_post";
import api_call_mock_users from "./mock/api_call_mock_users";

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

export async function getRandomPostComplete(size = 10) {
    await sleep(5);
    const posts = [];
    for (let index = 0; index < 10; index++) {
        let conn = getRandomConnection();
        let post = getRandomPost();
        posts.push({
            ...conn,
            ...post
        })
    }
    return posts;
}

function getRandomConnection(){
    const conns = api_call_mock_users.GET['/connection'].data;
    var conn = conns[Math.floor(Math.random() * conns.length)];
    return conn;
}

function getRandomPost(){
    const posts = api_call_mock_post.GET['/post'].data;
    var post = posts[Math.floor(Math.random() * posts.length)];
    return post;
}

export default {
    getRandomPost,
    getRandomConnection,
    getRandomPostComplete
}

