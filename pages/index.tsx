import type { GetStaticProps, NextPage } from "next";
import Link from "next/link";
import { getAllMdx } from "@/lib/mdx";
import { MDXFrontMatter } from "@/lib/types";
import { Page } from "@/components/Page";
import { PostList } from "@/components/PostList";
import { ArrowRight } from "react-feather";

interface HomeProps {
  posts: Array<MDXFrontMatter>;
}

const Home: NextPage<HomeProps> = ({ posts }) => {
  return (
    <>
      <Page
        title="Home"
        description={
          <>
            <p>
              Dxrery Networks is a Towny server hosted in South Africa with custom mod-like features and free time-based ranks.
              Join us using the IP dxrery.cyou. It features jobs, quests, a battlepass, player-based and server shops, towny, slimefun, etc. 
              We have players from all over the world. Join our {" "}
              <a href="https://discord.gg/Ubx7Tvu">
                Discord
              </a>
              .
            </p>
          </>
        }
      >
        <PostList posts={posts} />
        <div className="mt-8">
          <Link href="/posts">
            <a className="group inline-flex items-center gap-2 text-pink-600">
              View more posts{" "}
              <ArrowRight
                className="group-hover:translate-x-0.5 transition-transform"
                width={".9em"}
              />
            </a>
          </Link>
        </div>
      </Page>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const mdxFiles = getAllMdx().map((post) => post["frontMatter"]);
  return {
    props: {
      posts: mdxFiles.slice(0, 5),
    },
  };
};

export default Home;
