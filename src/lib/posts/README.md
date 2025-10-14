# Information on making a post

Make a new .svelte file in this folder. The name doesn't matter.

Copy-paste this into the top of the file and change the date to today.
```
<script context="module">
  import Post from '$lib/components/posts/Post.svelte';
  import PostBody from '$lib/components/posts/PostBody.svelte';
  import PostDate from '$lib/components/posts/PostDate.svelte';
  import PostImage from '$lib/components/posts/PostImage.svelte';
  import PostLink from '$lib/components/posts/PostLink.svelte';
  import PostTitle from '$lib/components/posts/PostTitle.svelte';
  export const metadata = { date: "YYYY/MM/DD" };
</script>
```

Here is an example post file. Everything needs to be wrapped in between the Post tags. Just copy paste this and change the content. Then you need a PostTitle, PostDate, and PostBody. the p tag is paragraph text, so put text in that.
You can use a link in between PostLink tags, and an image with PostImage tags.

```
<script context="module">
  import Post from '$lib/components/posts/Post.svelte';
  import PostBody from '$lib/components/posts/PostBody.svelte';
  import PostDate from '$lib/components/posts/PostDate.svelte';
  import PostImage from '$lib/components/posts/PostImage.svelte';
  import PostLink from '$lib/components/posts/PostLink.svelte';
  import PostTitle from '$lib/components/posts/PostTitle.svelte';
  export const metadata = { date: "2027/10/12" };
</script>

<Post>
  <PostTitle title="Cool Post Title 1" />
  <PostDate date={metadata.date} />
  <PostBody>
    <p>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. <PostLink
        href="https://www.worldcubeassociation.org">Exercitationem</PostLink
      > voluptatem voluptas ab quas nobis asperiores, magni et officiis itaque alias
      culpa aliquid. Sint, quaerat quibusdam aliquam soluta, laboriosam atque error
      officiis explicabo facere dolor incidunt, aspernatur ducimus similique accusantium
      hic accusamus id eligendi magni iusto quidem ipsam qui doloremque! Sunt?
    </p>
    <PostImage src="/competitions/image-row/i1.webp"></PostImage>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae temporibus
      quisquam impedit fugiat inventore quidem iste nesciunt aspernatur eius
      harum.
    </p>
  </PostBody>
</Post>

```