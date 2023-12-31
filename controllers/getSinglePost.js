export default async function getSinglePost1(id){
    let url = process.env.API_URL
    try{
        const response= await fetch(`${url}/api/posts/${id}`, {
            cache:'no-store'
        })
        const post = await response.json();
        return post.data;
    }
    catch(err){
        console.log(err);
    }

}