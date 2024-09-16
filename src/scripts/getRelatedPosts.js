//関連記事
export function getRelatedPosts(allPosts, currentSlug, currenTag) {
  const relatedPosts = allPosts.filter(
    (post) =>
      post.slug !== currentSlug && post.data.tags.includes(currenTag[0]),
  )

  //const relatedPosts = allPosts
  return relatedPosts.slice(0, 5) // slice()で最初の5つを取得
}
//console.log(`tags; ${post.frontmatter.tags}`),
//console.log(`slug; ${post.frontmatter.slug}`),
//console.log(`post; ${post}`),
