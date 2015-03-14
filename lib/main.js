import RedditApi from  'lib/reddit-api'
import ExtractGifs from 'lib/extract-gifs'
import DisplayGifs from 'lib/display-gifs'

RedditApi.load()
  .then(ExtractGifs)
  .then(DisplayGifs)

export default {}
