import Viewer from './Viewer.svelte'

const viewer = new Viewer({
  target: document.body,
  props: {
    dataURL: document
      .querySelector('script[data-photo-viewer]')
      .getAttribute('data-photo-viewer')
  },
  intro: true
})

export default viewer
