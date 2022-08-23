function handleStepEnter(response) {
  // update graphic based on step
  const linkHead = 'https://flo.uri.sh/story/872914/embed#slide-'
  const slide = response.index

  d3.select('.scrolly__chart iframe')
    .attr('src', linkHead + slide);
}
