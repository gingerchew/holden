import { Head, asset } from "$fresh/runtime.ts";

export default function Home() {
  return (
    <>
      <Head>
        <title>Holden</title>
        <link href={asset('/index.css')} rel="stylesheet" />
      </Head>
      <section class="content-wrapper">
        <h1 class="text-upper">Holden</h1>
        <p>Need a placeholder image, but don't want to use a random picture generator? Holden is here for you</p>
        <a href="https://github.com/gingerchew/holden">Github</a>
      </section>
      <section>
        <ul className="directions">
          <li data-title="Dimensions">
            <div  className="content-wrapper">
              <h2>To generate the image you need, add the dimensions to the end of the url.</h2>
              <p>E.g. <code>/200</code> will generate an image 200x200 in size. <code>/200x300</code> will generate an image 200x300 in size</p>
              <img src="/200x300" alt="" height="200" width="300"/>
            </div>
          </li>
        </ul>
      </section>
    </>
  );
}
