import mockService from "./mockService";

export async function getPost(){
   const posts = await mockService.getRandomPostComplete(10);
   return posts;
}   