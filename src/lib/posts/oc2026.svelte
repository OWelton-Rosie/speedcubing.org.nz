<script context="module">
  import Post from '$lib/components/posts/Post.svelte';
  import PostBody from '$lib/components/posts/PostBody.svelte';
  import PostDate from '$lib/components/posts/PostDate.svelte';
  import PostImage from '$lib/components/posts/PostImage.svelte';
  import PostLink from '$lib/components/posts/PostLink.svelte';
  import PostTitle from '$lib/components/posts/PostTitle.svelte';
  export const metadata = { date: "2025/10/25" };
</script>

<Post>
  <PostTitle title="WCA Oceanic Championship 2026" />
  <PostDate date={metadata.date} />
  <PostBody>
    
  </PostBody>
</Post>