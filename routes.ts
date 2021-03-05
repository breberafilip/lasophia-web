import axios from 'axios'

export const dynamicRoutes = async () => {
  const resForPosts = await axios.get(
    'https://lasophia-backend.herokuapp.com/posts'
  )
  const routesForPosts = resForPosts.data.map((post: any) => {
    return {
      route: '/blog/' + post.slug,
      payload: post,
    }
  })
  return routesForPosts
}
