import Hero from "../components/home-page/hero";
import FeaturedPosts from "../components/home-page/featured-posts";
import {getFeaturedPosts} from "../lib/posts-util";
import Head from "next/head";



export default function HomePage(props) {
  return (
    < >
        <Head>
            <title>Dmytro blog</title>
        </Head>
        <Hero />
        <FeaturedPosts posts={props.posts}/>
    </>
  )

}
export function getStaticProps(){
    const  featuredPosts = getFeaturedPosts()
    return {
        props: {
            posts: featuredPosts
        }

    }
}
